import { NextResponse } from 'next/server'
import { SUPPORTED_LANGUAGES } from './config/languages'

export function middleware(request) {
  const path = request.nextUrl.pathname;
  const defaultLang = Object.values(SUPPORTED_LANGUAGES).find(lang => lang.default)?.code || 'en';

  // If it's not a valid language path
  if (!Object.keys(SUPPORTED_LANGUAGES).some(lang => path.startsWith(`/${lang}`)) && path !== '/') {
    // Redirect to the default language
    return NextResponse.redirect(new URL(`/${defaultLang}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)']
}