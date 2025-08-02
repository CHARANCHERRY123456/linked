import { NextResponse } from "next/server";

export async function GET(request : Request) {
  try {
    const apiKey = process.env.NEXT_PUBLIC_APIFY_API_KEY;
    const res = await fetch(`https://api.apify.com/v2/acts?token=${apiKey}`);
    const data = await res.json();
    if(!res.ok) {
        return NextResponse.json({ error: "Failed to fetch actors" }, { status: res.status });
    }
    return NextResponse.json(data);
  } catch (error) {
    console.error("Failed to fetch actors:", error);
    return NextResponse.json({ error: "Failed to fetch actors" }, { status: 500 });
  }
}