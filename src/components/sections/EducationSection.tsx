import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';

export const EducationSection: React.FC = () => {
  return (
    <Section id="education" ariaLabelledBy="education-heading">
      <Container>
        <div className="flex flex-col items-start gap-3 mb-10">
          <Badge variant="cyan" dot className="font-mono">
            BACKGROUND
          </Badge>
          <h2
            id="education-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white"
          >
            학력 및 교육
          </h2>
        </div>

        <div className="space-y-4">
          <Card>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
              <h3 className="text-base font-bold text-white">컴퓨터공학 / 소프트웨어 전공</h3>
              <span className="font-mono text-xs text-slate-400">학사 졸업</span>
            </div>
            <p className="text-xs text-slate-300">
              컴퓨터 시스템, 자료구조, 알고리즘, 네트워크, 데이터베이스 등 전산 기본 소양 이수.
            </p>
          </Card>
        </div>
      </Container>
    </Section>
  );
};
