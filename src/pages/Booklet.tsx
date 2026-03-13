import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import PageTransition from "@/components/PageTransition";

const Booklet = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-white text-black relative" style={{ fontFamily: 'Geist, sans-serif' }}>
        
        {/* Navigation Bar / Header */}
        <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-6 md:p-10 mix-blend-difference pointer-events-none">
          {/* Global Back Button handles navigation */}
        </div>

        {/* Floating Download Button */}
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
          <button className="bg-white text-black border border-gray-200 px-6 py-2.5 rounded-lg text-xs font-medium shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_6px_25px_rgba(0,0,0,0.2)] hover:bg-gray-50 transition-all flex items-center justify-center">
            Download this book
          </button>
        </div>

        {/* Content Area */}
        <div className="w-full flex flex-col">
          
          {/* Section 1: Intro Text */}
          <div className="w-full min-h-[60vh] md:min-h-[80vh] flex flex-col justify-between p-6 md:p-12 lg:p-20 relative">
            <div className="max-w-[1400px] mt-24">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-[#E52E2D] font-bold text-4xl md:text-6xl lg:text-[85px] leading-[0.95] tracking-tight"
              >
                Renders, interface, and designs from my work as a creative designer based in India. Currently a 3rd year B.Tech student.
              </motion.h1>
            </div>
            <div className="w-full flex justify-end mt-20 pb-16 md:pb-10">
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-[#E52E2D] font-bold text-xs md:text-sm tracking-tight"
              >
                v1 — More works will be added as they get produced. © 2026
              </motion.p>
            </div>
          </div>

          {/* Section 2: Split Image Row */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 w-full h-[60vh] md:h-screen"
          >
            <div className="w-full h-full bg-black relative flex items-center justify-center p-12">
               <img 
                 src="/Projects Mockups/Inari/Desktop - 4_opt.webp" 
                 alt="Inari Desktop Design"
                 className="w-full h-full object-contain"
                loading="lazy" />
            </div>
            <div className="w-full h-full bg-[#f0f0f0] relative flex items-center justify-center p-12">
               <img 
                 src="/Projects Mockups/Linear Home/Linear Home Landing Page02_opt.webp" 
                 alt="Linear Home Landing Page"
                 className="w-full h-full object-contain"
                loading="lazy" />
            </div>
          </motion.div>

          {/* Section 3: Split Image Row */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 w-full h-[60vh] md:h-screen"
          >
             <div className="w-full h-full bg-white relative flex items-center justify-center p-12">
               <img 
                 src="/Projects Mockups/vayka/vayka smartwatch_opt.webp" 
                 alt="Vayka Smartwatch Design"
                 className="w-full h-full object-contain"
                loading="lazy" />
            </div>
            <div className="w-full h-full bg-[#0E2721] relative flex items-center justify-center p-12">
               <img 
                 src="/Projects Mockups/Pitbull/pitbullcase02_opt.webp" 
                 alt="Pitbull Brand Campaign"
                 className="w-full h-full object-contain"
                loading="lazy" />
            </div>
          </motion.div>

          {/* Section 4: Full width image */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full h-[60vh] md:h-[120vh] bg-[#f8f8f8] relative flex items-center justify-center p-8 md:p-16"
          >
              <img 
                src="/Projects Mockups/Linear Home/Linear Home Landing Page_opt.webp" 
                alt="Linear Home Full Width Design"
                className="w-full h-full object-contain"
               loading="lazy" />
          </motion.div>

          {/* Spacer for bottom scrolling past the floating button */}
          <div className="h-32 bg-[#f8f8f8]"></div>

        </div>

      </div>
    </PageTransition>
  );
};

export default Booklet;
