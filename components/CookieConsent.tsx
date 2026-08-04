"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";
import { readConsent, saveConsent, updateGoogleConsent, OPEN_SETTINGS_EVENT } from "@/lib/consent";

function Toggle({
  checked,
  onChange,
  disabled,
  label,
}: {
  checked: boolean;
  onChange?: (v: boolean) => void;
  disabled?: boolean;
  label: string;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      disabled={disabled}
      onClick={() => onChange?.(!checked)}
      className={`relative h-5 w-9 shrink-0 rounded-full transition-colors duration-200 ${
        checked ? "bg-sage" : "bg-border-col"
      } ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
    >
      <span
        className={`absolute top-0.5 h-4 w-4 rounded-full bg-ivory shadow-sm transition-transform duration-200 ${
          checked ? "translate-x-[18px]" : "translate-x-0.5"
        }`}
      />
    </button>
  );
}

export default function CookieConsent() {
  const { lang } = useLanguage();
  const t = translations[lang].cookieBanner;

  const [open, setOpen] = useState(false);
  const [details, setDetails] = useState(false);
  const [statistics, setStatistics] = useState(true);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const existing = readConsent();
    if (existing) {
      updateGoogleConsent(existing);
      setStatistics(existing.statistics);
      setMarketing(existing.marketing);
    } else {
      setOpen(true);
    }

    const reopen = () => {
      const current = readConsent();
      setStatistics(current?.statistics ?? true);
      setMarketing(current?.marketing ?? false);
      setDetails(true);
      setOpen(true);
    };
    window.addEventListener(OPEN_SETTINGS_EVENT, reopen);
    return () => window.removeEventListener(OPEN_SETTINGS_EVENT, reopen);
  }, []);

  const decide = (choice: { statistics: boolean; marketing: boolean }) => {
    saveConsent(choice);
    setOpen(false);
    setDetails(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-obsidian/40 backdrop-blur-[2px]"
          role="dialog"
          aria-modal="true"
          aria-label={t.title}
        >
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.2, 0.65, 0.2, 1] }}
            className="w-full max-w-[400px] bg-ivory rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="h-[3px] bg-gold" />

            <div className="px-6 py-6">
              <h2 className="font-display font-bold text-lg text-obsidian mb-2">{t.title}</h2>
              <p className="text-[13px] text-forest/70 leading-relaxed">
                {t.body}{" "}
                <Link href="/privatlivspolitik" className="text-forest underline underline-offset-2 hover:text-obsidian">
                  {t.privacyLink}
                </Link>
              </p>

              <AnimatePresence initial={false}>
                {details && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: [0.2, 0.65, 0.2, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="mt-5 space-y-3.5 border-t border-border-col pt-4">
                      <div className="flex items-start gap-3">
                        <Toggle checked disabled label={t.necessary.title} />
                        <div>
                          <p className="text-[13px] font-semibold text-obsidian leading-tight">{t.necessary.title}</p>
                          <p className="text-xs text-forest/60 leading-snug mt-0.5">{t.necessary.body}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Toggle checked={statistics} onChange={setStatistics} label={t.statistics.title} />
                        <div>
                          <p className="text-[13px] font-semibold text-obsidian leading-tight">{t.statistics.title}</p>
                          <p className="text-xs text-forest/60 leading-snug mt-0.5">{t.statistics.body}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Toggle checked={marketing} onChange={setMarketing} label={t.marketing.title} />
                        <div>
                          <p className="text-[13px] font-semibold text-obsidian leading-tight">{t.marketing.title}</p>
                          <p className="text-xs text-forest/60 leading-snug mt-0.5">{t.marketing.body}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="mt-5 grid grid-cols-2 gap-2.5">
                <button
                  onClick={() => decide({ statistics: false, marketing: false })}
                  className="px-4 py-3 text-[13px] font-semibold tracking-wide text-forest border border-forest/25 rounded-lg hover:border-forest/60 hover:bg-sand transition-colors"
                >
                  {t.declineAll}
                </button>
                <button
                  onClick={() => decide({ statistics: true, marketing: true })}
                  className="px-4 py-3 text-[13px] font-semibold tracking-wide text-ivory bg-forest rounded-lg hover:bg-obsidian transition-colors"
                >
                  {t.acceptAll}
                </button>
              </div>

              {details ? (
                <button
                  onClick={() => decide({ statistics, marketing })}
                  className="mt-2.5 w-full px-4 py-3 text-[13px] font-semibold tracking-wide text-forest bg-sand rounded-lg hover:bg-border-col transition-colors"
                >
                  {t.saveChoice}
                </button>
              ) : (
                <button
                  onClick={() => setDetails(true)}
                  className="mt-3 w-full text-center text-xs text-forest/60 hover:text-forest underline underline-offset-2 transition-colors"
                >
                  {t.customise}
                </button>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
