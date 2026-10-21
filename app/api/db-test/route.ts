
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const totalBed = await prisma.bed.count();

    return NextResponse.json({
      success: true,
      message: "Koneksi database berhasil",
      totalBed,
    });
  } catch (error) {
    console.error("Database test error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Gagal mengakses database",
      },
      { status: 500 }
    );
  }
}
