import React from 'react';
import { skillsData } from '../../data/skills';

export const SkillsSection: React.FC = () => {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-slate-100"
    >
      <div className="flex flex-col items-start gap-3 mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-cyan-950/80 text-cyan-400 border border-cyan-800/60">
          <span className="w-2 h-2 rounded-full bg-cyan-400" aria-hidden="true" />
          <span>TECHNICAL &amp; OPERATIONAL SKILLS</span>
        </div>
        <h2
          id="skills-heading"
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white"
        >
          기술 스택 및 도구 활용
        </h2>
        <p className="text-sm sm:text-base text-slate-300 max-w-3xl">
          수십 개의 아이콘을 단순 나열하거나 모호한 숙련도를 표기하지 않습니다. 실제 프로덕트 개발과 현장 운영, 자동화 업무에 투입하여 직접 구현해 본 스택만을 영역별로 정돈했습니다.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillsData.map((group) => (
          <div
            key={group.category}
            className="flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all shadow-sm"
          >
            <div>
              {/* Category Header */}
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-bold tracking-wider text-cyan-400 uppercase">
                  {group.category}
                </span>
                <span className="text-xs text-slate-500 font-mono">
                  {group.items.length} Techs
                </span>
              </div>

              <h3 className="text-base font-bold text-white mb-2">
                {group.description}
              </h3>

              {/* Items Badge Group */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {group.items.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-800/90 text-cyan-200 border border-slate-700/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Practical Context (No exaggeration, real experience) */}
            <div className="pt-3 border-t border-slate-800 text-xs text-slate-300 leading-relaxed bg-slate-950/40 p-3 rounded-lg border border-slate-800/50">
              <span className="font-semibold text-slate-200 block mb-1">실무 및 활용 맥락:</span>
              <p>{group.practicalContext}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
