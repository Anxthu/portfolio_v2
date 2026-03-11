import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";

const Credits = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background text-foreground flex flex-col justify-center items-center section-padding" style={{ fontFamily: 'Geist, sans-serif' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl text-center"
        >
          <h1 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-tight mb-8">
            Credits
          </h1>
          
          <div className="space-y-6 text-sm md:text-base text-muted-foreground/90">
            <p>
              <strong className="text-foreground tracking-widest uppercase text-xs block mb-1">Photography</strong>
              Images utilized across this portfolio are primarily sourced from <a href="https://unsplash.com/@zablanca_clicks" target="_blank" rel="noopener noreferrer" className="text-white hover:underline transition-colors block mt-1">zablanca_clicks on Unsplash</a>
            </p>
            
            <p className="pt-4 border-t border-white/10">
              <strong className="text-foreground tracking-widest uppercase text-xs block mb-1">Typography</strong>
              Headings: Clash Display<br/>
              Body text: Geist Sans
            </p>
            
            <p className="pt-4 border-t border-white/10">
              <strong className="text-foreground tracking-widest uppercase text-xs block mb-1">Design & Development</strong>
              Conceptualized and built by Ananthu.
            </p>
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Credits;
