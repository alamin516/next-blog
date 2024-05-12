import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { SendEmail } from "@/utility/EmailVerify";

export async function POST(req, res) {
  try {
    let reqBody = await req.json();
    const { email } = reqBody;

    const prisma = new PrismaClient();
    
    const existingUser = await prisma.user.findUnique({
        where: { email: email },
    });
    
   
    if (existingUser) {
        return NextResponse.json({ status: "failed", data: "Email already exists" });
    }
    
    let otpCode = Math.floor(100000 + Math.random() * 900000);

    reqBody.otp = otpCode.toString();
    reqBody.role = 'SUBSCRIBER';
    reqBody.user_status = "unverified"

    const newUser = await prisma.user.create({
      data: reqBody
    });

    const verifyUrl = `${process.env.BASE_URL}/user/activate?email=${newUser.email}&otp=${newUser.otp}`


    let EmailText = `Your verification url: <a href="${verifyUrl}" target="_blank">${verifyUrl}</a>`;
    let EmailSubject = `Email Verification`;
    await SendEmail(email, EmailText, EmailSubject);


    return NextResponse.json({ status: "success", data: "Verification email has been sent to your email" });
  } catch (error) {
    return NextResponse.json({ status: "failed", data: error });
    
  }
}






