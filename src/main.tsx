import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App.tsx";
import "react-notion-x/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";

createRoot(document.getElementById("root")!).render(<App />);
