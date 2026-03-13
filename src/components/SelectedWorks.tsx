import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ImageWithLoader from "./ImageWithLoader";
import MagneticButton from "./MagneticButton";
import { projects } from "@/lib/data";

const works = projects.slice(0, 4);

const SelectedWorks = () => {
  return (
    <section className="relative bg-background text-foreground py-24 md:py-32" style={{ fontFamily: 'Geist, sans-serif' }}>
      
      {/* Header */}
      <div className="section-padding mb-12 md:mb-16">
        <div className="flex items-center justify-between w-full">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl uppercase tracking-tight text-foreground"
            style={{ fontFamily: 'Clash Display, sans-serif', fontWeight: 800 }}
          >
            SELECTED WORKS
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <MagneticButton>
              <Link to="/works" className="nav-link border-b border-foreground pb-0.5 hover:opacity-70 transition-opacity whitespace-nowrap text-sm font-semibold tracking-wide uppercase">
                See all works
              </Link>
            </MagneticButton>
          </motion.div>
        </div>
      </div>

      {/* Bento Grid */}
      <div className="section-padding">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          
          {/* Large Hero Card - Takes 2/3 width and full height */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-8 md:row-span-2 group"
          >
            <Link 
              to={works[0].isOngoing ? "#" : `/works/${works[0].id}`}
              className="block h-full"
              onClick={(e) => { if (works[0].isOngoing) e.preventDefault(); }}
            >
              <div className="relative h-[400px] md:h-[700px] overflow-hidden bg-[#111]">
                <ImageWithLoader
                  src={works[0].image}
                  alt={works[0].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                
                {works[0].isOngoing ? (
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

                {/* Text overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-black/90 via-black/50 to-transparent text-white">
                  <h3 className="text-2xl md:text-4xl font-bold uppercase tracking-tight mb-2">
                    {works[0].title}
                  </h3>
                  <p className="text-xs md:text-sm uppercase tracking-wider font-semibold opacity-80">
                    {works[0].category}
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Three smaller cards on the right */}
          {works.slice(1, 4).map((work, i) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: (i + 1) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="md:col-span-4 group"
            >
              <Link 
                to={work.isOngoing ? "#" : `/works/${work.id}`}
                className="block h-full"
                onClick={(e) => { if (work.isOngoing) e.preventDefault(); }}
              >
                <div className="relative h-[300px] md:h-[340px] overflow-hidden bg-[#111]">
                  <ImageWithLoader
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                  
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
                      <div className="bg-black/80 text-white backdrop-blur-md px-5 py-2.5 text-xs font-bold uppercase tracking-[0.15em] rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-xl border border-white/10">
                        View Case Study
                      </div>
                    </div>
                  )}

                  {/* Text overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent text-white">
                    <h3 className="text-lg md:text-xl font-bold uppercase tracking-tight mb-1">
                      {work.title}
                    </h3>
                    <p className="text-xs uppercase tracking-wider font-semibold opacity-80">
                      {work.category}
                    </p>
                  </div>
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
