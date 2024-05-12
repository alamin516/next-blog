import { CreateToken } from "@/utility/JWTToken";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";



export async function POST(req, res){
    try {
        const reqBody = await req.json();


        const prisma = new PrismaClient();

        const isExistUser = await prisma.user.findUnique({where: reqBody});



        if(isExistUser?.length === 0){
            return NextResponse.json({status: 'fail', data: "User doesn't exist!"})

        }else{
            let token = await CreateToken(isExistUser['email'], isExistUser['id'])
            let expireDuration = new Date(Date.now()+24*60*60*1000);
            const cookieString = `token=${token}; expires=${expireDuration.toUTCString()}; path=/`;

            return NextResponse.json({status: "success", data: token}, {status: 200, headers: {'set-cookie': cookieString}})
        }
    } catch (error) {
        return NextResponse.json({status: "fail", data: error})
    }
}


// For logout user
export async function GET(req, res){
    let expireDuration = new Date(Date.now() - 24*60*60*1000);
    const response = NextResponse.redirect(new URL('/', req.url), 303);
    response.cookies.set('token', "", {expires: expireDuration});
    return response;
  }