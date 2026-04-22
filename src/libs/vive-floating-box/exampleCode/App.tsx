import { FloatingBox } from "vive-floating-box";
import "./App.css";
import { createRoot } from "react-dom/client";

const STRS = {
  default: "default",
  onlyActiveHover: "only active hover",
  moveRate: "high move rate",
};

export function App() {
  return (
    <>
      <div className="bg" />
      <div className="container">
        <FloatingBox>
          <ExampleChild str={STRS.default} />
        </FloatingBox>
        <FloatingBox onlyActiveHover={true}>
          <ExampleChild str={STRS.onlyActiveHover} />
        </FloatingBox>
        <FloatingBox moveRate={0.2} onlyActiveHover={true}>
          <ExampleChild str={STRS.moveRate} />
        </FloatingBox>
      </div>
    </>
  );
}

function ExampleChild({ str }: { str?: string }) {
  return <div className="example-child">{str}</div>;
}

createRoot(document.getElementById("root")!).render(<App />);
