import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function POST(req, res) {
  try {
    let reqBody = await req.json();
    const { email, otp } = reqBody;

    const prisma = new PrismaClient();

    const user = await prisma.user.findFirst({
      where: { email: email, otp: otp },
    });

    if (user) {
      await prisma.user.update({
        where: { id: user.id },
        data: { user_status: "verified", otp: "0" },
      });
      return NextResponse.json({ status: "fail", data: "User account activated" });
    } 

    return NextResponse.json({ status: "fail", data: "Invalid Activate URL" });
  } catch (error) {
    return NextResponse.json({ status: "failed", data: error.message });
  }
}
