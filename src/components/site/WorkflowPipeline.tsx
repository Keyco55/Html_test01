"use client";

import React from "react";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Development Workflow — scroll-linked pipeline visualization.
 * 11 real stages of how KEYCO operates development work.
 * A clay progress line fills the spine as the section scrolls through
 * the viewport; cards reveal alternately left/right on desktop and
 * stack on mobile. No scroll-jacking, no fake terminal.
 */

const STAGES = [
  { step: "Plan", ko: "계획", detail: "요구사항과 작업 범위를 정의하고 트랙을 나눕니다." },
  { step: "Documentation", ko: "문서화", detail: "Notion에 기획 문서와 Day Log, HANDOFF를 정리합니다." },
  { step: "Branch Strategy", ko: "브랜치 전략", detail: "dev 기준으로 역할과 범위에 맞는 브랜치를 설계합니다." },
  { step: "Worktree Isolation", ko: "Worktree 격리", detail: "Git worktree로 작업 트리를 물리적으로 분리합니다." },
  { step: "Agent Assignment", ko: "에이전트 배치", detail: "cmux 세션에 트랙별 에이전트를 배치합니다." },
  { step: "Parallel Implementation", ko: "병렬 구현", detail: "독립 트랙을 동시에 구현합니다." },
  { step: "Independent Review", ko: "독립 리뷰", detail: "구현자와 분리된 리뷰 에이전트가 빌드·타입·보안·회귀를 감사합니다." },
  { step: "Remediation", ko: "보완", detail: "발견된 결함을 단계별로 수정하고 재검토합니다." },
  { step: "Integration", ko: "통합", detail: "게이트를 통과한 결과만 dev에 병합합니다." },
  { step: "Human Runtime QA", ko: "Human Runtime QA", detail: "실제 동작 환경에서 인간 관점으로 검증합니다." },
  { step: "Release Gate", ko: "릴리스 게이트", detail: "보안·프라이버시 최종 확인 후 릴리스합니다." },
] as const;

const CAPABILITIES = [
  "CLI Agent Operations",
  "Git Branch Strategy",
  "Git Worktree Strategy",
  "Agent-per-Worktree Isolation",
  "Parallel Worker Pipeline",
  "Independent Senior Review",
  "Remediation / Re-Review",
  "Human Runtime QA",
  "Security / Release Gate",
  "HANDOFF Documentation",
] as const;

export const WorkflowPipeline: React.FC = () => {
  const sectionRef = React.useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const reduced =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setProgress(1);
      return;
    }

    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = node.getBoundingClientRect();
      const viewport = window.innerHeight || 1;
      // 0 when section top hits viewport bottom, 1 when section bottom reaches 60% viewport
      const total = rect.height + viewport * 0.4;
      const passed = viewport - rect.top;
      const value = Math.min(1, Math.max(0, (passed - viewport * 0.4) / (total - viewport * 0.4 || 1)));
      setProgress(value);
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={sectionRef}>
      <ol className="relative mx-auto max-w-4xl">
        {/* Spine + scroll-linked progress fill */}
        <span
          aria-hidden="true"
          className="absolute top-0 bottom-0 left-[7px] w-[2px] bg-night-line md:left-1/2 md:-translate-x-1/2"
        />
        <span
          aria-hidden="true"
          className="absolute top-0 left-[7px] w-[2px] bg-clay-bright md:left-1/2 md:-translate-x-1/2"
          style={{
            height: "100%",
            transform: `scaleY(${progress})`,
            transformOrigin: "top center",
            transition: "transform 120ms linear",
          }}
        />

        {STAGES.map((stage, index) => {
          const rightSide = index % 2 === 1;
          return (
            <Reveal
              as="li"
              key={stage.step}
              delay={40}
              className="relative grid grid-cols-[16px_1fr] items-start gap-x-5 py-3 md:grid-cols-[1fr_48px_1fr] md:gap-x-5"
            >
              {/* Node */}
              <div className="relative z-10 flex items-start justify-center md:col-start-2">
                <span
                  className="mt-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-clay-bright bg-night"
                  aria-hidden="true"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-clay-bright" />
                </span>
              </div>

              {/* Card — right column on mobile, alternating sides on desktop */}
              <div
                className={
                  rightSide
                    ? "col-start-2 md:col-start-3"
                    : "col-start-2 md:col-start-1"
                }
              >
                <StageCard stage={stage} index={index} align={rightSide ? "left" : "right"} />
              </div>
            </Reveal>
          );
        })}
      </ol>

      <Reveal delay={80}>
        <div className="mx-auto mt-12 max-w-4xl">
          <p className="font-mono text-[11px] tracking-[0.18em] text-night-muted uppercase">
            Relevant Capabilities
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {CAPABILITIES.map((capability) => (
              <li
                key={capability}
                className="rounded-full border border-night-line bg-night-raise px-3.5 py-1.5 font-mono text-[11.5px] text-night-soft transition-colors duration-200 hover:border-clay-bright/60 hover:text-clay-bright"
              >
                {capability}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </div>
  );
};

const StageCard: React.FC<{
  stage: { step: string; ko: string; detail: string };
  index: number;
  align: "left" | "right";
}> = ({ stage, index, align }) => (
  <div
    className={
      align === "right"
        ? "rounded-xl border border-night-line bg-night-raise/70 p-4 md:text-right"
        : "rounded-xl border border-night-line bg-night-raise/70 p-4"
    }
  >
    <p className="font-mono text-[10.5px] tracking-[0.16em] text-clay-bright uppercase">
      {String(index + 1).padStart(2, "0")} · {stage.step}
    </p>
    <p className="mt-1 text-[15px] font-bold text-night-ink">{stage.ko}</p>
    <p className="mt-1 text-[13px] leading-relaxed text-night-muted">{stage.detail}</p>
  </div>
);
