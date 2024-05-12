import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";


export async function GET(req, res){
    try {
        const prisma = new PrismaClient();
        const result = await prisma.category.findMany();
        return NextResponse.json({status: 'success', data: result})
        
    } catch (error) {
        return NextResponse.json({status: 'fail', data: error}, {status: 500})
    }
}