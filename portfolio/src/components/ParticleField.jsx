import { useEffect, useRef } from "react";

/**
 * Full-page canvas of slow-drifting golden/amber dust motes.
 * Mimics the "temple lamps + incense" atmosphere described in the brief.
 * Kept subtle — atmosphere, not a particle demo.
 */
export default function ParticleField({ density = 48 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Disable particle canvas completely on mobile touch screens for maximum speed & battery life
    const isMobile = window.innerWidth < 768 || (navigator.maxTouchPoints && navigator.maxTouchPoints > 0);
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isMobile || prefersReduced) return undefined;

    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const ctx = canvas.getContext("2d");
    let width  = (canvas.width  = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Desktop subtle glowing motes
    const particles = Array.from(
      { length: density },
      () => ({
        x:       Math.random() * width,
        y:       Math.random() * height,
        r:       Math.random() * 1.5 + 0.5,
        speed:   Math.random() * 0.18 + 0.03,
        drift:   (Math.random() - 0.5) * 0.15,
        hue:     Math.random() > 0.45 ? "201,162,39" : Math.random() > 0.5 ? "191,91,52" : "220,150,50",
        alpha:   Math.random() * 0.3 + 0.05,
        flicker: Math.random() * Math.PI * 2,
        flickerSpeed: Math.random() * 0.012 + 0.006,
      })
    );

    let raf;
    const render = () => {
      ctx.clearRect(0, 0, width, height);
      for (const p of particles) {
        p.y -= p.speed;
        p.x += p.drift;
        p.flicker += p.flickerSpeed;

        if (p.y < -6) {
          p.y = height + 6;
          p.x = Math.random() * width;
        }
        if (p.x < -6)        p.x = width + 6;
        if (p.x > width + 6) p.x = -6;

        const a = p.alpha * (0.55 + 0.45 * Math.sin(p.flicker));

        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 2.5);
        grad.addColorStop(0,   `rgba(${p.hue},${a})`);
        grad.addColorStop(0.5, `rgba(${p.hue},${a * 0.3})`);
        grad.addColorStop(1,   `rgba(${p.hue},0)`);

        ctx.beginPath();
        ctx.fillStyle = grad;
        ctx.arc(p.x, p.y, p.r * 2.5, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(render);
    };
    render();

    const onResize = () => {
      width  = canvas.width  = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, [density]);

  // Don't render canvas DOM node on mobile
  if (typeof window !== "undefined" && (window.innerWidth < 768 || (navigator.maxTouchPoints && navigator.maxTouchPoints > 0))) {
    return null;
  }

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[2] mix-blend-screen opacity-50 hidden md:block"
    />
  );
}
