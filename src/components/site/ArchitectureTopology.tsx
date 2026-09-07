import React from "react";
import { Reveal } from "@/components/motion/Reveal";

/**
 * DEVELOPMENT ARCHITECTURE — system topology diagram.
 * Editorial technical drawing: paper ground, thin ink connectors,
 * clay accent for human-owned gates, night band for the orchestration
 * core. Complements (does not duplicate) the workflow timeline.
 */

const Node: React.FC<{
  label: string;
  ko: string;
  index: string;
  tone?: "paper" | "night" | "gate";
  delay?: number;
}> = ({ label, ko, index, tone = "paper", delay = 0 }) => (
  <Reveal delay={delay} className="relative z-10 w-full max-w-md">
    <div
      className={
        tone === "night"
          ? "rounded-xl border border-night-line bg-night px-5 py-4 text-center"
          : tone === "gate"
            ? "rounded-xl border-2 border-clay/50 bg-clay-wash px-5 py-4 text-center"
            : "rounded-xl border border-ink/15 bg-surface px-5 py-4 text-center shadow-[0_10px_28px_-22px_rgba(20,22,26,0.4)]"
      }
    >
      <p
        aria-hidden="true"
        className={
          tone === "night"
            ? "font-mono text-[10px] tracking-[0.2em] text-clay-bright uppercase"
            : "font-mono text-[10px] tracking-[0.2em] text-clay uppercase"
        }
      >
        {index}
      </p>
      <p
        className={
          tone === "night"
            ? "mt-1 text-[15.5px] font-extrabold text-night-ink"
            : "mt-1 text-[15.5px] font-extrabold text-ink"
        }
      >
        {label}
      </p>
      <p
        className={
          tone === "night"
            ? "mt-0.5 text-[12px] text-night-muted"
            : "mt-0.5 text-[12px] text-muted"
        }
      >
        {ko}
      </p>
    </div>
  </Reveal>
);

const Connector: React.FC<{ delay?: number }> = ({ delay = 0 }) => (
  <Reveal delay={delay} className="flex flex-col items-center" >
    <span aria-hidden="true" className="h-7 w-px bg-ink/30 md:h-9" />
    <span aria-hidden="true" className="-mt-px h-0 w-0 border-x-[4px] border-t-[6px] border-x-transparent border-t-ink/40" />
  </Reveal>
);

const BranchCard: React.FC<{ label: string; ko: string; delay?: number }> = ({
  label,
  ko,
  delay = 0,
}) => (
  <Reveal delay={delay} className="min-w-0 flex-1">
    <div className="h-full rounded-lg border border-ink/12 bg-paper px-3 py-3 text-center">
      <p className="text-[13px] font-bold text-ink">{label}</p>
      <p className="mt-0.5 text-[11px] leading-snug text-muted">{ko}</p>
    </div>
  </Reveal>
);

/** A lane that splits into parallel branches, then merges back. */
const BranchGroup: React.FC<{
  caption: string;
  branches: readonly { label: string; ko: string }[];
  delay?: number;
}> = ({ caption, branches, delay = 0 }) => (
  <Reveal delay={delay} className="w-full max-w-3xl">
    {/* split rail */}
    <div aria-hidden="true" className="relative mx-auto h-6 w-full max-w-xl">
      <span className="absolute left-1/2 top-0 h-3 w-px -translate-x-1/2 bg-ink/30" />
      <span className="absolute left-[8%] right-[8%] top-3 h-px bg-ink/25" />
      {branches.map((_, i) => {
        const left = 8 + (i * 84) / (branches.length - 1 || 1);
        return (
          <span
            key={i}
            className="absolute top-3 h-3 w-px bg-ink/25"
            style={{ left: `${left}%` }}
          />
        );
      })}
    </div>
    <p className="mb-2 text-center font-mono text-[10px] tracking-[0.18em] text-clay uppercase">
      {caption}
    </p>
    <div className="flex flex-col gap-2 sm:flex-row sm:gap-3">
      {branches.map((branch, i) => (
        <BranchCard key={branch.label} label={branch.label} ko={branch.ko} delay={i * 60} />
      ))}
    </div>
    {/* merge rail */}
    <div aria-hidden="true" className="relative mx-auto h-6 w-full max-w-xl">
      <span className="absolute left-[8%] right-[8%] top-0 h-px bg-ink/25" />
      {branches.map((_, i) => {
        const left = 8 + (i * 84) / (branches.length - 1 || 1);
        return (
          <span
            key={i}
            className="absolute top-0 h-3 w-px bg-ink/25"
            style={{ left: `${left}%` }}
          />
        );
      })}
      <span className="absolute left-1/2 top-3 h-3 w-px -translate-x-1/2 bg-ink/30" />
    </div>
  </Reveal>
);

export const ArchitectureTopology: React.FC = () => (
  <div
    className="dot-grid-light mx-auto flex max-w-4xl flex-col items-center rounded-[22px] border border-ink/10 bg-paper-deep/50 px-4 py-10 md:px-10 md:py-14"
    role="img"
    aria-label="Human HQ에서 문서화, cmux 에이전트 오케스트레이션, Git 격리, QA 게이트, dev 통합을 거쳐 릴리스와 HANDOFF로 이어지는 개발 환경 토폴로지 다이어그램"
  >
    <Node index="Layer 01" label="Human / HQ" ko="방향 결정 · 최종 판단 — 사람" tone="night" />
    <Connector />
    <Node index="Layer 02" label="Documentation / Source of Truth" ko="Notion 기획 · Day Log · HANDOFF 문서" delay={40} />
    <Connector delay={40} />
    <Node index="Layer 03" label="cmux Agent Orchestration" ko="에이전트 배치 · 라우팅 · 병렬 감시" tone="night" delay={60} />
    <BranchGroup
      caption="Parallel Lanes — 병렬 독립 트랙"
      branches={[
        { label: "Worker", ko: "트랙 A 구현" },
        { label: "Worker Fast", ko: "트랙 B 동시 구현" },
        { label: "Independent Senior Review", ko: "구현자와 분리된 검증" },
      ]}
      delay={80}
    />
    <Node index="Layer 04" label="Git Isolation" ko="브랜치 · worktree 물리 격리" delay={100} />
    <BranchGroup
      caption="Isolation Rules — 격리 원칙"
      branches={[
        { label: "feat/*", ko: "기능 단위 브랜치" },
        { label: "Git Worktree", ko: "작업 트리 분리" },
        { label: "One Modifier", ko: "worktree당 수정 주체 1개" },
      ]}
      delay={120}
    />
    <Node index="Layer 05" label="QA / Security / Runtime Gate" ko="Remediation · 재검토 · Human Runtime QA" tone="gate" delay={140} />
    <Connector delay={140} />
    <Node index="Layer 06" label="dev Integration" ko="게이트를 통과한 결과만 병합" delay={160} />
    <Connector delay={160} />
    <Node index="Layer 07" label="Release / HANDOFF" ko="릴리스 · 인수인계 문서화" tone="night" delay={180} />
  </div>
);
