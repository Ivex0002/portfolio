import "./App.css";
import { req_components } from "./req_components";

export function App() {
  return (
    <>
      <div className="bg" />
      <div className="container">
        {Object.values(req_components).map((Comp, idx) => (
          <Comp key={idx} />
        ))}
      </div>
    </>
  );
}
