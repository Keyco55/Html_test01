import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';

export const AwardsSection: React.FC = () => {
  return (
    <Section id="awards" ariaLabelledBy="awards-heading">
      <Container>
        <div className="flex flex-col items-start gap-3 mb-10">
          <Badge variant="amber" dot className="font-mono">
            RECOGNITION
          </Badge>
          <h2
            id="awards-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white"
          >
            수상 및 대외 활동
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-base font-bold text-white">해커톤 &amp; 오픈소스 챌린지 수상</h3>
              <span className="font-mono text-xs text-amber-400">우수상</span>
            </div>
            <p className="text-xs text-slate-300">
              실시간 데이터 분석 및 협업 생산성 향상을 위한 웹 서비스 기획 및 구현.
            </p>
          </Card>
        </div>
      </Container>
    </Section>
  );
};
