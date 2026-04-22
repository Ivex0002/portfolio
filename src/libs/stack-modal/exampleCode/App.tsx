import { TwFmExample } from "./examples/custom/TwFmExample";
import { PresetExample } from "./examples/preset/presetExample";

export function App() {
  return (
    <>
      <h1>custom : tailwind + framer motion</h1>
      <TwFmExample />
      <hr />
      <h1>preset : try 3 cases(drawer, minimal, default)</h1>
      <PresetExample />
      <hr />
    </>
  );
}
