import { useEffect, useMemo, useRef } from "react";

const FIREFLY_COUNT = 28;

type FireflySeed = {
  size: number;
  glowDelay: number;
  drift: number;
  twinkleSpeed: number;
};

type Firefly = FireflySeed & {
  x: number;
  y: number;
  vx: number;
  vy: number;
};

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export default function FirefliesBackground() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const elementsRef = useRef<(HTMLSpanElement | null)[]>([]);

  const seeds = useMemo<FireflySeed[]>(
    () =>
      Array.from({ length: FIREFLY_COUNT }, () => ({
        size: 2 + Math.random() * 3,
        glowDelay: Math.random() * 4,
        drift: 0.4 + Math.random(),
        twinkleSpeed: 0.0006 + Math.random() * 0.001,
      })),
    []
  );

  const swarmRef = useRef<Firefly[]>([]);

  if (swarmRef.current.length === 0) {
    swarmRef.current = seeds.map((seed) => ({
      ...seed,
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.00015,
      vy: (Math.random() - 0.5) * 0.00015,
    }));
  }

  useEffect(() => {
    let frameId: number;
    let lastTime = performance.now();

    const animate = () => {
      const now = performance.now();
      const delta = Math.min(32, now - lastTime);
      lastTime = now;

      swarmRef.current.forEach((firefly, index) => {
        firefly.vx += (Math.random() - 0.5) * 0.000004 * delta;
        firefly.vy += (Math.random() - 0.5) * 0.000004 * delta;

        const maxSpeed = 0.00012 * firefly.drift;
        firefly.vx = clamp(firefly.vx, -maxSpeed, maxSpeed);
        firefly.vy = clamp(firefly.vy, -maxSpeed, maxSpeed);

        firefly.x += firefly.vx * delta;
        firefly.y += firefly.vy * delta;

        if (firefly.x < -0.1) firefly.x = 1.1;
        if (firefly.x > 1.1) firefly.x = -0.1;
        if (firefly.y < -0.1) firefly.y = 1.1;
        if (firefly.y > 1.1) firefly.y = -0.1;

        const element = elementsRef.current[index];
        if (element) {
          const x = firefly.x * window.innerWidth;
          const y = firefly.y * window.innerHeight;
          const twinkle =
            0.35 +
            0.55 *
              (0.5 +
                Math.sin(
                  (now + firefly.glowDelay * 1000) * firefly.twinkleSpeed
                ) /
                  2);
          element.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${
            0.8 + firefly.size / 4
          })`;
          element.style.opacity = twinkle.toString();
        }
      });

      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [seeds]);

  useEffect(() => {
    const handleScroll = () => {
      if (!rootRef.current) return;
      const shift = Math.max(Math.min(window.scrollY * -0.04, 160), -160);
      rootRef.current.style.transform = `translate3d(0, ${shift}px, 0)`;
    };

    let rafId: number | null = null;
    const onScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        handleScroll();
        rafId = null;
      });
    };

    handleScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div ref={rootRef} className="pointer-events-none fixed inset-0 z-30 overflow-hidden">
      <div
        className="absolute inset-0 opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 30% 20%, rgba(255, 149, 66, 0.15), transparent 55%), radial-gradient(circle at 70% 60%, rgba(110, 83, 217, 0.12), transparent 45%)",
        }}
      />
      {seeds.map((seed, index) => (
        <span
          key={index}
          ref={(element) => {
            elementsRef.current[index] = element;
          }}
          className="firefly absolute mix-blend-screen rounded-[2px]"
          style={{
            width: `${seed.size}px`,
            height: `${seed.size}px`,
            background:
              "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary) / 0.6) 65%, hsl(var(--primary) / 0) 100%)",
            boxShadow: "0 0 8px hsl(var(--primary) / 0.55), 0 0 16px hsl(var(--primary) / 0.3)",
          }}
        />
      ))}
    </div>
  );
}
