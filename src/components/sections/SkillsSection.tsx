import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';

export const SkillsSection: React.FC = () => {
  return (
    <Section id="skills" ariaLabelledBy="skills-heading">
      <Container>
        <div className="flex flex-col items-start gap-3 mb-10">
          <Badge variant="cyan" dot className="font-mono">
            CAPABILITIES
          </Badge>
          <h2
            id="skills-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white"
          >
            기술 스택 &amp; 역량
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
            단순한 도구 나열이 아닌, 실제 프로덕션 수준의 문제를 해결하기 위해 숙련된 기술 목록입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <h3 className="font-mono text-xs uppercase tracking-wider text-sky-400 mb-3">
              Frontend Engineering
            </h3>
            <div className="flex flex-wrap gap-2 font-mono text-xs">
              <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-200">React</span>
              <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-200">Next.js</span>
              <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-200">TypeScript</span>
              <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-200">Tailwind CSS</span>
            </div>
          </Card>

          <Card>
            <h3 className="font-mono text-xs uppercase tracking-wider text-emerald-400 mb-3">
              Backend &amp; Cloud
            </h3>
            <div className="flex flex-wrap gap-2 font-mono text-xs">
              <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-200">Node.js</span>
              <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-200">Python / FastAPI</span>
              <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-200">PostgreSQL</span>
              <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-200">Cloudflare</span>
            </div>
          </Card>

          <Card>
            <h3 className="font-mono text-xs uppercase tracking-wider text-amber-400 mb-3">
              DevOps &amp; AI Systems
            </h3>
            <div className="flex flex-wrap gap-2 font-mono text-xs">
              <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-200">Docker</span>
              <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-200">Git / GitHub Actions</span>
              <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-200">LLM Prompt &amp; Pipeline</span>
              <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-200">MCP Protocol</span>
            </div>
          </Card>
        </div>
      </Container>
    </Section>
  );
};
