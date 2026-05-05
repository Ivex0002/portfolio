import { MySandpack } from "../../components/MySandpack";
import { useEffect, useState } from "react";
import type { SandpackProps } from "@codesandbox/sandpack-react";
import { SPOptions_ViveFloatingBox } from "./files.for.sandpack";

export function ViveFloatingBox() {
  const [sandpackOption, setSandpackOption] = useState<SandpackProps | null>(
    null,
  );

  useEffect(() => {
    (async () => {
      const sandpackOption = await SPOptions_ViveFloatingBox.create({
        options: {
          activeFile: "/App.tsx",
          visibleFiles: ["/App.tsx", "/App.css"],
        },
        customSetup: {
          entry: "/App.tsx",
          dependencies: {
            "vive-floating-box": "^1.1.3",
            react: "^19.2.0",
            "react-dom": "^19.2.0",
          },
        },
      });

      setSandpackOption(sandpackOption);
    })();
  }, []);

  if (!sandpackOption) return;

  return <MySandpack {...sandpackOption} />;
}
