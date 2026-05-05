import { MySandpack } from "../../components/MySandpack";
import { useEffect, useState } from "react";
import type { SandpackProps } from "@codesandbox/sandpack-react";
import { SPOptions_StackModal } from "./files.for.sandpack";

export function StackModal() {
  const [sandpackOption, setSandpackOption] = useState<SandpackProps | null>(
    null,
  );

  useEffect(() => {
    (async () => {
      const sandpackOption = await SPOptions_StackModal.create({
        options: {
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
          externalResources: ["https://cdn.tailwindcss.com"],
        },
        customSetup: {
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
        },
      });

      setSandpackOption(sandpackOption);
    })();
  }, []);

  if (!sandpackOption) return;

  return <MySandpack {...sandpackOption} />;
}
