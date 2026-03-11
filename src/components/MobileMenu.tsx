import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: "HOME", path: "/" },
    { label: "WORKS", path: "/works" },
    { label: "ARCHIVES", path: "/archives" },
    { label: "RESUME", path: "/resume" },
    { label: "BLOG", path: "/blog" },
    { label: "CONTACT", path: "/contact" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="text-foreground p-2 hover:bg-accent/10 rounded-md transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-background/95 backdrop-blur-lg z-40"
              onClick={toggleMenu}
            />

            {/* Menu */}
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-background border-l border-border z-50 p-8"
            >
              <div className="flex justify-between items-center mb-12">
                <span className="text-sm font-bold tracking-wide text-foreground">
                  MENU
                </span>
                <button
                  onClick={toggleMenu}
                  className="text-foreground p-2 hover:bg-accent/10 rounded-md transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="flex flex-col gap-6">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                  >
                    <Link
                      to={item.path}
                      onClick={toggleMenu}
                      className={`text-2xl font-heading uppercase tracking-tight transition-colors ${
                        location.pathname === item.path
                          ? "text-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex flex-col gap-3 text-xs text-muted-foreground">
                  <a
                    href="https://www.instagram.com/ux.ananthu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-colors"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://x.com/ux_ananthu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-colors"
                  >
                    X (Twitter)
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ananthapadmanabhan-nair/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-colors"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://dribbble.com/uxananthu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-colors"
                  >
                    Dribbble
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileMenu;
