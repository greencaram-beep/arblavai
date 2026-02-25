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
      
      {/* Exchanges */}
      <section className="py-20 text-center">
        <p className="text-slate-500 mb-8 uppercase tracking-widest text-sm">Trusted Data Sources</p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 hover:opacity-100 transition-all duration-500 grayscale hover:grayscale-0">
           {['Binance', 'Bybit', 'OKX', 'HTX', 'KuCoin', 'Gate.io', 'MEXC', 'Bitget'].map(ex => (
             <span key={ex} className="text-2xl font-bold text-white cursor-default select-none">{ex}</span>
           ))}
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">How it works</h2>
        <div className="grid md:grid-cols-3 gap-8 text-left">
          {[
            { step: "01", title: "Select Pairs", text: "Choose which coins and exchanges you want to monitor." },
            { step: "02", title: "Set Filters", text: "Define minimum profit %, max fees, and required volume." },
            { step: "03", title: "Get Alerts", text: "Receive instant notifications in Telegram when opportunities arise." }
          ].map((s) => (
            <div key={s.step} className="p-6 rounded-xl bg-white/5 border border-white/5">
              <div className="text-4xl font-bold text-white/10 mb-4">{s.step}</div>
              <h3 className="text-xl font-bold text-white mb-2">{s.title}</h3>
              <p className="text-slate-400">{s.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
