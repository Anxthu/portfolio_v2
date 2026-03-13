import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Instagram, Linkedin, Dribbble } from "lucide-react";

const Footer = () => {
  return (
    <footer className="section-padding py-16 border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row items-start md:items-center justify-between gap-12"
      >
        <div>
          <p className="text-sm font-semibold text-foreground mb-1">ANANTHU©</p>
          <p className="text-xs text-muted-foreground mb-4">UI/UX Designer — Bangalore</p>
          
          <div className="flex gap-5 mt-4">
            {[
              { name: "Instagram", url: "https://www.instagram.com/ux.ananthu/", icon: Instagram },
              { 
                name: "X", 
                url: "https://x.com/ux_ananthu", 
                icon: () => (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                  </svg>
                )
              },
              { name: "LinkedIn", url: "https://www.linkedin.com/in/ananthapadmanabhan-nair/", icon: Linkedin },
              { name: "Dribbble", url: "https://dribbble.com/uxananthu", icon: Dribbble }
            ].map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#E52E2D] transition-colors duration-300"
                aria-label={social.name}
              >
                {typeof social.icon === 'function' ? (
                  <social.icon />
                ) : (
                  <social.icon className="w-[18px] h-[18px]" strokeWidth={1.5} />
                )}
              </a>
            ))}
          </div>
        </div>

        <div className="text-left md:text-right flex flex-col items-start md:items-end gap-3">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved
          </p>
          <Link to="/credits" className="text-xs text-muted-foreground hover:text-white transition-colors underline underline-offset-4 tracking-widest uppercase">
            Credits
          </Link>
          <p className="text-xs text-foreground/70 italic max-w-xs">
            Crafting digital experiences with precision and purpose
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
