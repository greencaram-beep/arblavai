import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '@/app/globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export const metadata = {
  title: 'Arbitrage Scanner Bot | CEX Spread & Funding',
  description: 'Real-time crypto arbitrage scanner for Telegram. Net edge calculation, fee adjustment, and latency monitoring.',
};

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html lang={locale} className="dark">
      <body className={`${inter.className} bg-background text-slate-200 antialiased selection:bg-primary/30`}>
        <NextIntlClientProvider messages={messages}>
          <div className="relative min-h-screen flex flex-col overflow-hidden">
            {/* Background Gradients */}
            <div className="fixed inset-0 z-[-1] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-background to-background opacity-80 pointer-events-none" />
            <Navbar locale={locale} />
            <main className="flex-grow pt-20">{children}</main>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
