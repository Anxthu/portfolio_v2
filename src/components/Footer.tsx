import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Instagram, Twitter, Linkedin, Dribbble } from "lucide-react";

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
          <p className="text-xs text-muted-foreground mt-1">UI/UX Designer — Bangalore</p>
        </div>

        <div className="flex gap-6">
          {[
            { name: "Instagram", url: "https://www.instagram.com/ux.ananthu/", icon: Instagram },
            { name: "X", url: "https://x.com/ux_ananthu", icon: Twitter },
            { name: "LinkedIn", url: "https://www.linkedin.com/in/ananthapadmanabhan-nair/", icon: Linkedin },
            { name: "Dribbble", url: "https://dribbble.com/uxananthu", icon: Dribbble }
          ].map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#E52E2D] transition-colors"
              aria-label={social.name}
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        <div className="text-left md:text-right flex flex-col items-start md:items-end">
          <p className="text-xs text-muted-foreground mb-4">
            © {new Date().getFullYear()} All rights reserved
          </p>
          <Link to="/credits" className="text-xs text-muted-foreground hover:text-white transition-colors underline underline-offset-4 tracking-widest uppercase mb-4">
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
