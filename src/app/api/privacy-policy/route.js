import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const prisma = new PrismaClient();
    const reqBody = await req.json();

    const result = await prisma.policy.create({
      data: reqBody,
    });

    return NextResponse.json({ status: "success", data: result });
  } catch (error) {
    return NextResponse.json({ status: " fail", data: error });
  }
}

export async function GET(req, res) {
  try {
    const prisma = new PrismaClient();
    const { searchParams } = new URL(req.url);
    const type = searchParams.get("type");

    const result = await prisma.policy.findFirst({ where: { type: type } });

    if (result === null) {
      return NextResponse.json({ status: "fail", data: "No data found!" });
    }

    return NextResponse.json({ status: "success", data: result });
  } catch (error) {
    return NextResponse.json({ status: " fail", data: error });
  }
}

export async function PUT(req, res) {
  try {
    const prisma = new PrismaClient();
    const {searchParams} = new URL(req.url);
    const id = searchParams.get('id')

    const reqBody = await req.json();
    const {...updateData } = reqBody;

    const result = await prisma.policy.update({
      where: {id: parseInt(id)},
      data: updateData
    });

    return NextResponse.json({ status: "success", data: result });
  } catch (error) {
    return NextResponse.json({ status: "fail", data: error }, { status: 500 });
  }
}
