import { NextResponse } from "next/server";
import { VerifyToken } from "./utility/JWTToken";

export async function middleware(req, res){
    try {
        let token = req.cookies.get('token');
        let payload = await VerifyToken(token['value'])

        console.log(token)


        const requestHeader = new Headers(req.headers);
        requestHeader.set('email', payload['email'])
        requestHeader.set('id', payload['id'])
        return NextResponse.next({request: {headers: requestHeader}})


    } catch (error) {
        if(req.nextUrl.pathname.startsWith("/api/")){
            return NextResponse.json({
                status: 'fail', 
                data: 'Unauthorized'
            }, {status: 401})
        }
        else{
            return NextResponse.redirect(new URL('/login', req.url))
        }
    }
}

export const config = {
    matcher: [
        '/user/profile',
        '/dashboard',
        '/dashboard/posts',
        '/dashboard/users',
        '/api/comments/manage',
    ]
}

