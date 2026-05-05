import { MySandpack } from "../../components/MySandpack";
import { useEffect, useState } from "react";
import type { SandpackProps } from "@codesandbox/sandpack-react";
import { SPOptions_KeyIsLink } from "./files.for.sandpack";

export function KeyIsLink() {
  const [sandpackOption, setSandpackOption] = useState<SandpackProps | null>(
    null,
  );

  useEffect(() => {
    (async () => {
      const sandpackOption = await SPOptions_KeyIsLink.create({
        options: {
          activeFile: "/api.ts",
          visibleFiles: [
            "/api.ts",
            "/typeLink.ts",
            "/reqFn.ts",
            "/App.tsx",
            "/req_components.tsx",
            "/base_components.tsx",
          ],
        },
        customSetup: {
          entry: "/main.tsx",
          dependencies: {
            "key-is-link": "1.0.131",
            axios: "1.13.2",
            react: "19.1.1",
            "react-dom": "19.1.1",
          },
        },
      });

      setSandpackOption(sandpackOption);
    })();
  }, []);

  if (!sandpackOption) return;

  return <MySandpack {...sandpackOption} />;
}
