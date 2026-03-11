import { motion } from "framer-motion";
import { useRef } from "react";

const GooeyTransition = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section 
      ref={sectionRef}
      className="relative h-[120vh] overflow-hidden"
    >
      {/* Vertical gradient curve - #161415 → red/orange → white */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(to bottom, 
                #161415 0%,
                #161415 15%,
                rgba(22, 20, 21, 1) 22%,
                rgba(24, 20, 20, 1) 28%,
                rgba(30, 22, 20, 1) 34%,
                rgba(45, 24, 22, 1) 40%,
                rgba(70, 28, 24, 1) 46%,
                rgba(100, 35, 28, 1) 52%,
                rgba(140, 48, 35, 1) 58%,
                rgba(180, 62, 45, 1) 64%,
                rgba(220, 85, 60, 1) 70%,
                rgba(255, 115, 80, 1) 76%,
                rgba(255, 145, 110, 1) 82%,
                rgba(255, 180, 145, 1) 88%,
                rgba(255, 215, 190, 1) 94%,
                rgba(255, 255, 255, 1) 100%
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

export default GooeyTransition;
