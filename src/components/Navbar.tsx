import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [time, setTime] = useState("");
  const location = useLocation();

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const istTime = now.toLocaleTimeString("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      setTime(istTime);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const navItems = [
    { label: "HOME", path: "/" },
    { label: "WORKS", path: "/works" },
    { label: "ARCHIVES", path: "/archives" },
    { label: "RESUME", path: "/resume" },
    { label: "BLOG", path: "/blog" },
    { label: "CONTACT", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between section-padding py-5 bg-background/80 backdrop-blur-md">
      <Link to="/" className="text-sm font-bold tracking-wide text-foreground">
        ANANTHU©
      </Link>

      <div className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`nav-link font-semibold ${location.pathname === item.path ? "nav-link-active" : ""}`}
          >
            {item.label}
          </Link>
        ))}
      </div>

      <span className="text-xs tracking-wide text-muted-foreground font-bold hidden sm:block">
        IST {time}
      </span>

      <MobileMenu />
    </nav>
  );
};

export default Navbar;
