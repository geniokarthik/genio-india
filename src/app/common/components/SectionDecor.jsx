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
 */
export default function SectionDecor({ variant = "section", tone = "brand", canvas = true }) {
  const isLight = tone === "light";
  return (
    <>
      {canvas && (
        <AnimatedHeroBackdrop
          tone={tone}
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
