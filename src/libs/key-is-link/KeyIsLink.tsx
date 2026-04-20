import AppCode from "./exampleCode/App.tsx?raw";
import AppCssCode from "./exampleCode/App.css?raw";
import ApiCode from "./exampleCode/api?raw";
import ReqFnCode from "./exampleCode/reqFn?raw";
import TypeLinkCode from "./exampleCode/typeLink?raw";
import { MySandpack } from "../../components/MySandpack";

export function KeyIsLink() {
  return (
    <MySandpack
      customSetup={{
        entry: "/App.tsx",
        dependencies: {
          "key-is-link": "1.0.131",
          axios: "1.13.2",
          react: "19.1.1",
          "react-dom": "19.1.1",
        },
      }}
      files={{
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
      }}
    />
  );
}
