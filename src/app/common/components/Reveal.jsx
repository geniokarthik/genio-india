"use client";

import { motion } from "framer-motion";
import { EASE_OUT, VIEWPORT } from "src/app/common/motion/variants";

/**
 * Shared scroll-reveal wrapper used across every page instead of each
 * section hand-rolling its own `initial` / `whileInView` / `transition` /
 * `viewport` block. Same easing + viewport threshold everywhere, so every
 * page's reveal animation feels identical.
 *
 *   <Reveal as="section" y={40}>...</Reveal>                 // fade + rise, on scroll
 *   <Reveal as="div" y={24} duration={0.45} delay={i * 0.08}> // staggered card
 *   <Reveal as="div" x={-40} immediate>...</Reveal>           // hero content, on mount
 *   <Reveal scale={0.85}>...</Reveal>                         // scale + fade (stats)
 */
export default function Reveal({
  as = "div",
  x = 0,
  y = 0,
  scale,
  duration = 0.7,
  delay = 0,
  amount = VIEWPORT.amount,
  once = VIEWPORT.once,
  immediate = false,
  className,
  style,
  children,
  ...rest
}) {
  const Comp = motion[as] || motion.div;
  const hidden = { opacity: 0, x, y, ...(scale !== undefined ? { scale } : {}) };
  const shown = { opacity: 1, x: 0, y: 0, ...(scale !== undefined ? { scale: 1 } : {}) };
  const transition = { duration, delay, ease: EASE_OUT };

  const triggerProps = immediate
    ? { initial: hidden, animate: shown }
    : {
        initial: hidden,
        whileInView: shown,
        viewport: { once, amount, margin: VIEWPORT.margin },
      };

  return (
    <Comp className={className} style={style} transition={transition} {...triggerProps} {...rest}>
      {children}
    </Comp>
  );
}
