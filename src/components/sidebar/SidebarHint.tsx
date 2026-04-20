import { motion } from "framer-motion";
import { SIDEBAR_MARGIN, type SidebarProps } from "./sidebarConfig";

export function SidebarHint({ isMouseLeft }: SidebarProps) {
  return (
    <motion.div
      initial={{
        x: isMouseLeft ? SIDEBAR_MARGIN : -SIDEBAR_MARGIN,
      }}
      animate={{
        x: isMouseLeft ? SIDEBAR_MARGIN : -SIDEBAR_MARGIN,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    ></motion.div>
  );
}
