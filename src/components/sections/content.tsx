import React from 'react';
import { contentData } from '../../data/content';

export const ContentSection: React.FC = () => {
  return (
    <section
      id="content"
      aria-labelledby="content-heading"
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-slate-100"
    >
      <div className="flex flex-col items-start gap-3 mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-rose-950/80 text-rose-400 border border-rose-800/60">
          <span className="w-2 h-2 rounded-full bg-rose-400" aria-hidden="true" />
          <span>PRODUCTION &amp; DOCUMENTATION</span>
        </div>
        <h2
          id="content-heading"
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white"
        >
          콘텐츠 프로덕션 &amp; 기술 기록
        </h2>
        <p className="text-sm sm:text-base text-slate-300 max-w-3xl">
          단순한 SNS 링크 연결이 아닌, 직접 기획·촬영·편집하는 비디오 프로덕션과 기술적 시행착오 및 시스템 설계를 축적하는 아카이빙 채널입니다.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {contentData.map((item) => (
          <article
            key={item.id}
            className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all shadow-sm"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-rose-950/60 text-rose-300 border border-rose-800/60">
                  {item.badge}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {item.channelOrBlogName}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                {item.description}
              </p>

              {/* Role Scope Tags */}
              <div className="mb-5">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  직접 수행하는 프로덕션 영역
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {item.roleScope.map((scope) => (
                    <span
                      key={scope}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-800 text-slate-200 border border-slate-700/60"
                    >
                      {scope}
                    </span>
                  ))}
                </div>
              </div>

              {/* Focus Topics */}
              <div className="mb-6">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  주요 다룸 주제
                </h4>
                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300" role="list">
                  {item.focusTopics.map((topic, tIdx) => (
                    <li key={tIdx} className="flex items-start gap-2">
                      <span className="text-rose-400 font-bold shrink-0 mt-0.5">•</span>
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Direct Link CTA */}
            <div className="pt-4 border-t border-slate-800/80">
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl text-sm font-semibold bg-slate-800 hover:bg-slate-700 text-white border border-slate-700/80 hover:border-rose-500/50 transition-all focus:outline-none focus:ring-2 focus:ring-rose-500/50"
              >
                <span>{item.title} 바로가기</span>
                <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ContentSection;
