import { MySandpack } from "../../components/MySandpack";
import AppCode from "./exampleCode/App?raw";
import AppCssCode from "./exampleCode/App.css?raw";

export function ViveFloatingBox() {
  return (
    <MySandpack
      customSetup={{
        entry: "/App.tsx",
        dependencies: {
          "vive-floating-box": "^1.1.3",
          react: "^19.2.0",
          "react-dom": "^19.2.0",
        },
      }}
      files={{
        "/App.tsx": {
          code: AppCode,
        },
        "/App.css": {
          code: AppCssCode,
        },
      }}
    />
  );
}
