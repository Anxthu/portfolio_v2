import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import ImageWithLoader from "./ImageWithLoader";
import MagneticButton from "./MagneticButton";
import { projects } from "@/lib/data";

const works = projects.slice(0, 4);

const SelectedWorks = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const progressPoints = [0, 0.15, 0.20, 0.35, 0.40, 0.55, 0.60, 0.75, 0.80, 0.95, 1.0];

  // Image 1 (TL, then moves down, moves Center-Top, Stack Center, Full Scale)
  const l1 = useTransform(scrollYProgress, progressPoints, ['-50vw', '-42vw', '-42vw', '-42vw', '-42vw', '-20vw', '-20vw', '-20vw', '-20vw', '-50vw', '-50vw']);
  const t1 = useTransform(scrollYProgress, progressPoints, ['-50vh', '-49vh', '-49vh', '3vh', '3vh', '-38vh', '-38vh', '-23vh', '-23vh', '-50vh', '-50vh']);
  const w1 = useTransform(scrollYProgress, progressPoints, ['100vw', '40vw', '40vw', '40vw', '40vw', '40vw', '40vw', '40vw', '40vw', '100vw', '100vw']);
  const h1 = useTransform(scrollYProgress, progressPoints, ['100vh', '46vh', '46vh', '46vh', '46vh', '46vh', '46vh', '46vh', '46vh', '100vh', '100vh']);
  const br1 = useTransform(scrollYProgress, progressPoints, ['0px', '0px', '0px', '0px', '0px', '0px', '0px', '0px', '0px', '0px', '0px']);

  // Image 2 (TR, then moves down, moves Center-Bottom, Stack Center)
  const l2 = useTransform(scrollYProgress, progressPoints, ['2vw', '2vw', '2vw', '2vw', '2vw', '-20vw', '-20vw', '-20vw', '-20vw', '-20vw', '-20vw']);
  const t2 = useTransform(scrollYProgress, progressPoints, ['-49vh', '-49vh', '-49vh', '3vh', '3vh', '-8vh', '-8vh', '-23vh', '-23vh', '-23vh', '-23vh']);
  const o2 = useTransform(scrollYProgress, progressPoints, [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0]);

  // Image 3 (BL, stays BL, moves Center-Top, Stack Center)
  const l3 = useTransform(scrollYProgress, progressPoints, ['-42vw', '-42vw', '-42vw', '-42vw', '-42vw', '-20vw', '-20vw', '-20vw', '-20vw', '-20vw', '-20vw']);
  const t3 = useTransform(scrollYProgress, progressPoints, ['3vh', '3vh', '3vh', '3vh', '3vh', '-38vh', '-38vh', '-23vh', '-23vh', '-23vh', '-23vh']);
  const o3 = useTransform(scrollYProgress, progressPoints, [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0]);

  // Image 4 (BR, stays BR, moves Center-Bottom, Stack Center)
  const l4 = useTransform(scrollYProgress, progressPoints, ['2vw', '2vw', '2vw', '2vw', '2vw', '-20vw', '-20vw', '-20vw', '-20vw', '-20vw', '-20vw']);
  const t4 = useTransform(scrollYProgress, progressPoints, ['3vh', '3vh', '3vh', '3vh', '3vh', '-8vh', '-8vh', '-23vh', '-23vh', '-23vh', '-23vh']);
  const o4 = useTransform(scrollYProgress, progressPoints, [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0]);

  const getMotionStyle = (i: number) => {
    switch (i) {
      case 0: return { width: w1, height: h1, left: l1, top: t1, borderRadius: br1, zIndex: 40 };
      case 1: return { width: '40vw', height: '46vh', left: l2, top: t2, opacity: o2, borderRadius: '0px', zIndex: 30 };
      case 2: return { width: '40vw', height: '46vh', left: l3, top: t3, opacity: o3, borderRadius: '0px', zIndex: 20 };
      case 3: return { width: '40vw', height: '46vh', left: l4, top: t4, opacity: o4, borderRadius: '0px', zIndex: 10 };
      default: return {};
    }
  };

  return (
    <section ref={containerRef} className="relative h-[550vh] bg-background text-foreground" style={{ fontFamily: 'Geist, sans-serif' }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-background">
        
        {/* UI Overlay ALWAYS visible on top */}
        <div className="absolute top-0 left-0 w-full p-8 md:p-12 z-50 pointer-events-none mix-blend-difference">
          <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold uppercase tracking-tight text-white">
              SELECTED WORKS
            </h2>
            <div className="pointer-events-auto">
              <MagneticButton>
                <Link to="/works" className="nav-link border-b border-white pb-0.5 text-white hover:opacity-70 transition-opacity whitespace-nowrap text-sm font-semibold tracking-wide uppercase">
                  See all works
                </Link>
              </MagneticButton>
            </div>
          </div>
        </div>

        {/* Center Container for Absolute Tracking */}
        <div className="absolute top-1/2 left-1/2 w-0 h-0 pointer-events-none">
          {works.map((work, i) => (
            <motion.div
              key={work.id}
              style={getMotionStyle(i)}
              className="absolute overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.5)] pointer-events-auto group bg-[#111]"
            >
              <Link 
                to={work.isOngoing ? "#" : `/works/${work.id}`}
                className="block w-full h-full relative"
                onClick={(e) => { if (work.isOngoing) e.preventDefault(); }}
              >
                <ImageWithLoader
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  loading={i === 0 ? "eager" : "lazy"}
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
                
                {work.isOngoing ? (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-center">
                      <div className="bg-white text-black px-4 py-2 text-sm font-bold uppercase tracking-wider rounded-full mb-2 shadow-lg">
                        Ongoing Work
                      </div>
                      <p className="text-xs text-white/70">Coming Soon</p>
                    </div>
                  </div>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-black/80 text-white backdrop-blur-md px-6 py-3 text-sm font-bold uppercase tracking-[0.15em] rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-xl border border-white/10">
                      View Case Study
                    </div>
                  </div>
                )}
                
                {/* Text overlay always visible at bottom of image upon hover */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-black/90 via-black/40 to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-xl md:text-3xl font-heading font-bold uppercase tracking-tight">{work.title}</h3>
                  <p className="text-xs md:text-sm font-semibold opacity-80 mt-2 tracking-[0.2em] uppercase">{work.category}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectedWorks;
