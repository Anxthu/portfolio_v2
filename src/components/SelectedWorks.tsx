import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import ImageWithLoader from "./ImageWithLoader";
import MagneticButton from "./MagneticButton";

import { projects } from "@/lib/data";

const works = projects.slice(0, 4);

const SelectedWorks = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [hoveredWork, setHoveredWork] = useState<string | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, workId: string) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setHoveredWork(workId);
  };

  const handleMouseLeave = () => {
    setHoveredWork(null);
  };

  return (
    <section className="section-padding py-24 relative">
      <div className="flex items-center justify-between mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-heading font-bold text-foreground"
          >
            Selected Works
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <MagneticButton>
              <Link
                to="/works"
                className="nav-link border-b border-muted-foreground pb-0.5 hover:border-foreground"
              >
                See all works
              </Link>
            </MagneticButton>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {works.map((work, i) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
            >
              <Link 
                to={work.isOngoing ? "#" : `/works/${work.id}`} 
                className="work-card block group"
                onClick={(e) => {
                  if (work.isOngoing) {
                    e.preventDefault();
                  }
                }}
              >
                <motion.div 
                  className="relative aspect-[4/5] overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  onMouseMove={(e) => handleMouseMove(e, work.id)}
                  onMouseLeave={handleMouseLeave}
                >
                  <ImageWithLoader
                    src={work.image}
                    alt={work.title}
                    className="work-card-image"
                    loading="lazy"
                  />
                  <div className="work-card-overlay" />
                  
                  {work.isOngoing && (
                    <div className="absolute inset-0 flex items-center justify-center bg-background/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                      <div className="text-center">
                        <div className="bg-foreground text-background px-4 py-2 text-sm font-bold uppercase tracking-wider rounded-full mb-2">
                          Ongoing Work
                        </div>
                        <p className="text-xs text-muted-foreground">Coming Soon</p>
                      </div>
                    </div>
                  )}

                  {/* Cursor-following "View Case Study" */}
                  {!work.isOngoing && hoveredWork === work.id && (
                    <motion.div
                      className="absolute pointer-events-none z-20"
                      style={{
                        left: cursorPos.x,
                        top: cursorPos.y,
                      }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="bg-foreground text-background px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full whitespace-nowrap transform -translate-x-1/2 -translate-y-1/2">
                        View Case Study →
                      </div>
                    </motion.div>
                  )}

                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <h3 className="text-lg font-semibold text-foreground">{work.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{work.description}</p>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
    </section>
  );
};

export default SelectedWorks;
