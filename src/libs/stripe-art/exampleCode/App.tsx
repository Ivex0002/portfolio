import { createRoot } from "react-dom/client";
import { Background } from "./Background";

export function App() {
  return <Background />;
}

createRoot(document.getElementById("root")!).render(<App />);
