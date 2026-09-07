import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

export const HeroSection: React.FC = () => {
  return (
    <Section id="hero" ariaLabelledBy="hero-heading" className="pt-20 pb-20 md:pt-28 md:pb-24">
      <Container className="flex flex-col items-start text-left">
        <Badge variant="cyan" dot className="mb-6 font-mono">
          SYSTEM: ONLINE / PORTFOLIO v1
        </Badge>

        <h1
          id="hero-heading"
          className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6"
        >
          풀스택 제품 개발과<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-emerald-300 to-sky-200">
            AI 오케스트레이션 엔지니어링
          </span>
        </h1>

        <p className="max-w-2xl text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
          복잡한 도메인 문제를 엔드투엔드 소프트웨어 제품으로 전환하고,
          견고한 AI 워크플로우와 개발자 인터페이스를 설계하는 <strong className="text-white font-semibold">KEYCO</strong>의 포트폴리오입니다.
        </p>

        <div className="flex flex-wrap items-center gap-3 font-mono text-sm">
          <Button href="#projects" variant="primary" size="md">
            <span>Featured Projects</span>
            <span aria-hidden="true">→</span>
          </Button>
          <Button href="#experience" variant="secondary" size="md">
            <span>Experience</span>
          </Button>
          <Button href="#contact" variant="outline" size="md">
            <span>Contact</span>
          </Button>
        </div>
      </Container>
    </Section>
  );
};
