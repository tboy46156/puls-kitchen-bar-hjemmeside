/**
 * Cookie-samtykke. Gemmes lokalt i browseren og udløber efter 12 måneder,
 * så gæsten bliver spurgt igen (Datatilsynets anbefaling).
 */

export type Consent = {
  statistics: boolean;
  marketing: boolean;
  date: string;
};

const KEY = "puls-cookie-consent";
const MAX_AGE_DAYS = 365;

export const CONSENT_EVENT = "puls-consent-change";
export const OPEN_SETTINGS_EVENT = "puls-consent-open";

export function readConsent(): Consent | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Consent;
    const ageDays = (Date.now() - new Date(parsed.date).getTime()) / 86_400_000;
    if (!Number.isFinite(ageDays) || ageDays > MAX_AGE_DAYS) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function saveConsent(choice: { statistics: boolean; marketing: boolean }) {
  const consent: Consent = { ...choice, date: new Date().toISOString() };
  window.localStorage.setItem(KEY, JSON.stringify(consent));
  updateGoogleConsent(consent);
  window.dispatchEvent(new CustomEvent<Consent>(CONSENT_EVENT, { detail: consent }));
}

/** Fortæller Google Consent Mode v2 hvad gæsten har valgt. */
export function updateGoogleConsent(consent: Consent) {
  const w = window as Window & { gtag?: (...args: unknown[]) => void };
  w.gtag?.("consent", "update", {
    analytics_storage: consent.statistics ? "granted" : "denied",
    ad_storage: consent.marketing ? "granted" : "denied",
    ad_user_data: consent.marketing ? "granted" : "denied",
    ad_personalization: consent.marketing ? "granted" : "denied",
  });
}

/** Åbner banneret igen — bruges af "Cookie-indstillinger" i footeren. */
export function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_SETTINGS_EVENT));
}
