import { Inter, Lora } from 'next/font/google';

import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';

import { FundAccessModal } from '@/features/fundAccessRequest';

import { Footer, Header, Preloader } from '@/shared/ui/components';

import '@/shared/lib/styles/null.scss';
import '@/shared/lib/styles/base.scss';

const lora = Lora({
  variable: '--font-lora',
  subsets: ['latin'],
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Vertex',
  description: 'Vertex',
  icons: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      url: '/favicon.ico',
      media: '(prefers-color-scheme: light)',
    },
    {
      rel: 'icon',
      type: 'image/x-icon',
      url: '/favicon-white.ico',
      media: '(prefers-color-scheme: dark)',
    },
  ],
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  return (
    <html lang={locale}>
      <body className={`${lora.variable} ${inter.variable}`}>
        <NextIntlClientProvider>
          <Header />
          {children}
          <Footer />
          <FundAccessModal />
          <Preloader />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
