import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    // Hide loading screen after animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[10000] bg-background flex items-center justify-center overflow-hidden"
        >
          {/* Animated Background Grid */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(hsl(0 0% 95% / 0.1) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 95% / 0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
            }} />
          </div>

          <div className="relative z-10">
            {/* Main Logo Animation */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              {/* Animated Letters with Stagger */}
              <div className="flex justify-center overflow-hidden mb-6">
                {"ANANTHU".split("").map((letter, i) => (
                  <motion.span
                    key={i}
                    initial={{ y: 100, opacity: 0, rotateX: -90 }}
                    animate={{ y: 0, opacity: 1, rotateX: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.3 + i * 0.08,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="text-6xl md:text-8xl font-heading font-[800] tracking-tight text-foreground inline-block"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>

              {/* Animated Subtitle */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="overflow-hidden"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  UI/UX Designer Portfolio
                </p>
              </motion.div>

              {/* Creative Progress Bar */}
              <div className="mt-12 relative">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 1.4 }}
                  className="relative w-[250px] mx-auto"
                >
                  {/* Background Track */}
                  <div className="h-[2px] bg-border rounded-full overflow-hidden">
                    {/* Animated Progress */}
                    <motion.div
                      className="h-full bg-foreground relative"
                      style={{ width: `${progress}%` }}
                      transition={{ duration: 0.1 }}
                    >
                      {/* Glow Effect */}
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 bg-foreground/30 rounded-full blur-xl" />
                    </motion.div>
                  </div>

                  {/* Progress Percentage */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 1.6 }}
                    className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-muted-foreground font-mono"
                  >
                    {progress}%
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>

            {/* Orbiting Dots */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] pointer-events-none">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="absolute top-1/2 left-1/2 w-2 h-2 bg-foreground/30 rounded-full"
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 3 + i,
                    repeat: Infinity,
                    ease: "linear",
                    delay: i * 0.3,
                  }}
                  style={{
                    transformOrigin: `${100 + i * 30}px 0px`,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Corner Accents */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.3, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="absolute top-8 left-8 w-12 h-12 border-l-2 border-t-2 border-foreground/20"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.3, scale: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="absolute bottom-8 right-8 w-12 h-12 border-r-2 border-b-2 border-foreground/20"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
