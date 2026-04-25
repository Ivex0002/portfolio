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
  notionBlockId?: string;
}

export const route: RouteConfig[] = [
  { name: "home", path: "/", component: Home },
  {
    name: "ViveFloatingBox",
    path: "/vive-floating-box",
    component: ViveFloatingBox,
    npmUrl: "https://www.npmjs.com/package/vive-floating-box",
    notionBlockId: "3467b65065bc800ca7ccccb305e43bcf",
  },
  {
    name: "KeyIsLink",
    path: "/key-is-link",
    component: KeyIsLink,
    npmUrl: "https://www.npmjs.com/package/key-is-link",
    notionBlockId: "3467b65065bc80f69a11d69cff46f655",
  },
  {
    name: "StripeArt",
    path: "/stripe-art",
    component: StripeArt,
    npmUrl: "https://www.npmjs.com/package/stripe-art",
    notionBlockId: "3477b65065bc80c18a8cd21f4a82183f",
  },
  {
    name: "StackModal",
    path: "/stack-modal",
    component: StackModal,
    npmUrl: "https://www.npmjs.com/package/@ivex0002/stack-modal",
    notionBlockId: "3477b65065bc808a8354dbb82ab2f45c",
  },
];
