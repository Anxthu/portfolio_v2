import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";

const Footer = () => {
  return (
    <footer className="section-padding py-16 border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
      >
        <div>
          <p className="text-sm font-semibold text-foreground">ANANTHU©</p>
          <p className="text-xs text-muted-foreground mt-1">UI/UX Designer — Bangalore City</p>
        </div>

        <div className="flex flex-wrap gap-4 md:gap-8">
          {[
            { name: "Instagram", url: "https://www.instagram.com/ux.ananthu/" },
            { name: "X", url: "https://x.com/ux_ananthu" },
            { name: "LinkedIn", url: "https://www.linkedin.com/in/ananthapadmanabhan-nair/" },
            { name: "Dribbble", url: "https://dribbble.com/uxananthu" }
          ].map((social) => (
            <MagneticButton key={social.name}>
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link"
              >
                {social.name}
              </a>
            </MagneticButton>
          ))}
        </div>

        <div className="text-right">
          <p className="text-xs text-muted-foreground mb-2">
            © {new Date().getFullYear()} All rights reserved
          </p>
          <p className="text-xs text-muted-foreground mb-2">
            Photography by <a href="https://unsplash.com/@zablanca_clicks" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors underline">zablanca_clicks</a> on Unsplash
          </p>
          <p className="text-xs text-muted-foreground mb-4">
            Ambient Drone UI Sound by ANANTHU
          </p>
          <p className="text-xs text-foreground/70 italic max-w-xs">
            Crafting digital experiences with precision and purpose
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
