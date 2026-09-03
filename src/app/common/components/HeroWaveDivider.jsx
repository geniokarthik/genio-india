"use client";

import styles from "src/app/common/styles/HeroWaveDivider.module.css";

/**
 * Shared bottom-edge treatment for every full-bleed page hero (Home,
 * Service, Offshore Service, About Us, Contact Us): a soft red-tinted wave
 * behind a solid wave in the next section's own background color, plus a
 * small floating accent dot — replaces a hero's flat straight bottom edge
 * with one consistent, on-brand transition across the whole site.
 *
 * `fill` must match the background of whatever section follows the hero
 * (default "#ffffff"; pass "#f9fafb" when the next section is the light-gray
 * band used on Home / Offshore Service), otherwise the wave leaves a visible
 * seam instead of blending in.
 */
export default function HeroWaveDivider({ fill = "#ffffff" }) {
  return (
    <div className={styles.heroWave} aria-hidden="true">
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,60 C220,110 480,20 720,50 C960,80 1220,110 1440,40 L1440,120 L0,120 Z" fill="rgba(226,33,16,0.10)" />
        <path d="M0,85 C260,45 500,115 760,75 C1000,40 1240,95 1440,75 L1440,120 L0,120 Z" fill={fill} />
      </svg>
      <span className={styles.heroWaveDot} />
    </div>
  );
}
