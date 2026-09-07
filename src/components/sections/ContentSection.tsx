import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';

export const ContentSection: React.FC = () => {
  return (
    <Section id="content" ariaLabelledBy="content-heading">
      <Container>
        <div className="flex flex-col items-start gap-3 mb-10">
          <Badge variant="cyan" dot className="font-mono">
            WRITING &amp; TALKS
          </Badge>
          <h2
            id="content-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white"
          >
            기술 콘텐츠 &amp; 아티클
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
            엔지니어링 과정에서 얻은 기술적 고찰과 아키텍처 의사결정을 문서화하고 공유합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <span className="font-mono text-xs text-sky-400">ARTICLE</span>
            <h3 className="text-base font-bold text-white mt-1 mb-2">
              Next.js App Router와 정적 사이트 최적화 전략
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Cloudflare Pages 환경에서의 번들 사이즈 최소화와 정적 export 파이프라인 수립기.
            </p>
          </Card>

          <Card>
            <span className="font-mono text-xs text-emerald-400">DEV LOG</span>
            <h3 className="text-base font-bold text-white mt-1 mb-2">
              실시간 데이터 스트리밍과 UI 상태 관리 패턴
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              지연 시간과 메모리 누수를 방지하기 위한 프론트엔드 아키텍처 분석.
            </p>
          </Card>
        </div>
      </Container>
    </Section>
  );
};
