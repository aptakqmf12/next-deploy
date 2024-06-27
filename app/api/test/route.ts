// export const dynamic = 'auto'
// export const dynamicParams = true
// export const revalidate = false
// export const fetchCache = 'auto'
// export const runtime = 'nodejs'
// export const preferredRegion = 'auto'

import { redirect } from "next/navigation";
import { cookies, headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

let name = "김태완";

export async function GET(request: Request) {
  return NextResponse.json({ name });
}

export async function POST(request: Request) {
  const body = await request.json();

  name = body.newName;

  return NextResponse.json({ name });
}
