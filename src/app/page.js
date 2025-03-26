"use client";
import React, { useEffect } from "react";
import { useRouter, usePathname } from 'next/navigation';
import { SUPPORTED_LANGUAGES } from 'src/config/languages';

export default function Main() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      let currentLang = localStorage.getItem("lang");
      console.log("current language is:"+currentLang);
      // Set default language if none is selected
      if (!currentLang) {
        const defaultLang = Object.values(SUPPORTED_LANGUAGES).find(lang => lang.default)?.code || 'en';
        localStorage.setItem("lang", defaultLang);
        currentLang = defaultLang;
      }
  
      // Get valid language paths from configuration
      const validPaths = ['/', ...Object.keys(SUPPORTED_LANGUAGES).map(lang => `/${lang}`)];
  
      // If the user is at the root (`/`), redirect to the default language
      if (pathname === '/' || !validPaths.includes(pathname)) {
        router.replace(`/${currentLang}`);
      }
    }
  }, [pathname, router]);
  

  return null;
}