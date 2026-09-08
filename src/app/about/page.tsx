import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/motion/Reveal";
import { OptionalImage } from "@/components/site/OptionalImage";
import { LightboxImage } from "@/components/site/ImageLightbox";
import { profileData } from "@/data/profile";
import { educationData } from "@/data/education";
import { awardsData } from "@/data/awards";
import { contentData } from "@/data/content";
import { createSiteMetadata } from "@/lib/seo";

export const metadata: Metadata = createSiteMetadata("/about") as Metadata;

const degree = educationData.find((item) => item.degreeOrType === "bachelor");
const trainings = educationData.filter((item) => item.degreeOrType !== "bachelor");

const CHANNEL_ACCENT: Record<string, string> = {
  youtube: "#c2352c",
  naver_blog: "#3f7a4f",
};

export default function AboutPage() {
  return (
    <div className="w-full">
      <PageHeader
        index="05"
        eyebrow="About"
        title={
          <>
            고객 경험에서
            <br />
            제품까지, 김범우
          </>
        }
        lede="고객 응대에서 시작해 콘텐츠와 마케팅, 웹 운영을 거쳐 지금은 서비스를 직접 기획하고 개발합니다."
      />

      {/* ============ PROFILE — art-directed photo composition ============ */}
      <section aria-labelledby="about-profile" className="bg-paper">
        <Container className="max-w-6xl py-14 md:py-20">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-[1.15fr_1fr] md:gap-16">
            <Reveal>
              <div>
                <h2 id="about-profile" className="sr-only">
                  프로필
                </h2>
                <p className="text-center text-[clamp(2.2rem,5.6vw,3.4rem)] font-extrabold leading-[1.05] text-ink md:text-left">
                  Keyco
                  <span className="ml-3 align-middle font-mono text-[clamp(1rem,2.2vw,1.4rem)] font-medium tracking-[0.1em] text-clay">
                    김범우
                  </span>
                </p>
                <p className="mt-4 text-center font-mono text-[12px] tracking-[0.14em] text-muted uppercase md:text-left">
                  Customer Experience · Content · Product Development
                </p>
                <div className="mt-7 max-w-xl">
                  {profileData.fullBio.map((paragraph, i) => (
                    <p
                      key={i}
                      className={
                        i === 0
                          ? "text-[16px] leading-relaxed text-ink md:text-[17px]"
                          : "mt-4 text-[14.5px] leading-relaxed text-ink-soft"
                      }
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Layered editorial portrait — arch frame, offset panel, stitch arc */}
            <Reveal delay={120}>
              <figure className="relative mx-auto w-full max-w-[380px]">
                {/* offset night panel */}
                <span
                  aria-hidden="true"
                  className="absolute -top-4 -right-4 bottom-6 -left-3 rounded-[26px] bg-night md:-right-6 md:-left-5"
                />
                {/* arch-cropped photo */}
                <div
                  className="relative overflow-hidden border border-ink/10"
                  style={{ borderRadius: "170px 170px 20px 20px" }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element -- static export + images.unoptimized; raw <img> is intentional */}
                  <img
                    src="/images/profile/keyco-profile-main.webp"
                    alt="김범우(Keyco) 프로필 사진"
                    width={760}
                    height={950}
                    className="block h-auto w-full object-cover object-top"
                    style={{ aspectRatio: "4 / 5" }}
                  />
                </div>
                {/* overlapping mono tag */}
                <figcaption className="absolute -bottom-7 left-1/2 w-max max-w-[92%] -translate-x-1/2 rounded-2xl border border-night-line bg-night-raise px-4 py-2 text-center shadow-lg">
                  <span className="block font-mono text-[11px] tracking-[0.12em] text-night-soft">
                    이해하고 · 기록하고 · 구조화하고 · 직접 만드는 사람
                  </span>
                  <span className="mt-0.5 block text-[12px] font-extrabold text-clay-bright">
                    Keyco
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ============ CAREER ARC ============ */}
      <section aria-labelledby="about-arc" className="border-y border-ink/10 bg-paper-deep/60">
        <Container className="max-w-5xl py-14 md:py-20">
          <Reveal>
            <p className="eyebrow">Career Arc</p>
            <h2 id="about-arc" className="mt-2 text-[clamp(1.5rem,3.6vw,2.2rem)] font-extrabold text-ink">
              걸어온 길
            </h2>
          </Reveal>
          <ol className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {profileData.journeySteps.map((step, i) => (
              <Reveal as="li" key={step.step} delay={i * 60}>
                <div className="group h-full rounded-2xl border border-ink/10 bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-clay/40">
                  <span
                    aria-hidden="true"
                    className="font-mono text-[2rem] font-bold leading-none text-ink/12 transition-colors duration-300 group-hover:text-clay/40"
                  >
                    {step.step}
                  </span>
                  <p className="mt-2 text-[16px] font-extrabold text-ink">{step.category}</p>
                  <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink-soft">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      {/* ============ EDUCATION ============ */}
      <section aria-labelledby="about-education" className="bg-paper">
        <Container className="max-w-5xl py-14 md:py-20">
          <Reveal>
            <p className="eyebrow">Education</p>
            <h2 id="about-education" className="mt-2 text-[clamp(1.5rem,3.6vw,2.2rem)] font-extrabold text-ink">
              학력
            </h2>
          </Reveal>

          {degree && (
            <Reveal delay={60}>
              <div className="mt-8 grid grid-cols-1 gap-8 rounded-2xl border border-ink/10 bg-surface p-6 md:grid-cols-[1fr_220px] md:p-8">
                <div>
                  <p className="font-mono text-[11px] tracking-[0.16em] text-clay uppercase">
                    {degree.categoryBadge}
                  </p>
                  <h3 className="mt-2 text-[1.4rem] font-extrabold text-ink">
                    {degree.institution}
                  </h3>
                  <p className="mt-1 text-[14.5px] font-semibold text-ink-soft">
                    {degree.program}
                  </p>
                  <p className="mt-1 font-mono text-[12px] text-muted">{degree.period}</p>
                  {(degree.major || degree.minor || degree.gpa) && (
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {degree.major && (
                        <li className="rounded-full bg-ink/[0.05] px-3 py-1 text-[12.5px] font-semibold text-ink-soft">
                          주전공 {degree.major}
                        </li>
                      )}
                      {degree.minor && (
                        <li className="rounded-full bg-ink/[0.05] px-3 py-1 text-[12.5px] font-semibold text-ink-soft">
                          부전공 {degree.minor}
                        </li>
                      )}
                      {degree.gpa && (
                        <li className="rounded-full border border-clay/40 bg-clay-wash px-3 py-1 font-mono text-[12.5px] font-bold text-clay">
                          GPA {degree.gpa}
                        </li>
                      )}
                    </ul>
                  )}
                  <p className="mt-4 max-w-xl text-[14px] leading-relaxed text-ink-soft">
                    {degree.description}
                  </p>
                </div>
                {/* future artifact slot — hidden until media exists */}
                <OptionalImage
                  src={undefined}
                  alt={`${degree.institution} 증빙 이미지`}
                  className="rounded-xl border border-ink/10"
                  aspect="3 / 4"
                  wrapperClassName="self-center"
                />
              </div>
            </Reveal>
          )}

          {/* Training */}
          <Reveal delay={80}>
            <h3 className="mt-12 text-[1.2rem] font-extrabold text-ink">
              교육 · 수료
            </h3>
          </Reveal>
          <div className="mt-5 flex flex-col gap-5">
            {trainings.map((item, i) => {
              const hasImage = Boolean(item.imagePath);
              return (
                <Reveal key={item.id} delay={i * 60}>
                  <div
                    className={`grid grid-cols-1 gap-6 rounded-2xl border border-ink/10 bg-surface p-6 ${hasImage ? "md:grid-cols-[1fr_200px]" : ""}`}
                  >
                    <div>
                      <p className="font-mono text-[10.5px] tracking-[0.16em] text-clay uppercase">
                        {item.categoryBadge}
                      </p>
                      <h4 className="mt-1.5 text-[16.5px] font-extrabold text-ink">
                        {item.institution}
                      </h4>
                      <p className="mt-0.5 text-[14px] font-semibold text-ink-soft">
                        {item.program}
                      </p>
                      <p className="mt-0.5 font-mono text-[11.5px] text-muted">{item.period}</p>
                      <p className="mt-3 max-w-xl text-[13.5px] leading-relaxed text-ink-soft">
                        {item.description}
                      </p>
                      {item.cautionNotice && (
                        <p className="mt-3 border-l-2 border-sand pl-3 text-[12.5px] leading-relaxed text-muted">
                          {item.cautionNotice.replace("※ ", "")}
                        </p>
                      )}
                    </div>
                    {hasImage && item.imagePath && (
                      <LightboxImage
                        src={item.imagePath}
                        alt={item.imageAlt ?? `${item.institution} 수료 증빙 이미지`}
                        label={`${item.institution} 수료증`}
                        buttonClassName="self-center overflow-hidden rounded-xl border border-ink/10 bg-white transition-all duration-300 hover:shadow-[0_16px_32px_-20px_rgba(20,22,26,0.3)]"
                        thumbnailClassName="h-auto w-full object-contain transition-transform duration-500 group-hover/media:scale-[1.02] motion-reduce:transition-none"
                        thumbnailWrapperClassName="w-full"
                      />
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ============ AWARDS ============ */}
      <section aria-labelledby="about-awards" className="border-y border-ink/10 bg-paper-deep/60">
        <Container className="max-w-5xl py-14 md:py-20">
          <Reveal>
            <p className="eyebrow">Awards</p>
            <h2 id="about-awards" className="mt-2 text-[clamp(1.5rem,3.6vw,2.2rem)] font-extrabold text-ink">
              수상
            </h2>
          </Reveal>
          <ul className="mt-8 flex flex-col">
            {awardsData.map((award, i) => {
              const hasImage = Boolean(award.imagePath);
              const is2017 = award.id === "award-2017-lotte-world";
              return (
                <Reveal as="li" key={award.id} delay={i * 60}>
                  <div
                    className={`group grid grid-cols-[64px_1fr] items-start gap-5 border-t border-ink/12 py-6 last:border-b ${hasImage ? "md:grid-cols-[92px_1fr_200px]" : "md:grid-cols-[92px_1fr]"}`}
                  >
                    <span className="font-mono text-[clamp(1.4rem,3vw,2rem)] font-bold text-ink/25 transition-colors duration-300 group-hover:text-clay">
                      {award.year}
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-[16.5px] font-extrabold text-ink md:text-[18px]">
                        {award.title}
                      </h3>
                      {award.organizationConfirmed && award.organization && (
                        <p className="mt-0.5 font-mono text-[11.5px] tracking-wide text-clay">
                          {award.organization}
                        </p>
                      )}
                      <p className="mt-2 max-w-xl text-[13.5px] leading-relaxed text-ink-soft">
                        {award.description}
                      </p>
                      {/* mobile media — stacked below text, constrained width so vertical docs stay legible */}
                      {hasImage && award.imagePath && (
                        <div className="mt-4 md:hidden">
                          <LightboxImage
                            src={award.imagePath}
                            alt={award.imageAlt ?? `${award.title} 증빙 이미지`}
                            label={award.title}
                            buttonClassName="block overflow-hidden rounded-lg border border-ink/10 bg-white"
                            thumbnailClassName="h-auto w-full object-contain"
                            thumbnailWrapperClassName="mx-auto max-w-[320px]"
                          />
                          {is2017 && award.secondaryImagePath && (
                            <LightboxImage
                              src={award.secondaryImagePath}
                              alt={
                                award.secondaryImageAlt ?? `${award.title} 수상 기록 이미지`
                              }
                              label={`${award.title} 수상 기록`}
                              buttonClassName="mt-3 block overflow-hidden rounded-lg border border-ink/10 bg-white opacity-95"
                              thumbnailClassName="h-auto w-full object-contain"
                              thumbnailWrapperClassName="mx-auto max-w-[280px]"
                            />
                          )}
                        </div>
                      )}
                    </div>
                    {/* desktop media slot — fixed width column, vertical docs keep natural portrait ratio */}
                    {hasImage && award.imagePath && (
                      <div className="hidden flex-col gap-3 md:flex">
                        <LightboxImage
                          src={award.imagePath}
                          alt={award.imageAlt ?? `${award.title} 증빙 이미지`}
                          label={award.title}
                          buttonClassName="block overflow-hidden rounded-lg border border-ink/10 bg-white transition-all duration-300 hover:shadow-[0_16px_32px_-20px_rgba(20,22,26,0.28)]"
                          thumbnailClassName="h-auto w-full object-contain transition-transform duration-500 group-hover/media:scale-[1.02] motion-reduce:transition-none"
                          thumbnailWrapperClassName="w-full"
                        />
                        {is2017 && award.secondaryImagePath && (
                          <LightboxImage
                            src={award.secondaryImagePath}
                            alt={
                              award.secondaryImageAlt ?? `${award.title} 수상 기록 이미지`
                            }
                            label={`${award.title} 수상 기록`}
                            buttonClassName="block overflow-hidden rounded-lg border border-ink/10 bg-white opacity-90 transition-all duration-300 hover:opacity-100"
                            thumbnailClassName="h-auto w-full object-contain transition-transform duration-500 group-hover/media:scale-[1.02] motion-reduce:transition-none"
                            thumbnailWrapperClassName="w-full"
                            footer="수상 기록"
                          />
                        )}
                      </div>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </Container>
      </section>

      {/* ============ CONTENT CHANNELS ============ */}
      <section aria-labelledby="about-content" className="bg-paper">
        <Container className="max-w-5xl py-14 md:py-20">
          <Reveal>
            <p className="eyebrow">Channels</p>
            <h2 id="about-content" className="mt-2 text-[clamp(1.5rem,3.6vw,2.2rem)] font-extrabold text-ink">
              직접 운영하는 채널
            </h2>
          </Reveal>
          <div className="mt-9 grid grid-cols-1 gap-6 md:grid-cols-2">
            {contentData.map((item, i) => {
              const accent = CHANNEL_ACCENT[item.platform] ?? "var(--clay)";
              const coverSlot = undefined;
              return (
                <Reveal key={item.id} delay={i * 80}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink/10 bg-surface transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-30px_rgba(20,22,26,0.4)]"
                  >
                    {/* cover slot — replaced by real artwork when added */}
                    <div className="relative">
                      <div
                        aria-hidden="true"
                        className="dot-grid-light flex h-[120px] items-end p-5"
                        style={{
                          background: `linear-gradient(135deg, color-mix(in srgb, ${accent} 14%, var(--paper-deep)) 0%, var(--paper-deep) 100%)`,
                        }}
                      >
                        <span
                          className="font-mono text-[clamp(1.3rem,3vw,1.7rem)] font-bold tracking-tight"
                          style={{ color: accent }}
                        >
                          {item.channelOrBlogName}
                        </span>
                      </div>
                      <OptionalImage
                        src={coverSlot}
                        alt={`${item.title} 채널 아트`}
                        className="absolute inset-0 h-full w-full object-cover"
                        wrapperClassName="absolute inset-0"
                      />
                    </div>

                    <div className="flex flex-1 flex-col p-5">
                      <p
                        className="font-mono text-[10.5px] tracking-[0.16em] uppercase"
                        style={{ color: accent }}
                      >
                        {item.badge}
                      </p>
                      <h3 className="mt-1.5 text-[17px] font-extrabold text-ink">
                        {item.title}
                        <span
                          aria-hidden="true"
                          className="ml-1.5 inline-block transition-transform duration-300 group-hover:translate-x-1"
                          style={{ color: accent }}
                        >
                          ↗
                        </span>
                      </h3>
                      <p className="mt-2 text-[13.5px] leading-relaxed text-ink-soft">
                        {item.description}
                      </p>
                      <ul className="mt-4 flex flex-wrap gap-1.5">
                        {item.roleScope.map((scope) => (
                          <li
                            key={scope}
                            className="rounded-full bg-ink/[0.05] px-2.5 py-1 font-mono text-[10.5px] text-ink-soft"
                          >
                            {scope}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </a>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ============ CONTACT ============ */}
      <section
        id="contact"
        aria-labelledby="about-contact"
        className="dot-grid scroll-mt-20 border-t border-night-line bg-night py-16 text-night-ink md:py-20"
      >
        <Container className="max-w-5xl">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_1.1fr] md:gap-16">
            <Reveal>
              <p className="eyebrow text-clay-bright">Contact</p>
              <h2
                id="about-contact"
                className="mt-3 text-[clamp(1.8rem,4.4vw,2.6rem)] font-extrabold"
              >
                연락을 기다립니다.
              </h2>
              <p className="mt-4 max-w-md text-[15px] leading-relaxed text-night-soft">
                프로젝트, 협업, 채용 이야기 모두 환영합니다. 이메일이 가장
                빠르고 편한 방법이며, 아래 채널로도 언제든 찾아오셔도 좋습니다.
                메시지를 확인하면 정성껏 회신드립니다.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <div className="rounded-2xl border border-night-line bg-night-raise/70 px-5 py-3 backdrop-blur-sm">
                <ul aria-label="연락 채널" className="flex flex-col">
                  {profileData.publicEmail && (
                    <li>
                      <a
                        href={`mailto:${profileData.publicEmail}`}
                        className="group flex min-h-[56px] items-center gap-4 border-b border-night-line py-3.5"
                      >
                        <span className="min-w-0 flex-1">
                          <span className="block text-[15px] font-bold text-night-ink">Email</span>
                          <span className="block truncate font-mono text-[11.5px] text-night-muted">
                            {profileData.publicEmail}
                          </span>
                        </span>
                        <span aria-hidden="true" className="text-night-muted transition-all duration-300 group-hover:translate-x-1 group-hover:text-clay-bright">↗</span>
                      </a>
                    </li>
                  )}
                  {[...profileData.links].map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex min-h-[56px] items-center gap-4 border-b border-night-line py-3.5 last:border-0"
                      >
                        <span className="min-w-0 flex-1">
                          <span className="block text-[15px] font-bold text-night-ink transition-transform duration-300 group-hover:translate-x-0.5">
                            {link.label}
                          </span>
                          {link.description && (
                            <span className="block truncate font-mono text-[11.5px] text-night-muted">
                              {link.description}
                            </span>
                          )}
                        </span>
                        <span
                          aria-hidden="true"
                          className="text-night-muted transition-all duration-300 group-hover:translate-x-1 group-hover:text-clay-bright"
                        >
                          ↗
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </div>
  );
}
