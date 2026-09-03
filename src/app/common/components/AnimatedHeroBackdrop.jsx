"use client";

import { useEffect, useRef } from "react";

// A tech-flavored shape set: circles, dashed-ring circles, diamonds,
// triangles, hexagons (matches the outlined hexagons already used in the
// header), and a small isometric-cube wireframe — flat, crisp colors, no
// blurred gradients.
const TYPES = ["circle", "ring", "diamond", "triangle", "hexagon", "hexagon", "cube"];

// One color per shape, picked from a small curated palette so the backdrop
// reads as a handful of distinct accents (red / gold / pink) instead of a
// single monochrome haze.
const BRAND_RGB = [
  "226, 33, 16",   // brand red
  "245, 158, 11",  // warm gold
  "236, 72, 153",  // rose pink
];

const LIGHT_RGB = [
  "255, 255, 255", // white
  "255, 214, 140", // soft gold, for a little variety on dark/red backgrounds
];

function polygonPoints(sides, radius, rotation = 0) {
  const pts = [];
  for (let i = 0; i < sides; i += 1) {
    const angle = rotation + (Math.PI * 2 * i) / sides;
    pts.push([radius * Math.cos(angle), radius * Math.sin(angle)]);
  }
  return pts;
}

function tracePolygon(ctx, pts) {
  ctx.beginPath();
  ctx.moveTo(pts[0][0], pts[0][1]);
  for (let i = 1; i < pts.length; i += 1) {
    ctx.lineTo(pts[i][0], pts[i][1]);
  }
  ctx.closePath();
}

function createShape(width, height, tone, densityAlpha = 1) {
  const type = TYPES[Math.floor(Math.random() * TYPES.length)];
  const palette = tone === "light" ? LIGHT_RGB : BRAND_RGB;

  // Spawn directly inside the visible area and let the fade-in (below)
  // handle the "arriving" look. Spawning off-screen at the edges and
  // relying on drift speed to bring it into view meant a respawned shape
  // could take a very long time — sometimes over a minute — to become
  // visible again, which read as the backdrop "hiding" for ages.
  const x = Math.random() * width;
  const y = Math.random() * height;

  const size = 28 + Math.random() * 84;
  const speed = 0.1 + Math.random() * 0.26;
  const angle = Math.random() * Math.PI * 2;

  return {
    type,
    x,
    y,
    vx: Math.cos(angle) * speed * (Math.random() < 0.5 ? 1 : -1) * 0.5 + (width / 2 - x) * 0.0003,
    vy: Math.sin(angle) * speed * (Math.random() < 0.5 ? 1 : -1) * 0.5 + (height / 2 - y) * 0.0003,
    rot: Math.random() * Math.PI * 2,
    rotSpd: (Math.random() - 0.5) * 0.006,
    size,
    rgb: palette[Math.floor(Math.random() * palette.length)],
    dashed: Math.random() < 0.55,
    filled: Math.random() < 0.5,
    alpha: (0.55 + Math.random() * 0.25) * densityAlpha,
    life: 0,
    maxLife: 420 + Math.random() * 320,
  };
}

