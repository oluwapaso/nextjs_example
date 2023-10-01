import { NextResponse } from "next/server";
import db from "../db/db"; 

export async function GET() {

    const [rows] = await db.execute('SELECT * FROM `agents` WHERE `name` IS NOT NULL LIMIT 2');

    return NextResponse.json({
        id:  125,
        message:"Get Hello world",
        data: rows,
    }, { status: 200 })

}

export async function POST() {
    return NextResponse.json({
        id:  1001,
        message:"Post Hello world",
    }, { status: 200 })
} 