import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';

export const ContactSection: React.FC = () => {
  return (
    <Section id="contact" ariaLabelledBy="contact-heading" className="border-b-0">
      <Container>
        <div className="flex flex-col items-start gap-3 mb-10">
          <Badge variant="cyan" dot className="font-mono">
            GET IN TOUCH
          </Badge>
          <h2
            id="contact-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white"
          >
            연락처 &amp; 협업 제안
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
            새로운 프로덕트 개발, AI 오케스트레이션 엔지니어링, 기술 컨설팅 및 협업 제안은 언제든 환영합니다.
          </p>
        </div>

        <Card className="max-w-xl">
          <div className="space-y-4">
            <div>
              <span className="font-mono text-xs text-slate-400 block mb-1">LOCATION</span>
              <p className="text-sm text-slate-200">Seoul, South Korea (UTC+9)</p>
            </div>
          </div>
        </Card>
      </Container>
    </Section>
  );
};
