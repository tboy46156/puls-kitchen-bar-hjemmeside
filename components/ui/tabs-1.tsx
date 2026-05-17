"use client";

import React from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

export interface IMenuTab {
  label: string;
  value: string;
  icon: LucideIcon;
}

interface MenuTabsProps {
  tabs: IMenuTab[];
  selected: string;
  setSelected: (v: string) => void;
}

export function MenuTabs({ tabs, selected, setSelected }: MenuTabsProps) {
  return (
    <div className="flex flex-wrap gap-1.5 md:gap-2" role="tablist">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = selected === tab.value;
        return (
          <button
            key={tab.value}
            role="tab"
            aria-selected={isActive}
            onClick={() => setSelected(tab.value)}
            className={clsx(
              "relative group flex items-center gap-2.5 px-5 py-3 md:px-6 md:py-3.5",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold transition-colors",
              isActive ? "text-obsidian" : "text-obsidian/50 hover:text-obsidian/75"
            )}
          >
            {isActive && (
              <motion.span
                layoutId="menu-tab-pill"
                className="absolute inset-0 bg-gold"
                transition={{ type: "spring", stiffness: 420, damping: 38 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-2">
              <Icon
                size={16}
                strokeWidth={1.75}
                className={clsx(
                  "transition-colors",
                  isActive ? "text-obsidian" : "text-obsidian/45 group-hover:text-obsidian/70"
                )}
              />
              <span className="font-sans font-semibold uppercase tracking-[0.2em] text-[11px]">
                {tab.label}
              </span>
            </span>
          </button>
        );
      })}
    </div>
  );
}
