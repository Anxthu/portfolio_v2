import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Home, Search } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center section-padding max-w-2xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-[150px] md:text-[200px] font-heading font-bold leading-none text-foreground mb-4">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Page Not Found
          </h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Looks like this page took a wrong turn. Let's get you back on track.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background font-semibold rounded-full hover:bg-foreground/90 transition-all duration-300 hover:scale-105"
            >
              <Home className="w-4 h-4" />
              Back to Home
            </Link>
            <Link
              to="/works"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-semibold rounded-full hover:bg-accent transition-all duration-300 hover:scale-105"
            >
              <Search className="w-4 h-4" />
              View Works
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 text-xs text-muted-foreground"
          >
            Error path: {location.pathname}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
