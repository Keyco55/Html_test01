import React from 'react';
import { Container } from '@/components/ui/Container';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-slate-800/80 bg-slate-950 py-10 text-slate-400 text-xs sm:text-sm">
      <Container className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-mono text-sky-400 font-bold">&gt;_</span>
          <span className="text-slate-300 font-medium">KEYCO Portfolio</span>
          <span className="text-slate-600">|</span>
          <span className="text-slate-400">Customer Experience · Content · Product Development</span>
        </div>

        <div className="flex items-center gap-4 text-xs text-slate-500 font-mono">
          <span>Static-first Architecture</span>
          <span>•</span>
          <span>Next.js + Tailwind CSS</span>
        </div>
      </Container>
    </footer>
  );
};
