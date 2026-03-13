import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ImageWithLoader from "./ImageWithLoader";
import { projects } from "@/lib/data";

const selectedWorks = projects.filter(p => !p.isOngoing).slice(0, 4);
const ongoingWorks = projects.filter(p => p.isOngoing);

const SelectedWorksFolder = () => {
  const [hoveredFolder, setHoveredFolder] = useState<'selected' | 'ongoing' | null>(null);

  const folders = [
    { id: 'selected', label: 'Selected Works', works: selectedWorks },
    { id: 'ongoing', label: 'Ongoing Works', works: ongoingWorks }
  ];

  return (
    <section className="relative bg-background text-foreground py-24 md:py-32" style={{ fontFamily: 'Geist, sans-serif' }}>
      
      {/* Title */}
      <div className="section-padding mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl uppercase tracking-tight text-foreground text-center"
          style={{ fontFamily: 'Clash Display, sans-serif', fontWeight: 800 }}
        >
          MY WORK
        </motion.h2>
      </div>

      {/* Folders Container */}
      <div className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto">
          {folders.map((folder, folderIndex) => (
            <motion.div
              key={folder.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: folderIndex * 0.2 }}
              className="relative flex items-center justify-center"
              style={{ perspective: '1500px', minHeight: '400px' }}
              onMouseEnter={() => setHoveredFolder(folder.id as any)}
              onMouseLeave={() => setHoveredFolder(null)}
            >
              {/* Folder */}
              <div className="relative w-full max-w-md">
                
                {/* Folder Tab */}
                <div className="absolute -top-6 left-8 z-20">
                  <div className="w-32 h-8 bg-gradient-to-b from-gray-200 via-gray-100 to-gray-50 rounded-t-lg border-t border-x border-gray-300 shadow-sm overflow-hidden">
                    <div className="absolute inset-0 backdrop-blur-md bg-white/50 flex items-center justify-center">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-black/50">
                        {folder.label}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Folder Body */}
                <motion.div
                  className="relative w-full h-64 bg-gradient-to-br from-gray-100 via-gray-50 to-white rounded-xl border border-gray-300 shadow-2xl overflow-hidden"
                  style={{ transformStyle: 'preserve-3d' }}
                  animate={{
                    rotateX: hoveredFolder === folder.id ? 5 : 0,
                  }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Folder texture/details */}
                  <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-4 left-4 right-4 h-px bg-gray-200"></div>
                    <div className="absolute top-8 left-4 right-4 h-px bg-gray-200"></div>
                  </div>

                  {/* Closed State */}
                  <motion.div
                    animate={{ opacity: hoveredFolder === folder.id ? 0 : 1 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 flex flex-col items-center justify-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center border border-gray-200 mb-4 shadow-lg">
                      <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-600 font-semibold">Hover to open</p>
                    <p className="text-xs text-gray-400 mt-1">{folder.works.length} {folder.works.length === 1 ? 'project' : 'projects'}</p>
                  </motion.div>
                </motion.div>

                {/* Cards spreading out horizontally */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  {folder.works.map((work, i) => {
                    const totalCards = folder.works.length;
                    const spreadWidth = 80; // pixels between cards
                    const startX = -(spreadWidth * (totalCards - 1)) / 2;
                    const xOffset = startX + (i * spreadWidth);
                    const rotation = (i - (totalCards - 1) / 2) * 8; // degrees

                    return (
                      <motion.div
                        key={work.id}
                        className="absolute pointer-events-auto"
                        style={{ 
                          transformStyle: 'preserve-3d',
                          zIndex: hoveredFolder === folder.id ? 30 + i : 0
                        }}
                        animate={{
                          x: hoveredFolder === folder.id ? xOffset : 0,
                          y: hoveredFolder === folder.id ? -120 : 0,
                          rotateZ: hoveredFolder === folder.id ? rotation : 0,
                          scale: hoveredFolder === folder.id ? 1 : 0.8,
                          opacity: hoveredFolder === folder.id ? 1 : 0,
                        }}
                        transition={{ 
                          duration: 0.5, 
                          delay: hoveredFolder === folder.id ? i * 0.05 : 0,
                          ease: [0.34, 1.56, 0.64, 1]
                        }}
                      >
                        <Link 
                          to={work.isOngoing ? "#" : `/works/${work.id}`}
                          className="block group"
                          onClick={(e) => { if (work.isOngoing) e.preventDefault(); }}
                        >
                          <div className="w-48 h-64 bg-white rounded-lg overflow-hidden shadow-2xl border border-gray-200 hover:shadow-3xl transition-shadow duration-300">
                            <div className="relative h-40">
                              <ImageWithLoader
                                src={work.image}
                                alt={work.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                loading="lazy"
                              />
                              {work.isOngoing && (
                                <div className="absolute top-2 right-2">
                                  <span className="bg-white text-black px-2 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full shadow-lg">
                                    Ongoing
                                  </span>
                                </div>
                              )}
                            </div>
                            <div className="p-4 bg-white">
                              <h3 className="text-sm font-bold uppercase tracking-tight text-black mb-1 line-clamp-2">
                                {work.title}
                              </h3>
                              <p className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold">
                                {work.category}
                              </p>
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-20"
        >
          <Link 
            to="/works" 
            className="inline-block text-sm font-semibold uppercase tracking-wider border-b-2 border-foreground pb-1 hover:text-[#E52E2D] hover:border-[#E52E2D] transition-colors duration-300"
          >
            View All Projects →
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default SelectedWorksFolder;
