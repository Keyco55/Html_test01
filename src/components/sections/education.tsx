import React from 'react';
import { educationData } from '../../data/education';

export const EducationSection: React.FC = () => {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-slate-100"
    >
      <div className="flex flex-col items-start gap-3 mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-indigo-950/80 text-indigo-400 border border-indigo-800/60">
          <span className="w-2 h-2 rounded-full bg-indigo-400" aria-hidden="true" />
          <span>ACADEMIC &amp; TRAINING</span>
        </div>
        <h2
          id="education-heading"
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white"
        >
          학력 및 교육 이력
        </h2>
        <p className="text-sm sm:text-base text-slate-300 max-w-3xl">
          전공 학위 및 부전공을 포함하여, 정확한 수료 명칭과 과정의 실제 성격을 왜곡 없이 명시합니다.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {educationData.map((item) => (
          <article
            key={item.id}
            className="flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all shadow-sm"
          >
            <div>
              {/* Category Badge */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-950 text-indigo-300 border border-indigo-800/60">
                  {item.categoryBadge}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {item.period}
                </span>
              </div>

              {/* Title & Organization */}
              <h3 className="text-base sm:text-lg font-bold text-white mb-1">
                {item.institution}
              </h3>
              <p className="text-sm font-semibold text-indigo-400 mb-3">
                {item.program}
              </p>

              {/* Academic specifics (if bachelor) */}
              {item.degreeOrType === 'bachelor' && (
                <div className="mb-4 p-3 rounded-lg bg-slate-950/70 border border-slate-800 text-xs space-y-1">
                  <div>
                    <span className="text-slate-400">주전공: </span>
                    <span className="text-slate-200 font-medium">{item.major}</span>
                  </div>
                  <div>
                    <span className="text-slate-400">부전공: </span>
                    <span className="text-slate-200 font-medium">{item.minor}</span>
                  </div>
                  <div>
                    <span className="text-slate-400">학점: </span>
                    <span className="text-slate-200 font-medium">{item.gpa}</span>
                  </div>
                </div>
              )}

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                {item.description}
              </p>

              {/* Verified Highlights */}
              <ul className="space-y-1.5 text-xs text-slate-300 mb-4" role="list">
                {item.verifiedHighlights.map((hl, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-indigo-400 font-bold shrink-0">•</span>
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Caution Notice (Accurate boundary protection) */}
            {item.cautionNotice && (
              <div className="mt-4 pt-3 border-t border-slate-800/80">
                <p className="text-xs text-amber-300/90 bg-amber-950/40 p-2.5 rounded-lg border border-amber-900/50 leading-tight">
                  {item.cautionNotice}
                </p>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
