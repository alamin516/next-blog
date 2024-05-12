import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function PUT(req, res) {
  try {
    const prisma = new PrismaClient();
    const { searchParams } = new URL(req.url);
    const id = parseInt(searchParams.get("id"));

    const reqBody = await req.json();

    const { title } = reqBody;

    if (title) {
      const slug = title.toLowerCase().replace(/[\s\W]+/g, "-");
      reqBody.slug = slug;
    }

    const result = await prisma.posts.update({
      where: {
        id: id,
      },
      data: { ...reqBody },
    });

    return NextResponse.json({ status: "success", data: result });
  } catch (error) {
    return NextResponse.json({ status: "fail", data: error });
  }
}
