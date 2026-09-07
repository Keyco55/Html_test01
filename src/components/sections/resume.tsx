import React from 'react';
import { profileData } from '../../data/profile';

export const ResumeSection: React.FC = () => {
  return (
    <section
      id="resume"
      aria-labelledby="resume-cta-heading"
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-slate-100"
    >
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border border-slate-800 p-6 sm:p-10 shadow-xl">
        {/* Glow accent */}
        <div
          className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-sky-500/10 blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-sky-950/80 text-sky-400 border border-sky-800/60 mb-4">
              <span className="w-2 h-2 rounded-full bg-sky-400" aria-hidden="true" />
              <span>RESUME &amp; RECRUITER BRIEF</span>
            </div>

            <h2
              id="resume-cta-heading"
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-snug"
            >
              채용 담당자를 위한 이력 요약
            </h2>

            <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
              <strong className="text-white font-semibold">{profileData.name}</strong>은{' '}
              {profileData.title}
              <br className="hidden sm:inline" />
              과장된 수식어보다 실제 고객 접점에서의 문제 해결, 현장 매뉴얼 정립, 웹 코드 수정, 데이터 자동화 및 풀스택 프로덕트 개발까지의 일관된 문제 해결 궤적을 제시합니다.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <span className="text-sky-400 font-bold">✓</span>
                <span>실제 구현 및 증빙 가능한 업무 범위 준수</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sky-400 font-bold">✓</span>
                <span>엄격한 개인정보 비노출 원칙 적용</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sky-400 font-bold">✓</span>
                <span>모바일 375px 최적화 열람 지원</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sky-400 font-bold">✓</span>
                <span>공식 GitHub 및 기술 블로그 코드베이스 연동</span>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold bg-sky-500 hover:bg-sky-400 text-slate-950 transition-colors shadow-lg shadow-sky-500/20 focus:outline-none focus:ring-2 focus:ring-sky-400"
            >
              <svg className="w-4 h-4 text-slate-950" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Contact / 협업 문의하기</span>
            </a>

            <a
              href="#experience"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400"
            >
              <svg className="w-4 h-4 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              <span>상세 경력 타임라인 보기</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
