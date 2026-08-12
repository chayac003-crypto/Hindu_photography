import { useEffect, useRef } from "react";

/**
 * Full-page canvas of slow-drifting golden/amber dust motes.
 * Mimics the "temple lamps + incense" atmosphere described in the brief.
 * Kept subtle — atmosphere, not a particle demo.
 */
export default function ParticleField({ density = 48 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const ctx = canvas.getContext("2d");
    let width  = (canvas.width  = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Each particle is a tiny glowing mote
    const particles = Array.from(
      { length: prefersReduced ? 0 : density },
      () => ({
        x:       Math.random() * width,
        y:       Math.random() * height,
        r:       Math.random() * 1.8 + 0.3,
        speed:   Math.random() * 0.22 + 0.03,
        drift:   (Math.random() - 0.5) * 0.18,
        // Mix gold and warm-brick hues
        hue:     Math.random() > 0.45 ? "201,162,39" : Math.random() > 0.5 ? "191,91,52" : "220,150,50",
        alpha:   Math.random() * 0.32 + 0.06,
        flicker: Math.random() * Math.PI * 2,
        flickerSpeed: Math.random() * 0.012 + 0.006,
      })
    );

    let raf;
    const render = () => {
      ctx.clearRect(0, 0, width, height);
      for (const p of particles) {
        // Drift upward + sideways
        p.y -= p.speed;
        p.x += p.drift;
        p.flicker += p.flickerSpeed;

        // Wrap at top
        if (p.y < -6) {
          p.y = height + 6;
          p.x = Math.random() * width;
        }
        // Wrap at edges
        if (p.x < -6)        p.x = width + 6;
        if (p.x > width + 6) p.x = -6;

        // Flicker alpha
        const a = p.alpha * (0.55 + 0.45 * Math.sin(p.flicker));

        // Draw a soft radial glow
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 3);
        grad.addColorStop(0,   `rgba(${p.hue},${a})`);
        grad.addColorStop(0.5, `rgba(${p.hue},${a * 0.4})`);
        grad.addColorStop(1,   `rgba(${p.hue},0)`);

        ctx.beginPath();
        ctx.fillStyle = grad;
        ctx.arc(p.x, p.y, p.r * 3, 0, Math.PI * 2);
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

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[2] mix-blend-screen opacity-60"
    />
  );
}
