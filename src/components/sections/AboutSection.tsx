import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';

export const AboutSection: React.FC = () => {
  return (
    <Section id="about" ariaLabelledBy="about-heading">
      <Container>
        <div className="flex flex-col items-start gap-3 mb-10">
          <Badge variant="cyan" dot className="font-mono">
            ENGINEER IDENTITY
          </Badge>
          <h2
            id="about-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white"
          >
            소개 &amp; 엔지니어링 철학
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="md:col-span-2">
            <h3 className="text-lg font-bold text-white mb-3">
              문제를 해결하는 실용적 아키텍처와 제품 집중력
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-4">
              기술 트렌드에 매몰되기보다 실제 유저와 비즈니스가 겪는 병목을 명확히 정의하고,
              단순하면서도 유지보수 가능한 소프트웨어 구조를 구축하는 것을 최우선으로 삼습니다.
            </p>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              프론트엔드의 세밀한 인터랙션부터 백엔드 데이터 흐름, AI 에이전트 자동화까지
              전체 시스템을 하나의 일관된 경험으로 연결합니다.
            </p>
          </Card>

          <Card>
            <h3 className="text-sm font-mono uppercase tracking-wider text-slate-400 mb-4">
              Core Principles
            </h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-sky-400 font-mono">01.</span>
                <span>Minimal &amp; Pragmatic Implementation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sky-400 font-mono">02.</span>
                <span>Strict Domain Boundaries &amp; Typing</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sky-400 font-mono">03.</span>
                <span>Verified Deliverables Over Hype</span>
              </li>
            </ul>
          </Card>
        </div>
      </Container>
    </Section>
  );
};
