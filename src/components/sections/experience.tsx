import React from 'react';
import { experienceData } from '../../data/experience';

export const ExperienceSection: React.FC = () => {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-slate-100"
    >
      <div className="flex flex-col items-start gap-3 mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-emerald-950/80 text-emerald-400 border border-emerald-800/60">
          <span className="w-2 h-2 rounded-full bg-emerald-400" aria-hidden="true" />
          <span>VERIFIED CAREER</span>
        </div>
        <h2
          id="experience-heading"
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white"
        >
          경력 및 실무 경험
        </h2>
        <p className="text-sm sm:text-base text-slate-300 max-w-3xl">
          실제 증빙 가능하고 현장에서 검증된 역할만을 기재합니다. 과장된 수치나 확인되지 않은 이력은 배제하고, 담당했던 업무의 범위와 컨텍스트를 투명하게 공개합니다.
        </p>
      </div>

      {/* Mobile-friendly Vertical Timeline */}
      <div className="relative border-l-2 border-slate-800 ml-3 sm:ml-4 space-y-10 sm:space-y-12">
        {experienceData.map((item) => (
          <article
            key={item.id}
            className="relative pl-6 sm:pl-8 group"
            aria-labelledby={`exp-title-${item.id}`}
          >
            {/* Timeline Marker */}
            <div
              className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 bg-slate-950 transition-colors ${
                item.periodNeedsConfirmation
                  ? 'border-amber-400 group-hover:border-amber-300'
                  : 'border-emerald-400 group-hover:border-emerald-300'
              }`}
              aria-hidden="true"
            />

            {/* Card Content */}
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700/80 transition-all shadow-sm">
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-3">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    {item.department || '실무 경력'}
                  </span>
                  <h3
                    id={`exp-title-${item.id}`}
                    className="text-lg sm:text-xl font-bold text-white mt-0.5"
                  >
                    {item.company}
                  </h3>
                  <div className="text-sm sm:text-base font-medium text-emerald-400 mt-0.5">
                    {item.role}
                  </div>
                </div>

                <div className="flex items-center gap-2 mt-1 sm:mt-0">
                  {item.periodNeedsConfirmation ? (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-amber-950/70 text-amber-300 border border-amber-800/70">
                      <svg className="w-3.5 h-3.5 text-amber-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      {item.period}
                    </span>
                  ) : (
                    <time
                      dateTime={item.dateTime}
                      className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-slate-800 text-slate-300 border border-slate-700/80"
                    >
                      {item.period}
                    </time>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                {item.description}
              </p>

              {/* Highlights List */}
              <div className="mb-5">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  증빙 및 실무 수행 내역
                </h4>
                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300" role="list">
                  {item.verifiedHighlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2">
                      <span className="text-emerald-400 font-bold shrink-0 mt-0.5">✓</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-slate-800/70">
                <span className="text-xs text-slate-500 font-medium mr-1">Skills:</span>
                {item.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 rounded text-xs bg-slate-800/90 text-slate-300 border border-slate-700/60"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Context Note (e.g. Scope discipline, Privacy compliance) */}
              {(item.contextNote || item.privacyComplianceNote) && (
                <div className="mt-4 pt-3 border-t border-slate-800/60 space-y-2">
                  {item.contextNote && (
                    <p className="text-xs text-slate-400 italic bg-slate-950/60 p-2.5 rounded-lg border border-slate-800/60">
                      ℹ️ {item.contextNote}
                    </p>
                  )}
                  {item.privacyComplianceNote && (
                    <p className="text-xs text-slate-400 italic bg-slate-950/60 p-2.5 rounded-lg border border-slate-800/60">
                      🔒 {item.privacyComplianceNote}
                    </p>
                  )}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
