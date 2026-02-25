'use client';
import Link from 'next/link';
import { Bot, Globe } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';

export default function Navbar({ locale }: { locale: string }) {
  const t = useTranslations('Nav');
  const pathname = usePathname();
  const router = useRouter();

  const toggleLocale = () => {
    const newLocale = locale === 'en' ? 'ru' : 'en';
    // Simple path replacement for this demo
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/50 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href={`/${locale}`} className="flex items-center gap-2 font-bold text-white text-lg">
          <Bot className="text-primary" />
          <span>Arbitrage<span className="text-slate-500">Scanner</span></span>
        </Link>

        <div className="flex items-center gap-6 text-sm font-medium">
          <Link href={`/${locale}/pricing`} className="text-slate-400 hover:text-white transition-colors">{t('pricing')}</Link>
          <Link href={`/${locale}/docs`} className="text-slate-400 hover:text-white transition-colors">{t('docs')}</Link>
          
          <button 
            onClick={toggleLocale}
            className="flex items-center gap-1 text-slate-400 hover:text-white uppercase"
          >
            <Globe size={14} /> {locale}
          </button>
        </div>
      </div>
    </nav>
  );
}
