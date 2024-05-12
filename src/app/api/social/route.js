import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  try {
    const prisma = new PrismaClient();

    const result = await prisma.social.findMany();

    return NextResponse.json({ status: "success", data: result });
  } catch (error) {
    return NextResponse.json({ status: "failed", data: error });
  }
}

export async function POST(req, res) {
  try {
    let reqBody = await req.json();

    const prisma = new PrismaClient();

    const result = await prisma.social.create({
        data: reqBody
    });

    return NextResponse.json({ status: "success", data: result });
  } catch (error) {
    return NextResponse.json({ status: "failed", data: error });
  }
}



export async function PUT(req, res){
    try {
        const prisma = new PrismaClient();
        const {searchParams} = new URL(req.url);
        const id = searchParams.get('id')

        
        let reqBody = await req.json();



        const existingRecord = await prisma.social.findUnique({
            where: {
              id: parseInt(id) 
            },
          });

        if (!existingRecord) {
            return res.status(404).json({ status: "failed", error: "Record not found" });
          }
      
          await prisma.social.update({
            where: {
              id: parseInt(id)
            },
            data: {...reqBody}
          });

          return NextResponse.json({status: "success", data: "Social Updated Successfully"})
        
    } catch (error) {
        return NextResponse.json({status: "fail", data: error})
    }
}