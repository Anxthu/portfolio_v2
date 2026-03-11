import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const GlobalBackButton = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isHidden = 
    location.pathname === "/" || 
    location.pathname === "/resume" || 
    location.pathname === "/booklet" || 
    location.pathname === "/archives" || 
    location.pathname === "/blog" || 
    location.pathname.startsWith("/blog/");

  return (
    <AnimatePresence>
      {!isHidden && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="fixed top-6 left-6 md:top-10 md:left-10 z-[60]"
        >
          <button
            onClick={() => navigate(-1)}
              className="flex items-center justify-center w-10 h-10 backdrop-blur-md border rounded-none bg-black/30 border-white/10 text-white/70 hover:text-white hover:bg-black/50 hover:scale-105 transition-all outline-none"
            aria-label="Go back"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GlobalBackButton;
