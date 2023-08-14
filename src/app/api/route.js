import { NextResponse } from "next/server";
import { revalidateTag, revalidatePath } from "next/cache";

// e.g a webhook to `your-website.com/api/revalidate?tag=collection&secret=<token>`
export async function GET(request) {
  //   const secret = request.nextUrl.searchParams.get('secret')
  const tag = request.nextUrl.searchParams.get("tag");
  const path = request.nextUrl.searchParams.get("path");
  //   if (secret !== process.env.MY_SECRET_TOKEN) {
  //     return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
  //   }

  if (!tag) {
    return NextResponse.json({ message: "Missing tag param" }, { status: 400 });
  }

  revalidateTag(tag);
  revalidatePath(path);


  return NextResponse.json({ revalidated: true, tag, now: Date.now() });
}

// import { NextResponse, NextRequest } from "next/server";
// import { revalidatePath, revalidateTag } from "next/cache";

// export async function GET(request) {
//   const tag = request.nextUrl.searchParams.get("tag");
//   revalidateTag(tag);
//   return NextResponse.json({ revalidated: true, tag: tag, now: Date.now() });
// }
