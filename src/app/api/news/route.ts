
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const category = searchParams.get("category");

  const url = new URL("https://newsapi.org/v2/top-headlines");
  url.searchParams.set("country", "us");
  if (category) url.searchParams.set("category", category);
  url.searchParams.set("apiKey", process.env.NEWS_API_KEY!);

  const res = await fetch(url.toString());
  const data = await res.json();

  return NextResponse.json(data);
}
