import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/site/PageHeader";
import { ContactChannels } from "@/components/site/ContactChannels";
import { profileData } from "@/data/profile";
import { educationData } from "@/data/education";
import { awardsData } from "@/data/awards";
import { contentData } from "@/data/content";
import { createSiteMetadata } from "@/lib/seo";

export const metadata: Metadata = createSiteMetadata("/about") as Metadata;

const degree = educationData.find((item) => item.degreeOrType === "bachelor");
const trainings = educationData.filter((item) => item.degreeOrType !== "bachelor");

export default function AboutPage() {
  return (
    <div className="w-full">
      <PageHeader
        eyebrow="About"
        title="소개"
        lede="고객 응대에서 시작해 콘텐츠와 마케팅을 거쳐, 지금은 직접 서비스를 만든다."
      />

      <Container className="max-w-3xl py-12 md:py-16">
        {/* Profile / short introduction */}
        <section aria-labelledby="about-profile" className="flex flex-col gap-6 sm:flex-row sm:items-start">
          <figure className="m-0 shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element -- static export + images.unoptimized; raw <img> is intentional */}
            <img
              src="/images/profile/keyco-profile-main.webp"
              alt="김범우(KEYCO) 프로필"
              width={128}
              height={160}
              className="h-[160px] w-[128px] rounded-2xl border border-ink/10 object-cover object-top"
            />
          </figure>
          <div>
            <h2 id="about-profile" className="text-xl font-bold tracking-tight text-ink">
              {profileData.name} · 김범우
            </h2>
            <p className="mt-1 text-[15px] font-medium text-ink-soft">{profileData.title}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">{profileData.shortBio}</p>
          </div>
        </section>

        {/* Career Arc */}
        <section aria-labelledby="about-arc" className="mt-14">
          <h2 id="about-arc" className="text-xl font-bold tracking-tight text-ink">
            걸어온 길
          </h2>
          <ol className="mt-5 flex flex-col">
            {profileData.journeySteps.map((step) => (
              <li
                key={step.step}
                className="flex gap-4 border-t border-ink/10 py-3.5 last:border-b"
              >
                <span className="w-28 shrink-0 pt-0.5 text-[13px] font-semibold text-navy">
                  {step.category}
                </span>
                <p className="text-sm leading-relaxed text-ink-soft">{step.description}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Education */}
        <section aria-labelledby="about-education" className="mt-14">
          <h2 id="about-education" className="text-xl font-bold tracking-tight text-ink">
            학력
          </h2>
          {degree && (
            <div className="mt-5 border-t border-ink/10 pt-4">
              <p className="text-[15px] font-semibold text-ink">{degree.institution}</p>
              <p className="mt-0.5 text-sm text-muted">{degree.program}</p>
              <p className="mt-0.5 font-mono text-xs text-muted">{degree.period}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{degree.description}</p>
              {(degree.major || degree.minor || degree.gpa) && (
                <p className="mt-2 text-[13px] text-muted">
                  {[degree.major && `주전공 ${degree.major}`, degree.minor && `부전공 ${degree.minor}`, degree.gpa && `학점 ${degree.gpa}`]
                    .filter(Boolean)
                    .join(" · ")}
                </p>
              )}
            </div>
          )}
        </section>

        {/* Training */}
        <section aria-labelledby="about-training" className="mt-14">
          <h2 id="about-training" className="text-xl font-bold tracking-tight text-ink">
            교육
          </h2>
          <div className="mt-5 flex flex-col">
            {trainings.map((item) => (
              <div key={item.id} className="border-t border-ink/10 py-4 last:border-b">
                <p className="text-[15px] font-semibold text-ink">{item.institution}</p>
                <p className="mt-0.5 text-sm text-muted">{item.program}</p>
                <p className="mt-0.5 font-mono text-xs text-muted">{item.period}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.description}</p>
                {item.cautionNotice && (
                  <p className="mt-2 text-[13px] leading-relaxed text-muted">{item.cautionNotice}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Awards */}
        <section aria-labelledby="about-awards" className="mt-14">
          <h2 id="about-awards" className="text-xl font-bold tracking-tight text-ink">
            수상
          </h2>
          <ul className="mt-5 flex flex-col">
            {awardsData.map((award) => (
              <li
                key={award.id}
                className="flex gap-4 border-t border-ink/10 py-3.5 last:border-b"
              >
                <span className="w-12 shrink-0 pt-0.5 font-mono text-[13px] text-muted">
                  {award.year}
                </span>
                <div>
                  <p className="text-[15px] font-semibold text-ink">
                    {award.title}
                    {award.organizationConfirmed && award.organization && (
                      <span className="ml-2 text-[13px] font-normal text-muted">
                        {award.organization}
                      </span>
                    )}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{award.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Content Channels */}
        <section aria-labelledby="about-content" className="mt-14">
          <h2 id="about-content" className="text-xl font-bold tracking-tight text-ink">
            만드는 채널
          </h2>
          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {contentData.map((item) => (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[44px] flex-col gap-1 rounded-xl border border-ink/10 bg-surface p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-ink/20"
              >
                <span className="text-[15px] font-semibold text-ink">
                  {item.title} <span aria-hidden="true" className="text-muted">↗</span>
                </span>
                <span className="font-mono text-xs text-muted">{item.channelOrBlogName}</span>
                <span className="mt-1 text-[13px] leading-relaxed text-muted">
                  {item.description}
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section aria-labelledby="about-contact" className="mt-14">
          <h2 id="about-contact" className="text-xl font-bold tracking-tight text-ink">
            연락
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            공개 채널로 편하게 연락하면 된다.
          </p>
          <div className="mt-5">
            <ContactChannels />
          </div>
        </section>
      </Container>
    </div>
  );
}
