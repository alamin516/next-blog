import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req, res) {
    try {
      let reqBody = await req.json();

      const prisma = new PrismaClient();

      const isExistEmail = await prisma.subscriber.findUnique({
        where: {email: reqBody.email}
      })

      if(isExistEmail){
        return NextResponse.json({status: 'fail', data: "Already Subscribed!"})
      }
  
      const result = await prisma.subscriber.create({
          data: reqBody
      });

      
  
      return NextResponse.json({ status: "success", data: result });
      
    } catch (error) {
      return NextResponse.json({ status: "failed", data: error });
    }
  }