import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import ImageWithLoader from "@/components/ImageWithLoader";

import { projects as allWorks } from "@/lib/data";

const categories = [
  "All Works",
  "Web & E-commerce",
  "Brand & App Design",
  "Digital Platform",
  "Product & App",
  "Web Design",
  "Healthcare UI",
  "Brand Campaign",
];

const Works = () => {
  const [active, setActive] = useState("All Works");
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [hoveredWork, setHoveredWork] = useState<string | null>(null);

  const filtered =
    active === "All Works"
      ? allWorks
      : allWorks.filter((w) => w.category === active);

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
    <PageTransition>
      <div className="min-h-screen bg-background">

        <div className="section-padding pt-32 pb-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-7xl font-heading font-bold text-foreground mb-10"
          >
            WORKS
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`nav-link transition-all ${active === cat
                  ? "nav-link-active border-b border-foreground pb-0.5"
                  : ""
                  }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        <div className="section-padding pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((work, i) => (
              <motion.div
                key={work.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                layout
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
                    className="relative aspect-[3/4] overflow-hidden"
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

                    <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <h3 className="text-base font-semibold text-foreground">{work.title}</h3>
                      <p className="text-xs text-muted-foreground mt-0.5">{work.category}</p>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Works;
