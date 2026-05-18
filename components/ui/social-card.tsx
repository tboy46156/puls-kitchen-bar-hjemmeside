"use client";

import React from "react";

const InstagramIcon = () => (
  <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current">
    <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const TripAdvisorIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4.5c1.953 0 3.754.6 5.232 1.617L19.5 4.5l-1.383 1.383A7.47 7.47 0 0 1 19.5 10.5c0 4.136-3.364 7.5-7.5 7.5S4.5 14.636 4.5 10.5c0-1.617.513-3.117 1.383-4.617L4.5 4.5l2.268 1.617A7.437 7.437 0 0 1 12 4.5zm0 2.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm0 1.5a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5z"/>
  </svg>
);

const links = [
  {
    label: "Instagram",
    handle: "@pulskitchenbar",
    href: "https://www.instagram.com/pulskitchenbar/",
    icon: <InstagramIcon />,
    bg: "hover:bg-[#E1306C]",
  },
  {
    label: "Facebook",
    handle: "PULS Kitchen & Bar",
    href: "https://www.facebook.com/pulskitchenbar",
    icon: <FacebookIcon />,
    bg: "hover:bg-[#1877F2]",
  },
  {
    label: "TripAdvisor",
    handle: "Anmeld os",
    href: "https://www.tripadvisor.dk/Restaurant_Review-g189541-d23380540-Reviews-Puls_Kitchen_Bar-Copenhagen_Zealand.html",
    icon: <TripAdvisorIcon />,
    bg: "hover:bg-[#34E0A1]",
  },
];

export function SocialCard() {
  return (
    <div className="flex flex-col gap-2.5 w-full">
      {links.map((l) => (
        <a
          key={l.label}
          href={l.href}
          target="_blank"
          rel="noopener"
          className={`group flex items-center gap-4 px-5 py-3.5 bg-charcoal border border-border-col transition-colors duration-300 ${l.bg} hover:border-transparent`}
        >
          <span className="text-gold group-hover:text-white transition-colors duration-300 shrink-0">
            {l.icon}
          </span>
          <span className="flex-1">
            <span className="block text-[11px] tracking-[0.22em] uppercase font-semibold text-ivory group-hover:text-white transition-colors duration-300">
              {l.label}
            </span>
            <span className="block text-[11px] text-stone group-hover:text-white/70 transition-colors duration-300">
              {l.handle}
            </span>
          </span>
          <span className="text-stone group-hover:text-white transition-colors duration-300 text-sm">↗</span>
        </a>
      ))}
    </div>
  );
}
