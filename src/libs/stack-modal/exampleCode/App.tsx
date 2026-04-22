import { TwFmExample } from "./examples/custom/TwFmExample";
import { PresetExample } from "./examples/preset/presetExample";

export function App() {
  return (
    <>
      <h1>custom : tailwind 와 framer motion 을 활용한 예시입니다.</h1>
      <TwFmExample />
      <hr />
      <h1>preset : 모노레포로 제공되는 프리셋 3개입니다. </h1>
      <PresetExample />
      <hr />
    </>
  );
}
