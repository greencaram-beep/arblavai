import { Zap, DollarSign, Filter, Activity, ShieldCheck, Layers } from 'lucide-react';

export default function BentoFeatures() {
  const features = [
    {
      title: "CEX-CEX Latency Scanner",
      desc: "Real-time normalization of order books across Binance, Bybit, and OKX to find immediate price discrepancies.",
      icon: <Activity className="text-primary" />,
      col: "md:col-span-2"
    },
    {
      title: "Funding Arbitrage",
      desc: "Catch high positive/negative funding rate deltas before payout times.",
      icon: <DollarSign className="text-accent" />,
      col: ""
    },
    {
      title: "Fee & Slippage Filters",
      desc: "Set custom thresholds for fees, slippage, and minimum volume.",
      icon: <Filter className="text-purple-400" />,
      col: ""
    },
    {
      title: "Telegram Alerts",
      desc: "Instant notifications with direct trading links.",
      icon: <Zap className="text-yellow-400" />,
      col: "md:col-span-2"
    }
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500">
        Powerful Features
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <div key={i} className={`bg-surface p-8 rounded-2xl border border-white/10 hover:border-primary/30 transition-all hover:scale-[1.01] group ${f.col}`}>
            <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
              {f.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
            <p className="text-slate-400 leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
