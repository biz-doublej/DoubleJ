import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PUBLIC_FILE = /\.(.*)$/;
const locales = ["ko", "en", "zh"] as const;
const defaultLocale = "ko";

function getLocale(request: NextRequest) {
  // Very simple: try cookie, then Accept-Language, else default
  const cookie = request.cookies.get("NEXT_LOCALE")?.value;
  if (cookie && locales.includes(cookie as any)) return cookie as typeof locales[number];

  const header = request.headers.get("accept-language");
  if (header) {
    const preferred = header.split(",")[0].split("-")[0];
    if (locales.includes(preferred as any)) return preferred as typeof locales[number];
  }
  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Ignore public files and API
  if (
    PUBLIC_FILE.test(pathname) ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next")
  ) {
    return;
  }

  // If path already includes a locale, continue
  const pathLocale = pathname.split("/")[1];
  if (locales.includes(pathLocale as any)) return;

  // Otherwise, redirect to locale-prefixed path
  const locale = getLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|_next/webpack-hmr|favicon.ico|sitemap.xml|robots.txt|.*\\..*).*)',
  ],
};
