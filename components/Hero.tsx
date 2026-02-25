'use client';
import { motion } from 'framer-motion';
import { Bot, ArrowRight, Activity, ShieldCheck, Zap } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function Hero() {
  const t = useTranslations('Hero');

  return (
    <section className="relative px-6 py-20 lg:py-32 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex gap-2 mb-6">
          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20 flex items-center gap-1">
            <Activity size={12} /> {t('badge_coverage')}
          </span>
          <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium border border-accent/20 flex items-center gap-1">
            <Zap size={12} /> {t('badge_latency')}
          </span>
        </div>
        
        <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
          {t('title')}
        </h1>
        <p className="text-xl text-slate-400 mb-8 leading-relaxed max-w-xl">
          {t('subtitle')}
        </p>

        <div className="flex flex-wrap gap-4">
          <Link 
            href="tg://resolve?domain=YOUR_BOT_USERNAME" 
            className="flex items-center gap-2 bg-primary hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg shadow-primary/20 hover:scale-105 active:scale-95"
          >
            <Bot size={20} /> {t('cta_bot')}
          </Link>
          <button className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-semibold backdrop-blur-sm border border-white/10 transition-all hover:scale-105 active:scale-95">
            {t('cta_demo')} <ArrowRight size={18} />
          </button>
        </div>
      </motion.div>

      {/* Telegram Card Mockup */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="relative perspective-1000 group"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-20 animate-pulse group-hover:opacity-40 transition-opacity"></div>
        <div className="relative bg-surface/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl transform group-hover:rotate-1 transition-transform duration-500">
          <div className="flex items-center gap-3 border-b border-white/5 pb-4 mb-4">
            <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
              <Bot className="text-blue-400" size={24} />
            </div>
            <div>
              <div className="font-bold text-white">Arbitrage Scanner</div>
              <div className="text-xs text-blue-400">bot</div>
            </div>
            <div className="ml-auto text-xs text-slate-500">now</div>
          </div>
          
          <div className="space-y-3 font-mono text-sm">
            <div className="p-3 rounded bg-white/5 border-l-4 border-green-500 hover:bg-white/10 transition-colors cursor-pointer">
              <div className="flex justify-between text-green-400 font-bold mb-1">
                <span>OP/USDT</span>
                <span>+1.24% EDGE</span>
              </div>
              <div className="text-slate-300">
                <div>Bybit (Buy) ➞ Binance (Sell)</div>
                <div className="text-xs text-slate-500 mt-1">Est. Net: $45.20 | TTL: ~4s</div>
              </div>
            </div>
            
            <div className="p-3 rounded bg-white/5 border-l-4 border-yellow-500 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
              <div className="flex justify-between text-yellow-400 font-bold mb-1">
                <span>ARB/USDT</span>
                <span>+0.85% FUNDING</span>
              </div>
              <div className="text-slate-300">
                <div>OKX (Long) / Gate (Short)</div>
                <div className="text-xs text-slate-500 mt-1">Next Payment: 00:45:00</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
