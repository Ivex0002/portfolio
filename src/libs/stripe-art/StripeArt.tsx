import { MySandpack } from "../../components/MySandpack";
import AppCode from "./exampleCode/App.tsx?raw";
import BGCode from "./exampleCode/Background?raw";

// sandpack에서 dependencies로 StripeArt 못읽어옴
// >> dist 파일 통째로 던져주기
import StripeArtDist from "../../../node_modules/stripe-art/dist/index.mjs?raw";
import StripeArtDistType from "../../../node_modules/stripe-art/dist/index?raw";

import img1Base64 from "./exampleCode/assets/img1.txt?raw";
import img2Base64 from "./exampleCode/assets/img2.txt?raw";
import img3Base64 from "./exampleCode/assets/img3.txt?raw";

export function StripeArt() {
  return (
    <MySandpack
      customSetup={{
        entry: "/App.tsx",
        dependencies: {
          "framer-motion": "^12.23.24",
          react: "^19.2.0",
          "react-dom": "^19.2.0",
          "stripe-art": "^1.0.4",
        },
      }}
      files={{
        "/App.tsx": {
          code: AppCode,
        },
        "/Background.tsx": {
          code: BGCode,
        },
        "/assets/imgs.ts": {
          code: `
            export const img1 = "${img1Base64.trim()}";
            export const img2 = "${img2Base64.trim()}";
            export const img3 = "${img3Base64.trim()}";
          `,
        },

        "/node_modules/stripe-art/index.js": { code: StripeArtDist },
        "/node_modules/stripe-art/index.d.ts": { code: StripeArtDistType },
        "/node_modules/stripe-art/package.json": {
          code: JSON.stringify({
            name: "stripe-art",
            types: "./index.d.ts",
            main: "./index.js",
          }),
        },
      }}
    />
  );
}
