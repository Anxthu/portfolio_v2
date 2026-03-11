import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { projects } from "@/lib/data";

const Archives = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-white text-black">

        <div className="section-padding pt-32 pb-24">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-7xl font-bold text-[#E52E2D] mb-16 uppercase font-heading tracking-tight"
          >
            ARCHIVES
          </motion.h1>

          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="relative border-t border-border"
          >
            {/* Cursor-following thumbnail */}
            <AnimatePresence>
              {hoveredIndex !== null && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="pointer-events-none absolute z-50 w-[280px] h-[180px] overflow-hidden drop-shadow-2xl rounded-sm"
                  style={{
                    left: mousePos.x + 20,
                    top: mousePos.y - 90,
                  }}
                >
                  <img
                    src={projects[hoveredIndex].images[0]}
                    alt={projects[hoveredIndex].title}
                    className="w-full h-full object-cover rounded-none"
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {projects.map((project, i) => (
              <Link to={`/works/${project.id}`} key={project.id}>
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className="flex flex-col md:flex-row md:items-center justify-between py-6 border-b border-border group cursor-pointer hover:bg-accent/10 transition-colors duration-300 px-4 md:px-6"
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12 mb-2 md:mb-0">
                    <span className="text-sm text-black/50 w-12 font-mono">
                      {(i + 1).toString().padStart(2, "0")}
                    </span>
                    <span className="text-2xl md:text-4xl font-heading uppercase tracking-tight text-black group-hover:text-[#E52E2D] transition-colors">
                      {project.title}
                    </span>
                  </div>
                  <div className="flex items-center gap-8 pl-16 md:pl-0">
                    <span className="text-sm text-black/50 uppercase tracking-wider">
                      {project.category}
                    </span>
                    {project.isOngoing && (
                      <span className="text-xs bg-black text-white px-2 py-1 font-bold uppercase tracking-wider">
                        Ongoing
                      </span>
                    )}
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Archives;
