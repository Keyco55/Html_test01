import React from 'react';
import { Container } from '@/components/ui/Container';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <a
          href="#hero"
          className="flex items-center gap-2 text-sm font-semibold tracking-tight text-white hover:text-sky-400 transition-colors"
        >
          <span className="font-mono text-sky-400 font-bold">&gt;_</span>
          <span className="font-mono tracking-wider">KEYCO</span>
          <span className="hidden sm:inline-block text-xs font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700/60">
            v1.0
          </span>
        </a>

        <nav aria-label="Main Navigation" className="flex items-center gap-1 sm:gap-2">
          <a
            href="#featured-projects"
            className="px-2.5 py-1.5 text-xs sm:text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-md transition-colors"
          >
            Projects
          </a>
          <a
            href="#experience"
            className="px-2.5 py-1.5 text-xs sm:text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-md transition-colors"
          >
            Experience
          </a>
          <a
            href="#skills"
            className="px-2.5 py-1.5 text-xs sm:text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-md transition-colors"
          >
            Skills
          </a>
          <a
            href="#resume"
            className="px-2.5 py-1.5 text-xs sm:text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-md transition-colors"
          >
            Resume
          </a>
          <a
            href="#contact"
            className="ml-1 sm:ml-2 px-3 py-1.5 text-xs sm:text-sm font-medium bg-sky-500/10 text-sky-400 hover:bg-sky-500/20 border border-sky-500/30 rounded-md transition-all"
          >
            Contact
          </a>
        </nav>
      </Container>
    </header>
  );
};
