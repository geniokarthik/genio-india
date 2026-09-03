"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import AnimatedHeroBackdrop from "src/app/common/components/AnimatedHeroBackdrop";
import styles from "src/app/common/styles/HeroParallaxDecor.module.css";

/**
 * Mirrors the Home hero's mouse-parallax decor (canvas backdrop + orbiting
 * ring + floating dot) so other page heroes can reuse the exact same
 * interaction instead of re-deriving it. Attach the returned ref/handlers to
 * the hero <section>, then render <HeroParallaxDecor x={parallaxX} y={parallaxY} />
 * inside the text column.
 */
export function useHeroParallax() {
  const heroRef = useRef(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const parallaxX = useSpring(rawX, { stiffness: 60, damping: 18, mass: 0.6 });
  const parallaxY = useSpring(rawY, { stiffness: 60, damping: 18, mass: 0.6 });

  const onMouseMove = (e) => {
    const bounds = heroRef.current?.getBoundingClientRect();
    if (!bounds) return;
    const relX = (e.clientX - bounds.left) / bounds.width - 0.5;
    const relY = (e.clientY - bounds.top) / bounds.height - 0.5;
    rawX.set(relX * 28);
    rawY.set(relY * 28);
  };

  const onMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return { heroRef, parallaxX, parallaxY, onMouseMove, onMouseLeave };
}

export default function HeroParallaxDecor({ x, y }) {
  return (
    <div aria-hidden="true" className={styles.heroLeftBg}>
      <motion.div className={styles.heroCanvasSlot} style={{ x, y }}>
        <AnimatedHeroBackdrop className={styles.heroCanvasBackdrop} />
      </motion.div>
      <motion.div className={styles.heroRingSlot} style={{ x, y }}>
        <div className={styles.heroDecorRing} />
      </motion.div>
      <motion.div className={styles.heroDotSlot} style={{ x, y }}>
        <div className={styles.heroDecorDot} />
      </motion.div>
    </div>
  );
}
