import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';

export const DeveloperToolingSection: React.FC = () => {
  return (
    <Section id="tools" ariaLabelledBy="tools-heading">
      <Container>
        <div className="flex flex-col items-start gap-3 mb-10">
          <Badge variant="cyan" dot className="font-mono">
            DEV ENVIRONMENT
          </Badge>
          <h2
            id="tools-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white"
          >
            개발자 도구 &amp; 자동화
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
            생산성과 코드 신뢰도를 높이기 위해 직접 구축하고 일상적으로 사용하는 CLI 및 자동화 도구입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <span className="font-mono text-xs text-sky-400">TERMINAL &amp; SHELL</span>
            <h3 className="text-base font-bold text-white mt-1 mb-2">CLI Workflow Suite</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              반복 작업을 최소화하는 zsh/tmux 기반 터미널 스크립트 및 Git 워크트리 자동화.
            </p>
          </Card>

          <Card>
            <span className="font-mono text-xs text-emerald-400">AGENT TOOLING</span>
            <h3 className="text-base font-bold text-white mt-1 mb-2">Multi-Agent Sidecars</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              AI 코딩 에이전트와 로컬 개발 환경을 안전하게 연동하는 커스텀 사이드카 및 MCP 서버.
            </p>
          </Card>

          <Card>
            <span className="font-mono text-xs text-amber-400">DEV INFRA</span>
            <h3 className="text-base font-bold text-white mt-1 mb-2">Build &amp; QA Pipeline</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              엄격한 정적 분석, 타입 체크, 그리고 격리된 테스트 환경을 보장하는 파이프라인.
            </p>
          </Card>
        </div>
      </Container>
    </Section>
  );
};
