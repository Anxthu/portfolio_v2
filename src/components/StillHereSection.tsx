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

        {/* Soft colorful blurred blob for 3D effect */}
        <motion.div 
          style={{ y: yBlob }}
          className="absolute inset-0 m-auto w-[60%] lg:w-[70%] aspect-square bg-gradient-to-tr from-indigo-500 via-purple-500 to-blue-500 opacity-[0.5] md:opacity-[0.6] rounded-full blur-[50px] md:blur-[70px] scale-[0.55] md:scale-[0.65] z-0 transition-transform duration-1000"
        />

        {/* The chair image */}
        <motion.div
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
           style={{ y: yChair }}
           className="relative z-10 w-full px-12 md:px-0"
        >
          <img 
            src="/chair02.png" 
            alt="Chair" 
            className="w-full h-auto object-contain xl:scale-110"
          />
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
        <h3 className="text-white font-semibold text-sm md:text-base mb-6" style={{ fontFamily: 'Geist, sans-serif' }}>
          I saved you a seat 👀
        </h3>
        
        <p className="text-white/80 text-sm md:text-base leading-relaxed mb-12 max-w-xl mx-auto" style={{ fontFamily: 'Geist, sans-serif' }}>
          I help founders and startups move quickly and purposefully across product, web and brand design. Whether you're starting from scratch, launching your first minimum viable product or evolving an existing product, I bring the speed, clarity, and craft to help you get ahead without cutting corners.
        </p>
        
        <div className="flex flex-col items-center gap-5 w-full max-w-sm mt-4">
          <div className="flex items-center group w-full">
            {/* Decorative piece */}
            <div className="w-4 h-14 bg-transparent border-t-2 border-b-2 border-l-2 border-white/30 transition-colors group-hover:border-white/50" />
            
            {/* Action button */}
            <a 
              href="/contact" 
              className="h-14 w-full bg-white text-black text-sm md:text-base font-semibold uppercase tracking-wider flex items-center justify-center gap-3 hover:bg-gray-200 transition-colors"
              style={{ fontFamily: 'Geist, sans-serif' }}
            >
              Start here
              <svg width="14" height="14" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                <path d="M1 11L11 1M11 1H1M11 1V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default StillHereSection;
