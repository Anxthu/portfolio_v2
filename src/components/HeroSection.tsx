import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

const heroImages = [
  "/traileffect/Frame 3.webp",
  "/traileffect/Frame 4.webp",
  "/traileffect/Frame 5.webp",
  "/traileffect/Frame 6.webp",
  "/traileffect/Frame 7.webp",
  "/traileffect/Frame 8.webp",
  "/traileffect/Frame 9.webp",
];

// Pre-load images so they appear instantly
heroImages.forEach((src) => {
  const img = new Image();
  img.src = src;
});

const POOL_SIZE = 5;
const SPAWN_DIST = 140;
const IMAGE_W = 220;
const IMAGE_H = 280;

interface TrailElement extends HTMLDivElement {
  _fadeTimer?: number | NodeJS.Timeout;
  _raf?: number;
}

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const poolRef = useRef<HTMLDivElement[]>([]);
  const poolIndex = useRef(0);
  const imageIndex = useRef(0);
  const lastSpawn = useRef({ x: 0, y: 0 });
  const isMobile = useRef(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.6], [1, 0.85]);
  const y = useTransform(scrollYProgress, [0, 0.6], [0, -150]);

  // Detect mobile
  useEffect(() => {
    isMobile.current = window.innerWidth < 768;

    const handleResize = () => {
      isMobile.current = window.innerWidth < 768;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Build a pool of reusable DOM elements (no React re-renders)
  useEffect(() => {
    // Skip trail effect on mobile
    if (isMobile.current) return;

    const container = trailRef.current;
    if (!container) return;

    const els: HTMLDivElement[] = [];
    for (let i = 0; i < POOL_SIZE; i++) {
      const wrapper = document.createElement("div");
      wrapper.className = "trail-image";
      wrapper.style.cssText = `
        position: absolute;
        width: ${IMAGE_W}px;
        height: ${IMAGE_H}px;
        overflow: hidden;
        pointer-events: none;
        opacity: 0;
        transform: scale(0.4) rotate(0deg);
        will-change: transform, opacity;
        transition: opacity 0.45s cubic-bezier(0.16, 1, 0.3, 1),
                    transform 0.45s cubic-bezier(0.16, 1, 0.3, 1);
        z-index: 1;
      `;
      const img = document.createElement("img");
      img.style.cssText = "width:100%;height:100%;object-fit:cover;";
      img.alt = "";
      img.draggable = false;
      wrapper.appendChild(img);
      container.appendChild(wrapper);
      els.push(wrapper);
    }
    poolRef.current = els;

    return () => {
      els.forEach((el) => el.remove());
    };
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    // Skip trail effect on mobile
    if (isMobile.current) return;

    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const yPos = e.clientY - rect.top;

    const dx = x - lastSpawn.current.x;
    const dy = yPos - lastSpawn.current.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < SPAWN_DIST) return;

    lastSpawn.current = { x, y: yPos };

    const el = poolRef.current[poolIndex.current % POOL_SIZE];
    poolIndex.current++;

    const src = heroImages[imageIndex.current % heroImages.length];
    imageIndex.current++;

    // Clear any pending fade timer
    const trailEl = el as TrailElement;
    if (trailEl._fadeTimer) clearTimeout(trailEl._fadeTimer);
    if (trailEl._raf) cancelAnimationFrame(trailEl._raf);

    // Reset instantly
    el.style.transition = "none";
    el.style.opacity = "0";
    el.style.transform = `translate3d(${x - IMAGE_W / 2}px, ${yPos - IMAGE_H / 2}px, 0) scale(0.7)`;
    (el.firstChild as HTMLImageElement).src = src;

    // Use double-rAF for guaranteed reflow before animating
    trailEl._raf = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        el.style.transition = `
          opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1),
          transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)
        `;
        el.style.opacity = "0.92";
        el.style.transform = `translate3d(${x - IMAGE_W / 2}px, ${yPos - IMAGE_H / 2}px, 0) scale(1)`;

        // Fade out
        trailEl._fadeTimer = setTimeout(() => {
          el.style.transition = `
            opacity 1.6s cubic-bezier(0.25, 0.1, 0.25, 1),
            transform 1.6s cubic-bezier(0.25, 0.1, 0.25, 1)
          `;
          el.style.opacity = "0";
          el.style.transform = `translate3d(${x - IMAGE_W / 2}px, ${yPos - IMAGE_H / 2 + 8}px, 0) scale(0.92)`;
        }, 800);
      });
    });
  }, []);

  return (
    <section
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Trail container — pure DOM, no React re-renders */}
      <div ref={trailRef} className="absolute inset-0 z-20" />

      <motion.div
        style={{ opacity, scale, y }}
        className="text-center relative z-10"
      >
        <div className="pb-4 flex justify-center overflow-hidden">
          {"ANANTHU".split("").map((letter, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 1.6,
                delay: 0.2 + i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-[clamp(3rem,10vw,8rem)] font-heading font-[800] leading-[0.95] tracking-tight text-foreground inline-block"
            >
              {letter}
            </motion.span>
          ))}
        </div>
        <div className="flex justify-center gap-1.5 overflow-hidden flex-wrap w-full max-w-lg mx-auto">
          {"UI/UX DESIGNER FROM BANGALORE".split(" ").map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 1.6,
                delay: 0.8 + i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-6 text-xs uppercase tracking-[0.25em] text-muted-foreground inline-block"
            >
              {word}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
