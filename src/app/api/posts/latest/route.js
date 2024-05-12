import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";


export async function GET(req, res) {
  try {
    const prisma = new PrismaClient();

    const result = await prisma.posts.findMany({
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        title: true,
        slug: true,
        shortDes: true,
        img1: true,
        img2: true,
        img3: true,
        img4: true,
        keywords: true,
        createdAt: true,
      }
    });

    return NextResponse.json({ status: "success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e });
  }
}
