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
    <div className="grid grid-cols-1 gap-1.5 md:flex md:flex-wrap md:gap-3 w-full md:w-auto" role="tablist">
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
              "relative group flex items-center justify-center gap-2.5 px-6 py-2.5 md:px-8 md:py-4 w-full md:w-auto",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold transition-all duration-200",
              isActive
                ? "text-obsidian"
                : "text-obsidian/60 border border-obsidian/20 hover:border-obsidian/50 hover:text-obsidian"
            )}
          >
            {isActive && (
              <motion.span
                layoutId="menu-tab-pill"
                className="absolute inset-0 bg-gold"
                transition={{ type: "spring", stiffness: 420, damping: 38 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-2.5">
              <Icon
                size={17}
                strokeWidth={1.75}
                className={clsx(
                  "transition-colors",
                  isActive ? "text-obsidian" : "text-obsidian/50 group-hover:text-obsidian"
                )}
              />
              <span className="font-sans font-bold uppercase tracking-[0.18em] text-[12px]">
                {tab.label}
              </span>
            </span>
          </button>
        );
      })}
    </div>
  );
}
