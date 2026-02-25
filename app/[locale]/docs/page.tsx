import BentoFeatures from '@/components/BentoFeatures'; // Re-use the nice bento features here too or simplify

export default function DocsPage() {
  return (
    <div className="py-24 px-6 max-w-4xl mx-auto prose prose-invert prose-lg">
      <h1 className="text-4xl font-bold mb-8">Documentation</h1>

      <h2>What is "Net Edge"?</h2>
      <p>
        Net edge is the profit percentage remaining after deducting all transaction fees (maker/taker) and estimated slippage based on current order book depth.
        Most screeners show gross profit which is misleading. We calculate true potential profit.
      </p>

      <h2>How to Setup Filters</h2>
      <p>
        1. Start the Telegram bot (@YOUR_BOT_USERNAME) <br/>
        2. Use the command <code>/filters</code> <br/>
        3. Set <code>min_profit: 0.5%</code> and <code>min_volume: $1000</code> <br/>
        4. Enable specific exchanges with <code>/exchanges binance,bybit</code>
      </p>

      <h2>Understanding TTL</h2>
      <p>
        <strong>TTL (Time To Live)</strong> indicates how long an arbitrage opportunity has existed. Low TTL (under 5s) means high competition. High TTL (over 30s) often indicates a persistent inefficiency or a wallet maintenance issue on one exchange.
      </p>

      <div className="bg-yellow-500/10 border-l-4 border-yellow-500 p-4 my-8 not-prose rounded-r">
        <p className="font-bold text-yellow-500">Risk Disclaimer</p>
        <p className="text-sm text-yellow-200/80">
          Arbitrage trading involves significant risk. Market volatility, exchange API downtime, and network latency can affect profitability. 
          Always test with small amounts first.
        </p>
      </div>

      <h2>API Reference</h2>
      <p>Coming soon for Team plan subscribers.</p>
    </div>
  );
}
