import type { Metadata } from 'next';
import { Inter, Noto_Sans_KR } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import '../globals.css';
import { Header, Footer, FloatButton } from '../_components';
import { dir } from 'i18next';
import { languages } from '../i18n/settings';

const inter = Inter({ subsets: ['latin'] });

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export const metadata: Metadata = {
  title: 'Excel-Build',
  manifest: '/manifest.json',
  description: 'Library for easy creation and download of Excel files',
  keywords: [
    'excel',
    'xlsx',
    'office',
    'spreadsheet',
    'js-xlsx',
    'xlsx-js',
    'sheetjs-style',
    'sheetjs-style-v2',
    'excel-build',
  ],
};

const notoSansKr = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['100', '400', '700', '900'],
});

export default function RootLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
  params: { lng: string };
}) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body
        className={`${inter.className} ${notoSansKr.className} flex flex-col min-h-screen w-full`}
      >
        <Header lng={lng} />
        <main className='flex-grow mx-10'>{children}</main>
        <Footer />
        <FloatButton />
        <Analytics />
      </body>
    </html>
  );
}
