import { NextResponse } from 'next/server';
import { getDb } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET() {
  const db = getDb();
  
  if (!db) {
    return NextResponse.json({ 
      candles: 0, 
      signals: 0, 
      trades: 0,
      status: 'simulated' 
    });
  }

  try {
    const candles = db.prepare('SELECT count(*) as count FROM candles').get() as { count: number };
    const signals = db.prepare('SELECT count(*) as count FROM signal_events').get() as { count: number };
    const trades = db.prepare('SELECT count(*) as count FROM trades').get() as { count: number };

    return NextResponse.json({
      candles: candles?.count || 0,
      signals: signals?.count || 0,
      trades: trades?.count || 0,
      status: 'live'
    });
  } catch (error) {
    // Fallback if tables don't exist
    return NextResponse.json({ candles: 0, signals: 0, trades: 0, error: 'DB_ERROR' });
  }
}
