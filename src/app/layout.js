import "../app/globals.css";
import { headers } from 'next/headers';
import { SUPPORTED_LANGUAGES } from 'src/config/languages';


export default async function Layout({ children }) {
  const headersList = await headers();
  const pathname = headersList.get('x-pathname') || '';
  const currentLang = Object.keys(SUPPORTED_LANGUAGES).find(lang => pathname.startsWith(`/${lang}`)) || 'en';


  return (
    <html lang={currentLang}>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
