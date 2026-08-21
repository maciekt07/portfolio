import { RESUME_BLOB_URL } from "astro:env/server";

export const prerender = false;

export async function GET() {
  const res = await fetch(RESUME_BLOB_URL);

  if (!res.ok) {
    return new Response("Failed to fetch resume", {
      status: 502,
    });
  }

  return new Response(res.body, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'inline; filename="Maciej_Twarog_Resume.pdf"',
      "Cache-Control": "public, s-maxage=1800, stale-while-revalidate=3600",
    },
  });
}
