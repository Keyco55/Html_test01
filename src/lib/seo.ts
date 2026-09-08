import { absoluteUrl, getSiteUrl, SITE_LANGUAGE, SITE_LOCALE } from "./platform";

export const siteSeo = {
  name: "KEYCO Portfolio",
  title: "KEYCO | Customer Experience · Content · Product Development",
  description:
    "고객과 서비스를 이해하고, 콘텐츠와 기술로 직접 만드는 김범우(KEYCO)의 포트폴리오입니다.",
  language: SITE_LANGUAGE,
  locale: SITE_LOCALE,
  ogImagePath: "/og/keyco-signature.png",
} as const;

/**
 * Shared metadata values for the root layout. A missing public URL deliberately
 * produces no canonical or absolute social URL: preview domains must not become
 * the production canonical by accident.
 */
export function createSiteMetadata(pathname = "/") {
  const siteUrl = getSiteUrl();
  const canonical = absoluteUrl(pathname, siteUrl);
  const ogImage = absoluteUrl(siteSeo.ogImagePath, siteUrl);

  return {
    title: siteSeo.title,
    description: siteSeo.description,
    alternates: canonical ? { canonical } : undefined,
    openGraph: {
      type: "website" as const,
      locale: siteSeo.locale,
      title: siteSeo.title,
      description: siteSeo.description,
      url: canonical,
      siteName: siteSeo.name,
      images: ogImage ? [{ url: ogImage, width: 1200, height: 630, alt: siteSeo.title }] : undefined,
    },
    twitter: {
      card: "summary_large_image" as const,
      title: siteSeo.title,
      description: siteSeo.description,
      images: ogImage ? [ogImage] : undefined,
    },
  };
}

/** JSON-LD is useful for identity, but should only emit a verified URL. */
export function createPersonJsonLd() {
  const siteUrl = getSiteUrl();
  if (!siteUrl) return undefined;

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "KEYCO",
    url: siteUrl.href,
    jobTitle: "Customer Experience · Content · Product Development",
    inLanguage: siteSeo.language,
  };
}
