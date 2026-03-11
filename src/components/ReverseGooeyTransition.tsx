import { motion } from "framer-motion";
import { useRef } from "react";

const ReverseGooeyTransition = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section 
      ref={sectionRef}
      className="relative h-[120vh] overflow-hidden"
    >
      {/* Vertical gradient curve - white → red/orange → #141414 (reverse) */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(to bottom, 
                rgba(255, 255, 255, 1) 0%,
                rgba(255, 215, 190, 1) 6%,
                rgba(255, 180, 145, 1) 12%,
                rgba(255, 145, 110, 1) 18%,
                rgba(255, 115, 80, 1) 24%,
                rgba(220, 85, 60, 1) 30%,
                rgba(180, 62, 45, 1) 36%,
                rgba(140, 48, 35, 1) 42%,
                rgba(100, 35, 28, 1) 48%,
                rgba(70, 28, 24, 1) 54%,
                rgba(45, 24, 22, 1) 60%,
                rgba(30, 22, 20, 1) 66%,
                rgba(24, 20, 20, 1) 72%,
                rgba(20, 20, 20, 1) 78%,
                #141414 85%,
                #141414 100%
              )
            `,
          }}
        />
      </div>

      {/* Soft glow overlay for depth in the red/orange zone */}
      <motion.div
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at center, 
              transparent 0%,
              rgba(255, 120, 80, 0.3) 40%,
              transparent 70%
            )
          `,
          filter: 'blur(80px)',
        }}
      />

      {/* Noise texture for organic feel */}
      <div 
        className="absolute inset-0 opacity-10 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </section>
  );
};

export default ReverseGooeyTransition;
