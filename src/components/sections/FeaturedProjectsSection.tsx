import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';

export const FeaturedProjectsSection: React.FC = () => {
  return (
    <Section id="projects" ariaLabelledBy="projects-heading">
      <Container>
        <div className="flex flex-col items-start gap-3 mb-10">
          <Badge variant="cyan" dot className="font-mono">
            TRACK: PROJECTS
          </Badge>
          <h2
            id="projects-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white"
          >
            주요 프로젝트
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
            실제 운영과 사용자 피드백을 거치며 검증된 핵심 제품 및 AI 파이프라인 아키텍처입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="font-mono text-xs text-sky-400">FULL-STACK PRODUCT</span>
                <Badge variant="emerald" dot>Active Production</Badge>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                KBO-Hub: 실시간 야구 데이터 &amp; 하이라이트 플랫폼
              </h3>
              <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                실시간 경기 일정, 라인업, 문자 중계 및 AI 기반 자동 하이라이트 클립 생성 파이프라인을 갖춘 웹/모바일 서비스.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/80 font-mono text-xs text-slate-400">
              <span className="px-2 py-0.5 rounded bg-slate-800">Next.js</span>
              <span className="px-2 py-0.5 rounded bg-slate-800">TypeScript</span>
              <span className="px-2 py-0.5 rounded bg-slate-800">Tailwind CSS</span>
              <span className="px-2 py-0.5 rounded bg-slate-800">FastAPI</span>
            </div>
          </Card>

          <Card className="flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="font-mono text-xs text-sky-400">ORCHESTRATION</span>
                <Badge variant="cyan" dot>Open Source</Badge>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Multi-Agent Workflow Engine
              </h3>
              <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                복수 LLM 에이전트 간의 역할 분담, 의사결정 트래킹, 에러 복구 루프를 시각화하고 제어하는 개발자 오케스트레이션 도구.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/80 font-mono text-xs text-slate-400">
              <span className="px-2 py-0.5 rounded bg-slate-800">React</span>
              <span className="px-2 py-0.5 rounded bg-slate-800">Node.js</span>
              <span className="px-2 py-0.5 rounded bg-slate-800">Docker</span>
              <span className="px-2 py-0.5 rounded bg-slate-800">WebSocket</span>
            </div>
          </Card>
        </div>
      </Container>
    </Section>
  );
};
