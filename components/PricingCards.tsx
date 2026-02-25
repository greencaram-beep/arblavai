import { Check } from 'lucide-react';
import Link from 'next/link';

const tiers = [
  {
    name: 'Free',
    price: '$0',
    features: ['3 Pairs Limit', '15m Delay', 'Major CEXs Only', 'Community Support'],
    cta: 'Start Free',
    href: 'tg://resolve?domain=YOUR_BOT_USERNAME&start=free'
  },
  {
    name: 'Pro',
    price: '$49',
    popular: true,
    features: ['Unlimited Pairs', 'Real-time (0s delay)', 'All CEXs + DEXs', 'Fee Filtering', 'Priority Support'],
    cta: 'Get Pro',
    href: 'tg://resolve?domain=YOUR_BOT_USERNAME&start=pro'
  },
  {
    name: 'Team',
    price: '$199',
    features: ['5 Telegram Accounts', 'Webhook Integration', 'Private Node', 'Custom Filters', 'Concierge Setup'],
    cta: 'Contact Sales',
    href: 'tg://resolve?domain=support_chat'
  }
];

export default function PricingCards() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {tiers.map((tier) => (
        <div key={tier.name} className={`relative p-8 rounded-2xl border ${tier.popular ? 'border-primary bg-primary/5' : 'border-white/10 bg-surface'}`}>
          {tier.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs px-3 py-1 rounded-full">Most Popular</span>}
          <div className="text-xl font-bold text-white mb-2">{tier.name}</div>
          <div className="text-4xl font-bold text-white mb-6">{tier.price}<span className="text-sm font-normal text-slate-500">/mo</span></div>
          <ul className="space-y-4 mb-8">
            {tier.features.map((f) => (
              <li key={f} className="flex items-center gap-3 text-slate-300">
                <Check size={18} className="text-accent" /> {f}
              </li>
            ))}
          </ul>
          <Link 
            href={tier.href} 
            className={`block text-center w-full py-3 rounded-xl font-semibold transition-colors ${tier.popular ? 'bg-primary hover:bg-primary/90 text-white' : 'bg-white/10 hover:bg-white/20 text-white'}`}
          >
            {tier.cta}
          </Link>
        </div>
      ))}
    </div>
  );
}
