import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";



export async function POST(req, res){
    try {
        const prisma = new PrismaClient();
        const reqBody = await req.json();
        const {name} = reqBody

        let slug = name.toLowerCase().replace(/[\s\W]+/g, '-');


        const data = {...reqBody, slug: slug}

        const result = await prisma.category.create({
            data: data
        });

        return NextResponse.json({status: 'success', data: result})
        
    } catch (error) {
        return NextResponse.json({status: 'fail', data: error}, {status: 500})
    }
}

export async function GET(req, res){
    try {
        const prisma = new PrismaClient();
        const {searchParams} = new URL(req.url);
        const id = searchParams.get('id');


        const result = await prisma.category.findUnique({
            where: {id: parseInt(id)}
        });

        return NextResponse.json({status: 'success', data: result})
        
    } catch (error) {
        return NextResponse.json({status: 'fail', data: error}, {status: 500})
    }
}


export async function PUT(req, res){
    try {
        const prisma = new PrismaClient();
        const {searchParams} = new URL(req.url);
        const id = searchParams.get('id');

        const reqBody = await req.json();
        const {name} = reqBody;

        let slug = name.toLowerCase().replace(/[\s\W]+/g, '-');


        const result = await prisma.category.update({
            where: {id: parseInt(id)},
            data: {...reqBody, slug:slug}

        });

        return NextResponse.json({status: 'success', data: result})
        
    } catch (error) {
        return NextResponse.json({status: 'fail', data: error}, {status: 500})
    }
}


export async function DELETE(req, res){
    try {
        const prisma = new PrismaClient();
        const {searchParams} = new URL(req.url);
        const id = searchParams.get('id');

        const result = await prisma.category.delete({
            where: {id: parseInt(id)},
        });

        return NextResponse.json({status: 'success', data: result})
        
    } catch (error) {
        return NextResponse.json({status: 'fail', data: error}, {status: 500})
    }
}