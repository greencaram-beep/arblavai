'use client';
import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

type Stats = { candles: number; signals: number; trades: number };

export default function LiveStats() {
  const t = useTranslations('Stats');
  const [stats, setStats] = useState<Stats>({ candles: 0, signals: 0, trades: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Poll stats every 5 seconds
    const fetchStats = () => {
      fetch('/api/stats')
        .then(res => res.json())
        .then(data => {
          setStats(data);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    };

    fetchStats();
    const interval = setInterval(fetchStats, 5000);
    return () => clearInterval(interval);
  }, []);

  const StatBox = ({ label, value }: { label: string; value: number }) => (
    <div className="flex flex-col items-center justify-center p-6 bg-white/5 border border-white/5 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-colors">
      <div className="text-3xl md:text-4xl font-bold text-white mb-2 font-mono tabular-nums">
        {loading ? <span className="animate-pulse opacity-50">---</span> : value.toLocaleString()}
      </div>
      <div className="text-sm text-slate-400 uppercase tracking-wider">{label}</div>
    </div>
  );

  return (
    <section className="border-y border-white/5 bg-black/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatBox label={t('candles')} value={stats.candles} />
          <StatBox label={t('signals')} value={stats.signals} />
          <StatBox label={t('trades')} value={stats.trades} />
        </div>
      </div>
    </section>
  );
}
