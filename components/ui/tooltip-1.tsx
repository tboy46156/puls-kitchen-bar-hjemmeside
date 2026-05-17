"use client";

import React, { useMemo } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import clsx from "clsx";

interface TooltipProps {
  children: React.ReactNode;
  text: React.ReactNode;
  position?: "top" | "bottom" | "left" | "right";
}

export const Tooltip = ({ children, text, position = "top" }: TooltipProps) => {
  const id = useMemo(() => {
    const chars = "abcdefghijklmnopqrstuvwxyz";
    return Array.from({ length: 8 }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
  }, []);

  return (
    <div>
      <div id={id}>{children}</div>
      <ReactTooltip
        anchorSelect={`#${id}`}
        place={position}
        delayShow={400}
        opacity={1}
        className={clsx(
          "!font-sans !text-[11px] !tracking-widest !uppercase !rounded-none",
          "!bg-accent !text-ink2 !px-3 !py-1.5"
        )}
      >
        {text}
      </ReactTooltip>
    </div>
  );
};
