import React, { useState } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import ImageWithLoader from "./ImageWithLoader";
import { projects } from "@/lib/data";

const selectedWorks = projects.filter(p => !p.isOngoing).slice(0, 4);
const ongoingWorks = projects.filter(p => p.isOngoing);

const FolderCard = ({ folder, folderIndex }: { folder: any, folderIndex: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const folderRef = React.useRef(null);
  
  // Trigger true when the folder is roughly in the middle of the viewport
  const isInView = useInView(folderRef, { margin: "-40% 0px -40% 0px" });
  
  // Strict check for mobile/tablet to ensure desktop never auto-triggers scroll events
  const [isMobile, setIsMobile] = useState(false);
  React.useEffect(() => {
    const checkViewport = () => {
      // If width is typical mobile/tablet, OR explicitly non-hover touch device
      const isMobileDevice = window.innerWidth <= 1024 || window.matchMedia("(hover: none) and (pointer: coarse)").matches;
      setIsMobile(isMobileDevice);
    };
    
    checkViewport();
    window.addEventListener("resize", checkViewport);
    return () => window.removeEventListener("resize", checkViewport);
  }, []);

  // The folder is open if explicitly hovered (PC) OR if it's in view on a mobile device
  const isOpen = isHovered || (isMobile && isInView);

  return (
    <motion.div
      ref={folderRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: folderIndex * 0.2 }}
      className="relative flex items-center justify-center cursor-pointer"
      style={{ perspective: '2000px', height: '240px' }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      // Support manual tapping as a fallback
      onTouchStart={() => setIsHovered(true)}
    >
      {/* 
        Container for the whole folder.
        We use translateZ(0) to create a new stacking context.
      */}
      <div className="relative w-full max-w-[320px] h-full transition-transform duration-500 hover:-translate-y-2" style={{ transformStyle: 'preserve-3d' }}>
        
        {/* FOLDER BACK COVER */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#2a2a2a] via-[#222] to-[#1a1a1a] rounded-xl border-t border-l border-[#3a3a3a] shadow-[inset_0_4px_20px_rgba(0,0,0,0.8)] transform translate-z-[-30px]">
          {/* Folder spine/depth effect at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-black/60 to-transparent rounded-b-xl border-b border-[#333]"></div>
          
          {/* Tab */}
          <div className="absolute -top-10 left-4 w-40 h-10 bg-gradient-to-b from-[#2a2a2a] to-[#252525] rounded-t-xl border-t border-x border-[#3a3a3a] overflow-hidden flex items-end justify-center pb-2 z-[-1] shadow-[inset_0_2px_4px_rgba(255,255,255,0.05)]">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#a0a0a0]">
              {folder.label}
            </span>
          </div>
        </div>

        {/* CARDS (Inside the Folder) */}
        <div className="absolute inset-x-0 bottom-6 top-0 flex items-end justify-center pointer-events-none" style={{ transform: 'translateZ(-15px)' }}>
          {folder.works.map((work: any, i: number) => {
            const totalCards = folder.works.length;
            const baseZ = i;
            
            // Values when opened
            const spreadWidth = 60; // pixels between cards
            const startX = -(spreadWidth * (totalCards - 1)) / 2;
            const openedX = startX + (i * spreadWidth);
            const openedY = -180; // pop up higher out of folder
            const openedRotateZ = (i - (totalCards - 1) / 2) * 8; // Fan out cards wider
            
            // For "Ongoing" with only 1 project, just pop it straight up
            const finalX = totalCards === 1 ? 0 : openedX;
            const finalRotateZ = totalCards === 1 ? 0 : openedRotateZ;

            return (
              <motion.div
                key={work.id}
                className="absolute bottom-0 pointer-events-auto origin-bottom"
                style={{ 
                  transformStyle: 'preserve-3d',
                  zIndex: isOpen ? 40 + i : baseZ
                }}
                initial={false}
                animate={{
                  x: isOpen ? finalX : 0,
                  y: isOpen ? openedY : 0, // Rest at bottom 0 when closed
                  z: isOpen ? 30 + (i * 10) : 0, // Cards lift up towards user
                  rotateZ: isOpen ? finalRotateZ : 0,
                  scale: 1,
                }}
                transition={{ 
                  duration: 0.6, // slightly slower for premium feel
                  ease: [0.23, 1, 0.32, 1] // Custom refined ease (Cubic bezier)
                }}
              >
                <Link 
                  to={`/works/${work.id}`}
                  className="block group"
                  onClick={(e) => { 
                    if (work.isOngoing) e.preventDefault(); 
                  }}
                >
                  <div className="w-[180px] h-[240px] bg-[#0f0f0f] rounded-lg overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.8)] border border-[#333] group-hover:border-[#666] transition-colors duration-300 relative">
                    {/* Specular gloss on card */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>

                    <div className="relative h-32 w-full bg-[#111]">
                      <ImageWithLoader
                        src={work.image}
                        alt={work.title}
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                        loading="lazy"
                      />
                      {work.isOngoing && (
                        <div className="absolute top-2 right-2 z-20">
                          <span className="bg-[#E52E2D] text-white px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider rounded shadow-md">
                            Ongoing
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="p-4 bg-[#0f0f0f] flex flex-col justify-between h-[112px] relative z-20">
                      <h3 className="text-sm font-bold uppercase tracking-tight text-[#e0e0e0] group-hover:text-white transition-colors mb-1 line-clamp-2">
                        {work.title}
                      </h3>
                      <p className="text-[10px] uppercase tracking-widest text-[#888] font-medium">
                        {work.category}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* FOLDER FRONT COVER */}
        {/* It covers the entire h-full area, hiding the cards at the bottom when closed */}
        <Link to="/works" className="absolute inset-0 w-full h-full z-50 pointer-events-auto origin-bottom" style={{ transformStyle: 'preserve-3d' }}>
          <motion.div
            className="w-full h-full rounded-xl overflow-hidden flex flex-col items-center justify-center relative border border-white/[0.08]"
            style={{
              // Base colors using a highly realistic faux-leather/plastic gradient
              background: 'linear-gradient(135deg, #3d3d3d 0%, #292929 40%, #1f1f1f 100%)',
              boxShadow: '0 -2px 10px rgba(255,255,255,0.03) inset, 0 10px 40px rgba(0,0,0,0.6)',
            }}
            animate={{
              rotateX: isOpen ? -35 : 0, // Flap falls open significantly more for a deeper 3D effect
            }}
            transition={{ 
              duration: 0.5,
              ease: [0.25, 1, 0.5, 1] 
            }}
          >
            {/* Realistic rim lighting on the top edge */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            
            {/* Texture layer */}
            <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:6px_6px]"></div>
            <div className="absolute inset-0 opacity-20 mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

            {/* Folder Content when closed */}
            <motion.div
              animate={{ opacity: isOpen ? 0 : 1, y: isOpen ? 10 : 0 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col items-center justify-center pointer-events-none relative z-10"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-b from-[#333] to-[#222] border border-white/10 flex items-center justify-center mb-4 shadow-[inset_0_2px_10px_rgba(0,0,0,0.5),0_5px_15px_rgba(0,0,0,0.4)]">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                </svg>
              </div>
              <p className="text-sm text-gray-300 font-bold tracking-widest uppercase">Hover to open</p>
              <p className="text-[10px] text-gray-500 mt-2 font-medium tracking-widest">{folder.works.length} {folder.works.length === 1 ? 'Project' : 'Projects'}</p>
            </motion.div>

            {/* Specular highlight that moves on open */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-b from-white/[0.08] to-transparent pointer-events-none"
              animate={{
                opacity: isOpen ? 0.3 : 1
              }}
            ></motion.div>

          </motion.div>
        </Link>
      </div>
    </motion.div>
  );
};

const SelectedWorksFolder = () => {
  const folders = [
    { id: 'selected', label: 'Selected Works', works: selectedWorks },
    { id: 'ongoing', label: 'Ongoing Works', works: ongoingWorks }
  ];

  return (
    <section className="relative bg-[#141414] text-foreground py-24 md:py-32" style={{ fontFamily: 'Geist, sans-serif' }}>
      
      {/* Title */}
      <div className="section-padding mb-32">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl uppercase tracking-tight text-white text-center"
          style={{ fontFamily: 'Clash Display, sans-serif', fontWeight: 800 }}
        >
          MY WORK
        </motion.h2>
      </div>

      {/* Folders Container */}
      <div className="section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-32 md:gap-x-12 lg:gap-x-24 max-w-5xl mx-auto mt-16">
          {folders.map((folder, folderIndex) => (
            <FolderCard key={folder.id} folder={folder} folderIndex={folderIndex} />
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-32 md:mt-40"
        >
          <Link 
            to="/works" 
            className="inline-block text-sm font-bold uppercase tracking-widest border-b-2 border-white/20 pb-1 text-white/80 hover:text-[#E52E2D] hover:border-[#E52E2D] transition-colors duration-300"
          >
            Explore All Works →
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default SelectedWorksFolder;
