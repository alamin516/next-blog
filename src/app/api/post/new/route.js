import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const prisma = new PrismaClient();
    const reqBody = await req.json();

    const { title } = reqBody;

    const slug = title.toLowerCase().replace(/[\s\W]+/g, "-");

    reqBody.slug = slug;

    const existSlug = await prisma.posts.findUnique({
        where: {
            slug
        }
    })

    if(existSlug){
        return NextResponse.json({ status: "fail", data: 'This title and slug are already exist.' });
    }

    const result = await prisma.posts.create({
      data: reqBody,
    });

    return NextResponse.json({ status: "success", data: result });
  } catch (error) {
    return NextResponse.json({ status: "fail", data: error });
  }
}
