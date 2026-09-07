import React from 'react';
import { awardsData } from '../../data/awards';

export const AwardsSection: React.FC = () => {
  return (
    <section
      id="awards"
      aria-labelledby="awards-heading"
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-slate-100"
    >
      <div className="flex flex-col items-start gap-3 mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-amber-950/80 text-amber-400 border border-amber-800/60">
          <span className="w-2 h-2 rounded-full bg-amber-400" aria-hidden="true" />
          <span>HONORS &amp; AWARDS</span>
        </div>
        <h2
          id="awards-heading"
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white"
        >
          수상 및 표창 이력
        </h2>
        <p className="text-sm sm:text-base text-slate-300 max-w-3xl">
          공식 확인된 범위 내에서만 기재하며, 주최 기관이나 세부 명칭이 공식적으로 확정되지 않은 항목은 추측하여 보완하지 않고 확인된 사실 그대로 명시합니다.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {awardsData.map((award) => (
          <div
            key={award.id}
            className="flex flex-col justify-between p-5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-amber-500/40 transition-all shadow-sm group"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-amber-950/70 text-amber-400 border border-amber-800/50">
                  {award.year}
                </span>
                <span className="text-lg" aria-hidden="true">🏆</span>
              </div>
              <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors mb-2">
                {award.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {award.description}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800 text-xs text-slate-400">
              {award.organizationConfirmed && award.organization ? (
                <span className="text-slate-300">수여 기관: {award.organization}</span>
              ) : (
                <span className="text-slate-400">※ 공식 주최기관 검증 기준 준수</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AwardsSection;
