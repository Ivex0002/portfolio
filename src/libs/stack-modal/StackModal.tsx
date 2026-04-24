import AppCode from "./exampleCode/App.tsx?raw";
import MainCode from "./exampleCode/main?raw";
import IndexCssCode from "./exampleCode/index.css?raw";
import ViteConfigCode from "./exampleCode/vite.config?raw";

import TwFmExampleCode from "./exampleCode/examples/custom/TwFmExample.tsx?raw";
import TwfmModalLayoutExampleCode from "./exampleCode/examples/custom/twfmModalLayoutExample.tsx?raw";
import PresetExampleCode from "./exampleCode/examples/preset/presetExample.tsx?raw";
import ExampleModalsCode from "./exampleCode/examples/preset/exampleModals.tsx?raw";
import ModalStoreCode from "./exampleCode/examples/preset/modalStore.tsx?raw";
import StylesCode from "./exampleCode/examples/preset/styles.ts?raw";

import { MySandpack } from "../../components/MySandpack";

export function StackModal() {
  return (
    <MySandpack
      options={{
        externalResources: ["https://cdn.tailwindcss.com"],
        activeFile: "/App.tsx",
        visibleFiles: [
          "/App.tsx",
          "/examples/custom/TwFmExample.tsx",
          "/examples/custom/twfmModalLayoutExample.tsx",
          "/examples/preset/presetExample.tsx",
          "/examples/preset/exampleModals.tsx",
          "/examples/preset/modalStore.tsx",
          "/examples/preset/styles.ts",
        ],
      }}
      customSetup={{
        entry: "/main.tsx",
        dependencies: {
          "@ivex0002/stack-modal": "^1.0.3",
          "@ivex0002/stack-modal-presets": "^1.0.3",
          "framer-motion": "^12.23.26",
          react: "^19.2.0",
          "react-dom": "^19.2.0",
          tailwindcss: "^4.1.18",
          "@tailwindcss/vite": "^4.1.18",
        },
      }}
      files={{
        "/App.tsx": {
          code: AppCode,
        },
        "/main.tsx": {
          code: MainCode,
        },
        "/index.css": {
          code: IndexCssCode,
        },
        "/vite.config.ts": {
          code: ViteConfigCode,
        },

        "/examples/custom/TwFmExample.tsx": {
          code: TwFmExampleCode,
        },
        "/examples/custom/twfmModalLayoutExample.tsx": {
          code: TwfmModalLayoutExampleCode,
        },
        "/examples/preset/presetExample.tsx": {
          code: PresetExampleCode,
        },
        "/examples/preset/exampleModals.tsx": {
          code: ExampleModalsCode,
        },
        "/examples/preset/modalStore.tsx": {
          code: ModalStoreCode,
        },
        "/examples/preset/styles.ts": {
          code: StylesCode,
        },
      }}
    />
  );
}
