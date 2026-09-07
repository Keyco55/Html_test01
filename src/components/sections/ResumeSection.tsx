import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export const ResumeSection: React.FC = () => {
  return (
    <Section id="resume" ariaLabelledBy="resume-heading">
      <Container>
        <div className="flex flex-col items-start gap-3 mb-10">
          <Badge variant="emerald" dot className="font-mono">
            VERIFIED RESUME
          </Badge>
          <h2
            id="resume-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white"
          >
            이력서 &amp; 증빙
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
            검증 가능한 실무 상세 경력서 및 기술 요약본을 확인하실 수 있습니다.
          </p>
        </div>

        <Card className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-6">
          <div>
            <h3 className="text-lg font-bold text-white mb-1">KEYCO 상세 이력서</h3>
            <p className="text-sm text-slate-300">
              최종 업데이트: 2025. 포맷: PDF (인쇄 및 다운로드 최적화)
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button href="#contact" variant="primary" size="md">
              이력서 요청하기
            </Button>
          </div>
        </Card>
      </Container>
    </Section>
  );
};
