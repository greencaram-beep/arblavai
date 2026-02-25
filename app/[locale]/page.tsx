import Hero from '@/components/Hero';
import LiveStats from '@/components/LiveStats';
import BentoFeatures from '@/components/BentoFeatures';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('Hero');

  return (
    <>
      <Hero />
      <LiveStats />
      <BentoFeatures />
      
      {/* Dual bot architecture */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Два бота — один контур</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
            <p className="text-xs uppercase tracking-wider text-blue-300 mb-3">BOT #1 • Scanner Core</p>
            <h3 className="text-xl font-semibold text-white mb-3">Market Engine</h3>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li>• CEX↔CEX spread scanning</li>
              <li>• Funding arbitrage detection</li>
              <li>• TTL / cooldown / anti-noise filters</li>
              <li>• Writes opportunities into queue</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
            <p className="text-xs uppercase tracking-wider text-emerald-300 mb-3">BOT #2 • Telegram UX</p>
            <h3 className="text-xl font-semibold text-white mb-3">Control & Delivery</h3>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li>• /start in 60 sec onboarding</li>
              <li>• Inline settings & watchlist</li>
              <li>• RU/EN alerts + status counters</li>
              <li>• Reads queue and sends actionable signals</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Exchange universe */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <p className="text-slate-500 mb-8 uppercase tracking-widest text-sm text-center">Exchange Coverage</p>
        <div className="rounded-2xl bg-white/5 border border-white/10 p-6 mb-6">
          <p className="text-white font-semibold mb-4">🏦 CEX (core set + expanded)</p>
          <div className="flex flex-wrap gap-3 text-sm text-slate-300">
            {['Binance','Bybit','OKX','KuCoin','MEXC','HTX','BingX','Gate.io','CoinEx','CoinCatch','Poloniex','Bitget','Phemex','Crypto.com','Kraken','Yobit','AscendEX','Bithumb','DigiFinex','LBank','BitMart','BTCTurk','XT','dYdX'].map(ex => (
              <span key={ex} className="px-3 py-1 rounded-full bg-white/10 border border-white/10">{ex}</span>
            ))}
          </div>
        </div>
        <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
          <p className="text-white font-semibold mb-4">🧠 DEX / Cross-chain targets</p>
          <div className="flex flex-wrap gap-3 text-sm text-slate-300">
            {['Uniswap','SushiSwap','Hyperliquid DEX','OKX DEX','Apex Omni'].map(ex => (
              <span key={ex} className="px-3 py-1 rounded-full bg-white/10 border border-white/10">{ex}</span>
            ))}
          </div>
        </div>
      </section>

      {/* 50+ roadmap */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Roadmap to 50+ Exchanges</h2>
        <div className="grid md:grid-cols-3 gap-5 text-left">
          <div className="p-5 rounded-xl bg-white/5 border border-white/10">
            <p className="text-sm text-blue-300 mb-2">Phase 1 (NOW)</p>
            <p className="text-white font-semibold mb-2">25 live connectors</p>
            <p className="text-slate-400 text-sm">Стабильный пул через CCXT + quality filters.</p>
          </div>
          <div className="p-5 rounded-xl bg-white/5 border border-white/10">
            <p className="text-sm text-emerald-300 mb-2">Phase 2</p>
            <p className="text-white font-semibold mb-2">35+ exchanges</p>
            <p className="text-slate-400 text-sm">Добавляем alias/legacy коннекторы и fallback источники.</p>
          </div>
          <div className="p-5 rounded-xl bg-white/5 border border-white/10">
            <p className="text-sm text-fuchsia-300 mb-2">Phase 3</p>
            <p className="text-white font-semibold mb-2">50+ exchanges</p>
            <p className="text-slate-400 text-sm">Кастомные адаптеры + мониторинг качества каналов в real-time.</p>
          </div>
        </div>
      </section>
    </>
  );
}
