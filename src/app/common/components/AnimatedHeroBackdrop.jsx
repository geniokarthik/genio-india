"use client";

import { useEffect, useRef } from "react";

const TYPES = ["circle", "rect", "triangle", "pill", "square", "rect", "circle", "pill"];

function createShape(width, height) {
  const type = TYPES[Math.floor(Math.random() * TYPES.length)];
  const edge = Math.floor(Math.random() * 4);
  let x;
  let y;

  if (edge === 0) {
    x = Math.random() * width;
    y = -120;
  } else if (edge === 1) {
    x = width + 120;
    y = Math.random() * height;
  } else if (edge === 2) {
    x = Math.random() * width;
    y = height + 120;
  } else {
    x = -120;
    y = Math.random() * height;
  }

  const size = 40 + Math.random() * 120;
  const speed = 0.25 + Math.random() * 0.7;
  const angle = Math.random() * Math.PI * 2;

  return {
    type,
    x,
    y,
    vx: Math.cos(angle) * speed * (Math.random() < 0.5 ? 1 : -1) * 0.6 + (width / 2 - x) * 0.0004,
    vy: Math.sin(angle) * speed * (Math.random() < 0.5 ? 1 : -1) * 0.6 + (height / 2 - y) * 0.0004,
    rot: Math.random() * Math.PI * 2,
    rotSpd: (Math.random() - 0.5) * 0.008,
    size,
    alpha: 0.18 + Math.random() * 0.22,
    life: 0,
    maxLife: 320 + Math.random() * 280,
  };
}

function drawShape(ctx, shape) {
  const fade =
    shape.life < 30
      ? shape.life / 30
      : shape.life > shape.maxLife - 30
        ? (shape.maxLife - shape.life) / 30
        : 1;

  const alpha = shape.alpha * fade;
  if (alpha <= 0.01) {
    return;
  }

  const size = shape.size;
  const gradient = ctx.createLinearGradient(-size, -size, size, size);
  gradient.addColorStop(0, `rgba(255, 60, 40, ${Math.min(alpha + 0.1, 0.45)})`);
  gradient.addColorStop(0.5, `rgba(224, 35, 17, ${alpha})`);
  gradient.addColorStop(1, `rgba(160, 10, 5, ${Math.max(alpha - 0.08, 0.04)})`);

  ctx.save();
  ctx.translate(shape.x, shape.y);
  ctx.rotate(shape.rot);
  ctx.fillStyle = gradient;

  if (shape.type === "circle") {
    ctx.beginPath();
    ctx.arc(0, 0, size * 0.5, 0, Math.PI * 2);
    ctx.fill();
  } else if (shape.type === "rect") {
    const w = size * 0.28;
    const h = size * 1.1;
    ctx.beginPath();
    ctx.roundRect(-w / 2, -h / 2, w, h, 6);
    ctx.fill();
  } else if (shape.type === "square") {
    const w = size * 0.65;
    ctx.beginPath();
    ctx.roundRect(-w / 2, -w / 2, w, w, 8);
    ctx.fill();
  } else if (shape.type === "triangle") {
    const r = size * 0.55;
    ctx.beginPath();
    ctx.moveTo(0, -r);
    ctx.lineTo(r * 0.866, r * 0.5);
    ctx.lineTo(-r * 0.866, r * 0.5);
    ctx.closePath();
    ctx.fill();
  } else if (shape.type === "pill") {
    const w = size * 0.22;
    const h = size * 0.85;
    ctx.beginPath();
    ctx.roundRect(-w / 2, -h / 2, w, h, w / 2);
    ctx.fill();
  }

  ctx.restore();
}

export default function AnimatedHeroBackdrop({ className }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return undefined;
    }

    const context = canvas.getContext("2d");
    if (!context) {
      return undefined;
    }

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
        for (let i = 0; i < 18; i += 1) {
          const shape = createShape(width, height);
          shape.x = Math.random() * width;
          shape.y = Math.random() * height;
          shape.life = Math.random() * shape.maxLife;
          shapes.push(shape);
        }
      }
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);

      context.fillStyle = "#ffffff";
      context.fillRect(0, 0, width, height);

      const warmGlow = context.createRadialGradient(
        width * 0.78,
        height * 0.18,
        0,
        width * 0.78,
        height * 0.18,
        width * 0.68,
      );
      warmGlow.addColorStop(0, "rgba(255,230,225,0.38)");
      warmGlow.addColorStop(1, "rgba(255,255,255,0)");
      context.fillStyle = warmGlow;
      context.fillRect(0, 0, width, height);

      for (const shape of shapes) {
        shape.x += shape.vx;
        shape.y += shape.vy;
        shape.rot += shape.rotSpd;
        shape.life += 1;

        if (shape.life > shape.maxLife) {
          Object.assign(shape, createShape(width, height));
        }

        drawShape(context, shape);
      }

      frameId = window.requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
