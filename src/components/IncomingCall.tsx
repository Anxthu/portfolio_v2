import { useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Phone, PhoneOff } from "lucide-react";
import { useRef } from "react";

const IncomingCall = () => {
  const [isAnswered, setIsAnswered] = useState(false);
  const [isRinging, setIsRinging] = useState(true);
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax effects
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const handleAnswer = () => {
    setIsAnswered(true);
    setIsRinging(false);
  };

  const handleDecline = () => {
    setIsRinging(false);
  };

  return (
    <section 
      ref={sectionRef}
      className="min-h-[150vh] flex items-center justify-center section-padding py-40 relative overflow-hidden"
    >
      {/* Pure white background - no gradient */}
      <div className="absolute inset-0 bg-white" />

      {/* Frosted glass effect at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/80 via-white/40 to-transparent backdrop-blur-xl z-[5]" />

      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 w-full max-w-md mx-auto px-4"
      >
        <AnimatePresence mode="wait">
          {isRinging && !isAnswered && (
            <motion.div
              key="incoming"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Engaging Incoming Call Bar */}
              <motion.div
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="bg-white/80 backdrop-blur-2xl border border-white/50 rounded-full px-4 py-3 shadow-[0_8px_30px_rgb(0,0,0,0.12)] relative"
              >
                <div className="flex items-center justify-between gap-4">
                  {/* Left: Profile + Info */}
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    {/* Profile Image - More prominent */}
                    <motion.div
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="w-12 h-12 rounded-full overflow-hidden border-2 border-green-500/30 flex-shrink-0"
                    >
                      <img
                        src="/2R7A2720.webp"
                        alt="ANANTHU"
                        className="w-full h-full object-cover object-center"
                       loading="lazy" />
                    </motion.div>

                    {/* Caller Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-bold text-black truncate">
                        Ananthu calling...
                      </h3>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <motion.div
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                          className="flex items-center gap-1"
                        >
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                        </motion.div>
                        <span className="text-xs font-medium text-black/60">Answer to connect</span>
                      </div>
                    </div>
                  </div>

                  {/* Right: Action Buttons - Larger */}
                  <div className="flex items-center gap-2 flex-shrink-0">
                    {/* Decline Button */}
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={handleDecline}
                      className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-red-500/50 transition-shadow"
                    >
                      <PhoneOff className="w-4 h-4 text-white" />
                    </motion.button>

                    {/* Answer Button */}
                    <div className="relative">
                      {/* Pulsing ring behind answer button */}
                      <motion.div 
                        animate={{ scale: [1, 1.5], opacity: [0.6, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
                        className="absolute inset-0 bg-green-500 rounded-full"
                      />
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        animate={{ scale: [1, 1.08, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        onClick={handleAnswer}
                        className="relative w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-green-500/50 transition-shadow z-10"
                      >
                        <motion.div
                          animate={{ rotate: [0, -15, 15, -15, 15, 0] }}
                          transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
                        >
                          <Phone className="w-4 h-4 text-white" />
                        </motion.div>
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}

          {isAnswered && (
            <motion.div
              key="answered"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="bg-black/5 backdrop-blur-xl border border-black/10 rounded-3xl p-6 shadow-2xl max-w-xl mx-auto"
            >
              {/* Call Connected Header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-black/10">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-green-500 flex-shrink-0">
                  <img
                    src="/2R7A2720.webp"
                    alt="ANANTHU"
                    className="w-full h-full object-cover object-center"
                   loading="lazy" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-black mb-0.5">
                    Ananthu
                  </h3>
                  <div className="flex items-center gap-2 text-green-500">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-xs font-medium">Connected</span>
                  </div>
                </div>
              </div>

              {/* About Me Content - Smaller with Geist font */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-4"
              >
                <p className="text-black leading-relaxed text-sm" style={{ fontFamily: 'Geist, sans-serif', fontWeight: 500 }}>
                  I am a <span className="font-semibold text-black">creative generalist</span> from Bengaluru, India, <span className="text-black/50">specialised in UI/UX Design, communication design, and brand strategy. My work spans across graphic design, 3D art, etc.</span>
                </p>
                <p className="text-black/50 leading-relaxed text-sm" style={{ fontFamily: 'Geist, sans-serif', fontWeight: 500 }}>
                  I believe perfection isn't born out of love. It's forged in frustration, obsession, and an unrelenting pursuit of greatness.
                </p>

                {/* End Call Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    setIsAnswered(false);
                    setIsRinging(false);
                  }}
                  className="w-full mt-4 px-5 py-3 bg-red-500 text-white font-semibold rounded-full hover:bg-red-600 transition-colors flex items-center justify-center gap-2 text-sm"
                >
                  <PhoneOff className="w-4 h-4" />
                  End Call
                </motion.button>
              </motion.div>
            </motion.div>
          )}

          {!isRinging && !isAnswered && (
            <motion.div
              key="declined"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center"
            >
              {/* Just the profile picture, no text - smaller size */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                onClick={() => setIsRinging(true)}
                className="w-14 h-14 rounded-full overflow-hidden border-2 border-black/20 cursor-pointer shadow-lg hover:shadow-xl transition-shadow"
              >
                <img
                  src="/2R7A2720.webp"
                  alt="ANANTHU"
                  className="w-full h-full object-cover object-center"
                 loading="lazy" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default IncomingCall;
