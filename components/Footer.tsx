import Link from 'next/link';
import { Github, Twitter, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-6 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <div className="font-bold text-white mb-2">Arbitrage Scanner Bot</div>
          <p className="text-slate-500 text-sm max-w-xs">
            Risk Disclaimer: Crypto trading involves significant risk. This tool provides data, not financial advice.
          </p>
        </div>
        
        <div className="flex gap-6">
          <Link href="#" className="text-slate-500 hover:text-white transition-colors">
            <Twitter size={20} />
          </Link>
          <Link href="#" className="text-slate-500 hover:text-white transition-colors">
            <Github size={20} />
          </Link>
          <Link href="tg://resolve?domain=YOUR_BOT_USERNAME" className="text-slate-500 hover:text-primary transition-colors">
            <MessageCircle size={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
