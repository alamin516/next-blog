import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  try {
    const prisma = new PrismaClient();
    const { searchParams } = new URL(req.url);
    const type = searchParams.get("type");

    console.log(type)

    const result = await prisma.posts.findMany({
      where: { type: type },
      select: {
        id: true,
        title: true,
        shortDes: true,
        img1: true,
        img2: true,
        img3: true,
        img4: true,
        createdAt: true
      },
    });

    return NextResponse.json({ status: "success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e });
  }
}
