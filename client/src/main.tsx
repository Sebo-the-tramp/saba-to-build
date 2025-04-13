import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { motion } from "framer-motion";

// Add framer-motion's reduce motion setting for accessibility
motion.prefersReducedMotion = true;

createRoot(document.getElementById("root")!).render(<App />);
