import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const category = searchParams.get("category");

  const url = new URL("https://newsapi.org/v2/top-headlines");
  url.searchParams.set("country", "us");
  if (category) url.searchParams.set("category", category);
  url.searchParams.set("apiKey", process.env.NEWS_API_KEY!);

  try {
    const res = await fetch(url.toString(), { cache: "no-store" });
    const data = await res.json();

    if (!res.ok) {
      console.error("NewsAPI error:", data);
      return NextResponse.json({ error: "Failed to fetch news" }, { status: res.status });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
