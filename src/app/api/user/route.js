import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  try {
    const prisma = new PrismaClient();

    const users = await prisma.user.findMany({
      select: {
        id: true,
        first_name: true,
        last_name: true,
        email: true,
        mobile: true,
        user_status: true,
        role: true,
      },
    });


    const exceptAdmin = users.filter(user=> user.role !== 'ADMIN')



    return NextResponse.json({ status: "success", data: exceptAdmin });
  } catch (error) {
    return NextResponse.json({ status: "failed", data: error });
  }
}
