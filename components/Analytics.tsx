"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { readConsent, CONSENT_EVENT, type Consent } from "@/lib/consent";

const GA_ID = "G-CEGD8S818T";

/** Google Analytics loader — indlæses først når gæsten har sagt ja til statistik. */
export default function Analytics() {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    setAllowed(readConsent()?.statistics ?? false);

    const onChange = (e: Event) => {
      setAllowed((e as CustomEvent<Consent>).detail.statistics);
    };
    window.addEventListener(CONSENT_EVENT, onChange);
    return () => window.removeEventListener(CONSENT_EVENT, onChange);
  }, []);

  if (!allowed) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}
