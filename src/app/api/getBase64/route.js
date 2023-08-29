import { NextResponse } from "next/server";
import { getPlaiceholder } from "plaiceholder";

export async function GET(req, { params }) {
  const src = req.nextUrl.searchParams.get("imageUrl");

  const res = await fetch(src);
  //   if (!res.ok) throw new Error("failed to fetch image");
  const buffer = await res.arrayBuffer();
  const { base64 } = await getPlaiceholder(Buffer.from(buffer));

  return NextResponse.json({ base64 });
}