function drawShape(ctx, shape) {
  const fade =
    shape.life < 40
      ? shape.life / 40
      : shape.life > shape.maxLife - 40
        ? (shape.maxLife - shape.life) / 40
        : 1;

  const alpha = Math.min(shape.alpha * fade, 0.85);
  if (alpha <= 0.02) {
    return;
  }

  const size = shape.size;
  const lineWidth = Math.max(1.3, size * 0.045);
  const color = shape.rgb;

  ctx.save();
  ctx.translate(shape.x, shape.y);
  ctx.rotate(shape.rot);

  if (shape.dashed) {
    ctx.setLineDash([size * 0.09, size * 0.075]);
  }

  if (shape.type === "circle") {
    ctx.beginPath();
    ctx.arc(0, 0, size * 0.5, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${color}, ${Math.min(alpha, 0.7)})`;
    ctx.fill();
  } else if (shape.type === "ring") {
    ctx.beginPath();
    ctx.arc(0, 0, size * 0.5, 0, Math.PI * 2);
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = `rgba(${color}, ${alpha})`;
    ctx.stroke();
  } else if (shape.type === "diamond" || shape.type === "triangle" || shape.type === "hexagon") {
    const sides = shape.type === "diamond" ? 4 : shape.type === "triangle" ? 3 : 6;
    const pts = polygonPoints(sides, size * 0.5, -Math.PI / 2);
    tracePolygon(ctx, pts);
    if (shape.filled) {
      ctx.fillStyle = `rgba(${color}, ${Math.min(alpha, 0.7)})`;
      ctx.fill();
    } else {
      ctx.lineWidth = lineWidth;
      ctx.strokeStyle = `rgba(${color}, ${alpha})`;
      ctx.stroke();
    }
  } else if (shape.type === "cube") {
    // Isometric-cube wireframe: hexagon silhouette + 3 spokes to alternating
    // vertices, forming the classic 3-visible-faces cube icon.
    const pts = polygonPoints(6, size * 0.5, -Math.PI / 2);
    ctx.lineWidth = Math.max(1.1, size * 0.032);
    ctx.strokeStyle = `rgba(${color}, ${alpha})`;
    tracePolygon(ctx, pts);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(pts[0][0], pts[0][1]);
    ctx.moveTo(0, 0);
    ctx.lineTo(pts[2][0], pts[2][1]);
    ctx.moveTo(0, 0);
    ctx.lineTo(pts[4][0], pts[4][1]);
    ctx.stroke();
  }

  ctx.restore();
}

// density: scales shape count + opacity down from the default full
// look — pass a value < 1 only for callers that specifically need a
// lighter backdrop (e.g. a hero sitting right behind body text).
// Leaving it unset keeps every other usage (section/CTA decor) exactly
// as it already was.
export default function AnimatedHeroBackdrop({ className, tone = "brand", density = 1 }) {
  const canvasRef = useRef(null);
  const toneRef = useRef(tone);
  toneRef.current = tone;
  const densityRef = useRef(density);
  densityRef.current = density;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return undefined;
    }

    const context = canvas.getContext("2d");
    if (!context) {
      return undefined;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const shapes = [];
    let width = 0;
    let height = 0;
    let frameId = 0;

    const resize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width;
      canvas.height = height;

      if (shapes.length === 0) {
        // The old max of 16 meant a normal-height (~500px) section and an
        // unusually tall one (e.g. Contact's single long form section,
        // ~1400px+) both topped out at the same shape count — spread over
        // far more area, the tall section's shapes end up sparse and
        // unevenly clustered instead of an even, comparable density.
        // Raising the cap lets count keep scaling with actual area while
        // the min (9) still protects small sections from looking empty.
        const baseCount = Math.max(9, Math.min(28, Math.round((width * height) / 85000)));
        const count = Math.max(4, Math.round(baseCount * densityRef.current));
        for (let i = 0; i < count; i += 1) {
          const shape = createShape(width, height, toneRef.current, densityRef.current);
          shape.x = Math.random() * width;
          shape.y = Math.random() * height;
          shape.life = Math.random() * shape.maxLife;
          shapes.push(shape);
        }
      }
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);

      for (const shape of shapes) {
        shape.x += shape.vx;
        shape.y += shape.vy;
        shape.rot += shape.rotSpd;
        shape.life += 1;

        if (shape.life > shape.maxLife) {
          Object.assign(shape, createShape(width, height, toneRef.current, densityRef.current));
        }

        drawShape(context, shape);
      }

      if (!prefersReducedMotion) {
        frameId = window.requestAnimationFrame(draw);
      }
    };

    resize();
    draw();
    if (!prefersReducedMotion) {
      window.addEventListener("resize", resize);
    }

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
