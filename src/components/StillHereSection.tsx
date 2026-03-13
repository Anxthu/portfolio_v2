import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const StillHereSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const yBlob = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const yChair = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen bg-transparent flex flex-col items-center justify-center overflow-hidden py-24 section-padding"
    >
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-12 md:mb-16 z-10"
      >
        <p className="text-white/80 text-xs md:text-sm tracking-[0.02em] font-medium" style={{ fontFamily: 'Geist, sans-serif' }}>
          Still here?
        </p>
      </motion.div>

      <div className="relative w-full max-w-xl mx-auto flex items-center justify-center">

        {/* Soft colorful blurred blob for 3D spotlight effect */}
        <motion.div 
          style={{ y: yBlob }}
          className="absolute inset-0 m-auto w-[30%] lg:w-[35%] aspect-square bg-gradient-to-tr from-white via-indigo-200 to-white opacity-[0.2] md:opacity-[0.25] rounded-full blur-[40px] md:blur-[60px] z-0 transition-transform duration-1000"
        />

        {/* The chair image */}
        <motion.div
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
           style={{ y: yChair }}
           className="relative z-10 w-full px-16 md:px-8 max-w-lg"
        >
          <img 
            src="/chair02.webp" 
            alt="Chair" 
            className="w-full h-auto object-contain"
           loading="lazy" />
        </motion.div>
      </div>

      {/* Text Section Below Chair */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-16 md:mt-24 flex flex-col items-center text-center max-w-2xl px-4 z-10"
      >
        {/* Supercut Text Shimmer Effect (Reading Guide) */}
        <p className="text-sm md:text-[17px] leading-relaxed mb-12 max-w-xl mx-auto font-medium" style={{ fontFamily: 'Geist, sans-serif' }}>
          {"I help founders and startups move quickly and purposefully across product, web and brand design. Whether you're starting from scratch, launching your first minimum viable product or evolving an existing product, I bring the speed, clarity, and craft to help you get ahead without cutting corners.".split(" ").map((word, i, arr) => {
            // Calculate timing for each word to create a continuous sweeping effect
            // We use 75% of the loop for the sweep, and 25% for a pause at the end.
            const p = (i / arr.length) * 0.75;
            const shimmerSpread = 0.08; // Width of the highlight (slightly wider for smoothness)
            
            return (
              <motion.span
                key={i}
                animate={{
                  color: [
                    "rgba(255, 255, 255, 0.3)", // default dark
                    "rgba(255, 255, 255, 0.3)", // hold dark until sweep nears
                    "rgba(255, 255, 255, 1)",   // bright highlight peak
                    "rgba(255, 255, 255, 0.3)", // return to dark
                    "rgba(255, 255, 255, 0.3)"  // hold dark until loop ends
                  ]
                }}
                transition={{
                  duration: 10, // 10-second total loop for a slower, smoother read
                  repeat: Infinity,
                  ease: "easeInOut", // smooth easing
                  times: [
                    0, 
                    Math.max(0, p - shimmerSpread), 
                    p, 
                    Math.min(1, p + shimmerSpread), 
                    1
                  ]
                }}
              >
                {word}{" "}
              </motion.span>
            );
          })}
        </p>
        
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');
            .pixel-text {
              font-family: 'VT323', monospace;
              letter-spacing: 0.1em;
              text-transform: uppercase;
              color: #cccccc;
              text-shadow: 0 1px 3px rgba(0,0,0,0.9);
            }
          `}
        </style>
        <div className="flex flex-col items-center mt-12 pb-12">
          <div className="relative group flex items-center justify-center">
            
            {/* Rainbow Glow Aura */}
            <div className="absolute -inset-6 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-green-500/30 rounded-full blur-[24px] opacity-40 group-hover:opacity-70 transition-opacity duration-700 pointer-events-none"></div>
            <div className="absolute -inset-2 bg-gradient-to-bl from-pink-400/20 via-white/10 to-blue-400/20 rounded-[28px] blur-md opacity-50 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none"></div>
            
            {/* Outer frosted/milky casing */}
            <div className="relative p-[3px] rounded-[24px] bg-gradient-to-b from-white/10 via-white/5 to-white/10 shadow-[0_15px_35px_rgba(0,0,0,0.8),inset_0_1px_2px_rgba(255,255,255,0.3)] backdrop-blur-md">
              
              {/* Dark Button Base (Convex) */}
              <a 
                href="/contact" 
                className="relative block h-16 w-56 sm:w-64 rounded-[21px] bg-gradient-to-b from-[#3a3a3a] to-[#1c1c1c] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),inset_0_-1px_1px_rgba(0,0,0,0.8)] border border-[#000] overflow-hidden transition-transform duration-150 active:scale-[0.97]"
              >
                {/* Recessed Pill Track (Concave) */}
                <div className="absolute inset-x-2 inset-y-2 rounded-full bg-gradient-to-b from-[#0f0f0f] via-[#151515] to-[#252525] shadow-[inset_0_4px_8px_rgba(0,0,0,0.9),_0_1px_0_rgba(255,255,255,0.06)] flex items-center justify-center border-t border-black/80 pointer-events-none">
                  
                  {/* Text */}
                  <div className="pixel-text flex items-center justify-center gap-[6px] text-lg lg:text-xl group-hover:text-white transition-colors duration-300">
                    <span className="text-xl lg:text-2xl leading-none mb-0.5 opacity-60 font-sans font-light">+</span> 
                    <span>Start here</span>
                  </div>

                </div>
              </a>

            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default StillHereSection;
