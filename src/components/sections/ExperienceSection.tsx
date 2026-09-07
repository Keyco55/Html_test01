import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';

export const ExperienceSection: React.FC = () => {
  return (
    <Section id="experience" ariaLabelledBy="experience-heading">
      <Container>
        <div className="flex flex-col items-start gap-3 mb-10">
          <Badge variant="emerald" dot className="font-mono">
            VERIFIED CAREER
          </Badge>
          <h2
            id="experience-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white"
          >
            경력 및 실무 경험
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
            실제 검증된 실무 프로젝트와 엔지니어링 수행 이력을 투명하게 전달합니다.
          </p>
        </div>

        <div className="space-y-6">
          <Card>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
              <div>
                <span className="font-mono text-xs text-sky-400">ENGINEERING LEAD / FULL-STACK</span>
                <h3 className="text-lg sm:text-xl font-bold text-white mt-1">
                  Product &amp; AI Engineering
                </h3>
              </div>
              <span className="font-mono text-xs text-slate-400 bg-slate-800/80 px-2.5 py-1 rounded">
                2023 — PRESENT
              </span>
            </div>
            <p className="text-sm text-slate-300 mb-4 leading-relaxed">
              풀스택 웹 애플리케이션 아키텍처 수립 및 실시간 데이터 처리 파이프라인 개발, LLM 오케스트레이션 도구 개발 총괄.
            </p>
            <div className="flex flex-wrap gap-2 font-mono text-xs text-slate-400">
              <span className="px-2 py-0.5 rounded bg-slate-800/80">React / Next.js</span>
              <span className="px-2 py-0.5 rounded bg-slate-800/80">TypeScript</span>
              <span className="px-2 py-0.5 rounded bg-slate-800/80">Python / FastAPI</span>
              <span className="px-2 py-0.5 rounded bg-slate-800/80">Cloudflare</span>
            </div>
          </Card>
        </div>
      </Container>
    </Section>
  );
};
