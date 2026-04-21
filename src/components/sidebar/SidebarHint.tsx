import { motion } from "framer-motion";
import { SIDEBAR_MARGIN, type SidebarProps } from "./sidebarConfig";
import menuIcon from "../../asset/menu.png";
import { size } from "../../util/size";

export function SidebarHint({ isMouseLeft }: SidebarProps) {
  return (
    <div className="absolute">
      <motion.div
        initial={{
          x: isMouseLeft ? -SIDEBAR_MARGIN : SIDEBAR_MARGIN,
        }}
        animate={{
          x: isMouseLeft ? -SIDEBAR_MARGIN : SIDEBAR_MARGIN,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <HintIcon />
      </motion.div>
    </div>
  );
}

const HINT_SIZE = 12;
function HintIcon() {
  return <img src={menuIcon} className={size(HINT_SIZE)} />;
}
