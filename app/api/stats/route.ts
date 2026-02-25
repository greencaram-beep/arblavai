import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  // Mock data for initial deploy and reliability
  // Returns semi-random "live" looking numbers based on time
  const now = Date.now();
  const seed = Math.floor(now / 100000); // changes every ~1.5 min slightly

  return NextResponse.json({
    candles: 1450000 + (now % 10000),
    signals: 420 + Math.floor((now % 5000) / 100),
    trades: 85 + Math.floor((now % 10000) / 500),
    status: 'simulated'
  });
}
