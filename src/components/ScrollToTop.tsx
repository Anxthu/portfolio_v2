import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        // Immediate scroll to top avoiding smooth scrolling behavior momentarily
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant",
        });

        // Fallback for tricky mount timings (e.g. framer-motion exit animations or Lenis initializations)
        const timeout = setTimeout(() => {
            window.scrollTo({ top: 0, left: 0, behavior: "instant" });
        }, 50);

        return () => clearTimeout(timeout);
    }, [pathname]);

    return null;
}
