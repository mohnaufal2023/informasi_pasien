
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";


export async function GET() {
  try {
    const bedCode = process.env.TABLET_BED_CODE?.trim();

    if (!bedCode) {
      return NextResponse.json(
        { message: "Kode tempat tidur tablet belum dikonfigurasi" },
        { status: 500 }
      );
    }

    const bed = await prisma.bed.findUnique({
      where: { bedCode },
    });

    if (!bed || !bed.isActive) {
      return NextResponse.json(
        { message: "Tempat tidur tidak ditemukan atau tidak aktif" },
        { status: 404 }
      );
    }

    return NextResponse.json(bed);
  } catch (error) {
    console.error("Gagal mengambil data tempat tidur:", error);

    return NextResponse.json(
      { message: "Gagal mengambil data tempat tidur" },
      { status: 500 }
    );
  }
}


export async function POST(request: Request) {
  try {
    const body = await request.json();
    const bedCode = String(body.bedCode ?? "").trim();
    const roomName = String(body.roomName ?? "").trim();

    if (!bedCode || !roomName) {
      return NextResponse.json(
        { message: "Kode tempat tidur dan nama kamar wajib diisi" },
        { status: 400 }
      );
    }

    const bed = await prisma.bed.create({
      data: { bedCode, roomName },
    });

    return NextResponse.json(bed, { status: 201 });
  } catch (error) {
    console.error("Gagal menyimpan data tempat tidur:", error);

    return NextResponse.json(
      { message: "Gagal menyimpan data. Pastikan kode tempat tidur belum digunakan." },
      { status: 400 }
    );
  }
}
