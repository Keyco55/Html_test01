import React from 'react';
import { profileData } from '../../data/profile';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-slate-100"
    >
      {/* Mobile-first quick summary badge */}
      <div className="flex flex-col items-start gap-3 mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-sky-950/80 text-sky-400 border border-sky-800/60">
          <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" aria-hidden="true" />
          <span>ABOUT &amp; POSITIONING</span>
        </div>
        <h2
          id="about-heading"
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight"
        >
          {profileData.name}
          <span className="block text-lg sm:text-xl md:text-2xl font-medium text-sky-400 mt-2">
            {profileData.title}
          </span>
        </h2>
      </div>

      {/* Main Bio Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
        {/* Left: Bio paragraphs */}
        <div className="lg:col-span-7 space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
          <div className="p-4 sm:p-5 rounded-xl bg-slate-900/90 border border-slate-800 shadow-sm">
            <p className="font-medium text-slate-100">
              {profileData.shortBio}
            </p>
          </div>
          {profileData.fullBio.map((paragraph, idx) => (
            <p key={idx} className="text-slate-300">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Right: Public Safe Links */}
        <div className="lg:col-span-5 flex flex-col justify-between p-5 rounded-xl bg-slate-900/60 border border-slate-800">
          <div>
            <h3 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-4 flex items-center gap-2">
              <svg className="w-4 h-4 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
              공개 포트폴리오 채널
            </h3>
            <ul className="space-y-3" role="list">
              {profileData.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block p-3 rounded-lg bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 hover:border-sky-500/50 transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-slate-100 text-sm group-hover:text-sky-300 transition-colors">
                        {link.label}
                      </span>
                      <svg
                        className="w-4 h-4 text-slate-400 group-hover:text-sky-400 transition-colors"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                    {link.description && (
                      <p className="text-xs text-slate-400 mt-1">{link.description}</p>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6 pt-4 border-t border-slate-800/80 text-xs text-slate-400 flex items-center gap-1.5">
            <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span>개인정보 보호 준수 (공개 안전 링크 중심)</span>
          </div>
        </div>
      </div>

      {/* Career Evolution Flow (Vertical on mobile, grid on desktop) */}
      <div className="mt-12">
        <div className="mb-6">
          <span className="text-xs font-semibold tracking-wider text-sky-400 uppercase">CAREER EVOLUTION</span>
          <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
            경험의 유기적 연결 흐름
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm mt-1">
            단편적인 나열이 아닌 고객 경험에서 프로덕트 개발로 이어지는 성장 궤적입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" role="list">
          {profileData.journeySteps.map((step) => (
            <div
              key={step.step}
              className="relative p-4 sm:p-5 rounded-xl bg-slate-900/70 border border-slate-800/90 hover:border-slate-700 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-sky-400 px-2 py-0.5 rounded bg-sky-950/70 border border-sky-900/50">
                    STEP {step.step}
                  </span>
                  <span className="text-xs font-semibold text-slate-400">
                    {step.category}
                  </span>
                </div>
                <h4 className="text-base font-bold text-slate-100 mb-2">
                  {step.category}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
