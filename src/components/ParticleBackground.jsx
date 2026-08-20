import { useEffect, useRef } from "react";

const DARK_FIREFLY = [
  [255, 215, 60],
  [200, 255, 100],
  [255, 235, 100],
  [180, 255, 140],
  [255, 200, 40],
];
const DARK_AMBIENT = [
  [180, 220, 180],
  [160, 210, 200],
  [200, 230, 210],
];
const LIGHT_WISP = [
  [140, 170, 150],
  [160, 140, 100],
  [120, 155, 140],
  [170, 155, 110],
  [130, 160, 155],
  [155, 130, 90],
];

function makeDarkParticle(w, h) {
  const orbital = Math.random() < 0.28;
  const isFirefly = Math.random() < 0.65;
  const color = isFirefly
    ? DARK_FIREFLY[Math.floor(Math.random() * DARK_FIREFLY.length)]
    : DARK_AMBIENT[Math.floor(Math.random() * DARK_AMBIENT.length)];

  const shared = {
    color,
    size: Math.floor(Math.random() * 2) + 2,
    glowing: isFirefly,
    glowSize: isFirefly ? Math.random() * 10 + 6 : 2,
    opacityBase: Math.random() * 0.35 + 0.5,
    opacityPhase: Math.random() * Math.PI * 2,
    opacitySpeed: Math.random() * 0.025 + 0.008,
    opacityAmp: isFirefly ? 0.32 : 0.08,
  };

  if (orbital) {
    return {
      ...shared,
      type: "orbit",
      centerX: Math.random() * w,
      centerY: Math.random() * h,
      angle: Math.random() * Math.PI * 2,
      angleSpeed: (Math.random() * 0.018 + 0.005) * (Math.random() < 0.5 ? 1 : -1),
      radius: Math.random() * 28 + 12,
      driftX: (Math.random() - 0.5) * 0.08,
      driftY: -(Math.random() * 0.1 + 0.03),
      x: 0,
      y: 0,
    };
  }

  return {
    ...shared,
    type: "float",
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - 0.5) * 0.18,
    vy: -(Math.random() * 0.32 + 0.08),
    phase: Math.random() * Math.PI * 2,
    phaseSpeed: Math.random() * 0.01 + 0.003,
    drift: Math.random() * 0.22 + 0.06,
  };
}

function makeLightParticle(w, h) {
  const color = LIGHT_WISP[Math.floor(Math.random() * LIGHT_WISP.length)];
  return {
    type: "float",
    color,
    size: Math.floor(Math.random() * 3) + 2,
    glowing: false,
    glowSize: 0,
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - 0.5) * 0.3,
    vy: -(Math.random() * 0.1 + 0.02),
    phase: Math.random() * Math.PI * 2,
    phaseSpeed: Math.random() * 0.006 + 0.002,
    drift: Math.random() * 0.18 + 0.04,
    opacityBase: Math.random() * 0.3 + 0.35,
    opacityPhase: Math.random() * Math.PI * 2,
    opacitySpeed: Math.random() * 0.008 + 0.003,
    opacityAmp: 0.15,
  };
}

export const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let rafId;
    let particles = [];

    const isDark = () => document.documentElement.classList.contains("dark");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const build = () => {
      const dark = isDark();
      const count = dark ? 65 : 50;
      particles = Array.from({ length: count }, () =>
        dark
          ? makeDarkParticle(canvas.width, canvas.height)
          : makeLightParticle(canvas.width, canvas.height)
      );
    };

    let lastTime = performance.now();

    const tick = (now) => {
      const dt = Math.min(now - lastTime, 100);
      lastTime = now;
      const t = dt / (1000 / 60);

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of particles) {
        p.opacityPhase += p.opacitySpeed * t;
        const opacity = Math.min(
          Math.max(p.opacityBase + Math.sin(p.opacityPhase) * p.opacityAmp, 0),
          1
        );
        const [r, g, b] = p.color;

        if (p.glowing) {
          ctx.shadowBlur = p.glowSize;
          ctx.shadowColor = `rgba(${r},${g},${b},${opacity})`;
        }

        ctx.fillStyle = `rgba(${r},${g},${b},${opacity})`;

        if (p.type === "orbit") {
          p.angle += p.angleSpeed * t;
          p.centerX += p.driftX * t;
          p.centerY += p.driftY * t;
          p.x = p.centerX + Math.cos(p.angle) * p.radius;
          p.y = p.centerY + Math.sin(p.angle) * p.radius;

          if (p.centerY < -60) {
            p.centerY = canvas.height + 60;
            p.centerX = Math.random() * canvas.width;
          }
          if (p.centerX < -60) p.centerX = canvas.width + 60;
          else if (p.centerX > canvas.width + 60) p.centerX = -60;
        } else {
          p.phase += p.phaseSpeed * t;
          p.x += (p.vx + Math.sin(p.phase) * p.drift) * t;
          p.y += p.vy * t;

          if (p.y < -8) {
            p.y = canvas.height + 8;
            p.x = Math.random() * canvas.width;
          }
          if (p.x < -8) p.x = canvas.width + 8;
          else if (p.x > canvas.width + 8) p.x = -8;
        }

        ctx.fillRect(p.x, p.y, p.size, p.size);
        ctx.shadowBlur = 0;
      }

      rafId = requestAnimationFrame(tick);
    };

    resize();
    build();
    rafId = requestAnimationFrame(tick);

    window.addEventListener("resize", resize);

    const observer = new MutationObserver(() => build());
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-0 pointer-events-none"
    />
  );
};
