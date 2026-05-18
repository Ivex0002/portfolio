import { useEffect, useState } from "react";
import type { SandpackProps } from "@codesandbox/sandpack-react";
import { SPOptions_ViveStarryNight } from "./files.for.sandpack";
import { MySandpack } from "../../components/MySandpack";
import img1Base64 from "./exampleCode/asset/img1.txt?raw";
import img2Base64 from "./exampleCode/asset/img2.txt?raw";

const imgsCode = `
  export const img1 = "${img1Base64.trim()}";
  export const img2 = "${img2Base64.trim()}";
`;

export function ViveStarryNight() {
  const [sandpackOption, setSandpackOption] = useState<SandpackProps | null>(
    null,
  );

  useEffect(() => {
    (async () => {
      const sandpackOption = await SPOptions_ViveStarryNight.create({
        options: {
          activeFile: "/App.tsx",
          visibleFiles: ["/App.tsx", "/starConfigs.ts", "/customShape.ts"],
        },
        customSetup: {
          entry: "/main.tsx",
          dependencies: {
            "vive-starry-night": "^0.0.3",
            react: "^19.2.0",
            "react-dom": "^19.2.0",
          },
        },
      });

      setSandpackOption(sandpackOption);
    })();
  }, []);

  if (!sandpackOption) return;

  return (
    <MySandpack
      {...sandpackOption}
      files={{
        ...sandpackOption.files,

        "/asset/imgs.ts": {
          code: imgsCode,
        },
      }}
    />
  );
}
