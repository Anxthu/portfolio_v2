import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./fonts.css";

// Prevent the browser from restoring the previous scroll position
if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
}

createRoot(document.getElementById("root")!).render(<App />);
