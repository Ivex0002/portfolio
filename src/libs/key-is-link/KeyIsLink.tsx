import MainCode from "./exampleCode/main.tsx?raw";
import AppCode from "./exampleCode/App.tsx?raw";
import AppCssCode from "./exampleCode/App.css?raw";
import ApiCode from "./exampleCode/api?raw";
import ReqFnCode from "./exampleCode/reqFn?raw";
import TypeLinkCode from "./exampleCode/typeLink?raw";
import BaseComponentsCode from "./exampleCode/base_components.tsx?raw";
import ReqComponentsCode from "./exampleCode/req_components.tsx?raw";
import { MySandpack } from "../../components/MySandpack";

export function KeyIsLink() {
  return (
    <MySandpack
      options={{
        activeFile: "/App.tsx",
        visibleFiles: [
          "/App.tsx",
          "/typeLink.ts",
          "/req_components.tsx",
          "/base_components.tsx",
          "/reqFn.ts",
          "/api.ts",
        ],
      }}
      customSetup={{
        entry: "/main.tsx",
        dependencies: {
          "key-is-link": "1.0.131",
          axios: "1.13.2",
          react: "19.1.1",
          "react-dom": "19.1.1",
        },
      }}
      files={{
        "/main.tsx": {
          code: MainCode,
        },
        "/App.tsx": {
          code: AppCode,
        },
        "/App.css": {
          code: AppCssCode,
        },
        "/api.ts": {
          code: ApiCode,
        },
        "/reqFn.ts": {
          code: ReqFnCode,
        },
        "/typeLink.ts": {
          code: TypeLinkCode,
        },
        "/base_components.tsx": {
          code: BaseComponentsCode,
        },
        "/req_components.tsx": {
          code: ReqComponentsCode,
        },
      }}
    />
  );
}
