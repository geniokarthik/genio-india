"use client";

import AnimatedHeroBackdrop from "src/app/common/components/AnimatedHeroBackdrop";
import styles from "src/app/common/styles/Decor.module.css";

/**
 * The floating-shapes layer every hero/section/CTA on the site uses: an
 * animated canvas backdrop plus a dashed orbiting ring and a floating dot.
 * One component + one stylesheet instead of every page re-implementing
 * (and slightly re-tuning) the same three decorative elements.
 *
 *   <SectionDecor variant="hero" />              // page hero, brand-red shapes
 *   <SectionDecor variant="section" />           // mid-page section
 *   <SectionDecor variant="cta" tone="light" />  // shapes on a red/dark CTA band
 *   <SectionDecor variant="hero" tone="light" /> // shapes on a red/dark hero
 *   <SectionDecor variant="section" density={1.4} /> // richer backdrop for one
 *                                                     // unusually large/plain section
 */
export default function SectionDecor({ variant = "section", tone = "brand", canvas = true, density }) {
  const isLight = tone === "light";
  const resolvedDensity = density ?? (variant === "hero" ? 0.55 : 1);
  return (
    <>
      {canvas && (
        <AnimatedHeroBackdrop
          tone={tone}
          density={resolvedDensity}
          className={`${styles.canvas} ${styles[`canvas--${variant}`] || ""}`}
        />
      )}
      <div
        aria-hidden="true"
        className={`${styles.ring} ${styles[`ring--${variant}`] || ""} ${isLight ? styles["ring--light"] : ""}`}
      />
      <div
        aria-hidden="true"
        className={`${styles.dot} ${styles[`dot--${variant}`] || ""} ${isLight ? styles["dot--light"] : ""}`}
      />
    </>
  );
}
