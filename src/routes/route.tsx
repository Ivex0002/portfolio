import type { ComponentType } from "react";
import { KeyIsLink } from "../libs/key-is-link/KeyIsLink";
import { Home } from "../pages/Home";
import { ViveFloatingBox } from "../libs/vive-floating-box/ViveFloatingBox";
import { StripeArt } from "../libs/stripe-art/StripeArt";
import { StackModal } from "../libs/stack-modal/StackModal";

export interface RouteConfig {
  name: string;
  path: string;
  component: ComponentType;
  npmUrl?: string;
}

export const route: RouteConfig[] = [
  { name: "home", path: "/", component: Home },
  {
    name: "ViveFloatingBox",
    path: "/vive-floating-box",
    component: ViveFloatingBox,
    npmUrl: "https://www.npmjs.com/package/vive-floating-box",
  },
  {
    name: "KeyIsLink",
    path: "/key-is-link",
    component: KeyIsLink,
    npmUrl: "https://www.npmjs.com/package/key-is-link",
  },
  {
    name: "StripeArt",
    path: "/stripe-art",
    component: StripeArt,
    npmUrl: "https://www.npmjs.com/package/stripe-art",
  },
  {
    name: "StackModal",
    path: "/stack-modal",
    component: StackModal,
    npmUrl: "https://www.npmjs.com/package/@ivex0002/stack-modal",
  },
];
