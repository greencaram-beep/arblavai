import PricingCards from '@/components/PricingCards';

export default function PricingPage() {
  return (
    <div className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-white mb-4">Transparent Pricing</h1>
        <p className="text-slate-400">Pay for edge, not for noise.</p>
      </div>
      <PricingCards />
    </div>
  );
}
