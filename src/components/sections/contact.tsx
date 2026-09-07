'use client';

import React, { useState } from 'react';
import { profileData } from '../../data/profile';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const contactEmail = '9ren5dezvous@gmail.com'; // Safe official public contact email from git commit metadata

  const handleCopyEmail = async () => {
    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard) {
        await navigator.clipboard.writeText(contactEmail);
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
      }
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-slate-100"
    >
      <div className="rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-10 md:p-12 shadow-2xl">
        <div className="flex flex-col items-start gap-3 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-emerald-950/80 text-emerald-400 border border-emerald-800/60">
            <span className="w-2 h-2 rounded-full bg-emerald-400" aria-hidden="true" />
            <span>CONTACT &amp; INQUIRY</span>
          </div>
          <h2
            id="contact-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white"
          >
            함께 성장할 기회를 기다립니다
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
            고객과 서비스의 문제를 이해하고, 기술과 콘텐츠로 직접 제품을 만들어갈 동료를 찾으신다면 편하게 연락해 주세요.
          </p>
        </div>

        {/* Public channels & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {profileData.links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-xl bg-slate-800/70 hover:bg-slate-800 border border-slate-700/70 hover:border-sky-500/50 transition-all group"
            >
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  {link.type}
                </span>
                <div className="text-sm font-bold text-white group-hover:text-sky-300 transition-colors">
                  {link.label}
                </div>
              </div>
              <svg
                className="w-5 h-5 text-slate-400 group-hover:text-sky-400 transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          ))}
        </div>

        {/* Email Copy Card */}
        <div className="p-5 sm:p-6 rounded-2xl bg-slate-950/80 border border-slate-800/90 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
              Direct Contact
            </span>
            <span className="font-mono text-base sm:text-lg font-bold text-white select-all">
              {contactEmail}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handleCopyEmail}
              aria-label="이메일 주소 복사하기"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-sky-600 hover:bg-sky-500 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-sky-400"
            >
              {copied ? (
                <>
                  <svg className="w-4 h-4 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>복사 완료!</span>
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <span>이메일 주소 복사</span>
                </>
              )}
            </button>

            <a
              href={`mailto:${contactEmail}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400"
            >
              메일 쓰기
            </a>
          </div>
        </div>

        {/* Privacy Note */}
        <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-slate-400 flex items-center gap-2">
          <svg className="w-4 h-4 text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <span>
            본 포트폴리오는 민감 개인정보(상세 주소, 전화번호, 생년월일, 학번, 금융·내부 정보 등)를 철저히 배제하고 안전한 공식 공개 채널만을 제공합니다.
          </span>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
