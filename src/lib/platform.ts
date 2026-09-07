/**
 * Deployment-neutral site settings.
 *
 * `NEXT_PUBLIC_SITE_URL` is intentionally supplied by the deployment
 * environment. Do not replace this contract with a guessed production domain.
 */
export const SITE_LOCALE = "ko_KR";
export const SITE_LANGUAGE = "ko";

export function getSiteUrl(value = process.env.NEXT_PUBLIC_SITE_URL): URL | undefined {
  if (!value) return undefined;

  try {
    return new URL(value);
  } catch {
    return undefined;
  }
}

export function absoluteUrl(pathname: string, siteUrl = getSiteUrl()): URL | undefined {
  if (!siteUrl) return undefined;
  return new URL(pathname, siteUrl);
}
