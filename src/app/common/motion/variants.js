// Shared framer-motion building blocks.
//
// Every page (en + ja, every section) should animate in from these same
// variants/timings instead of redefining its own opacity/y objects — that
// duplication is what made scroll-reveal timing drift from page to page.
// Import from here, or use the <Reveal> / <RevealGroup> wrapper components
// in src/app/common/components, which are built on top of these.

export const EASE_OUT = [0.16, 1, 0.3, 1];

// Default viewport threshold for whileInView reveals. `margin` fires the
// animation a little before the element is fully on-screen so content never
// sits at opacity:0 waiting for a scroll position that a short section
// never reaches.
export const VIEWPORT = { once: true, amount: 0.12, margin: "0px 0px -10% 0px" };

export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE_OUT } },
};

export const fadeUpSm = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE_OUT } },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.7, ease: EASE_OUT } },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.82 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: EASE_OUT } },
};

export const slideInLeft = {
  hidden: { opacity: 0, x: -28 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: EASE_OUT } },
};

export const slideInRight = {
  hidden: { opacity: 0, x: 28 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: EASE_OUT } },
};

// Parent wrapper: stagger the reveal of its motion children.
export const stagger = (staggerChildren = 0.1, delayChildren = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren, delayChildren } },
});

// A rotating set of entrance offsets for card grids, so sibling cards in the
// same row don't all fade in identically — pass the card's index and spread
// the result into <Reveal {...cardEntrance(i)} /> (or into a manual variants
// object) to cycle through rise / slide-left / slide-right / drop / zoom.
const CARD_ENTRANCES = [
  { y: 30 },
  { x: -32 },
  { y: 30, scale: 0.88 },
  { x: 32 },
  { y: -26 },
  { scale: 0.85 },
];

export function cardEntrance(i = 0) {
  return CARD_ENTRANCES[i % CARD_ENTRANCES.length];
}
