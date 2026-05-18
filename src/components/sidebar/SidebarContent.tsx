import { motion } from "framer-motion";
import {
  SIDEBAR_MARGIN,
  SIDEBAR_WIDTH,
  type SidebarProps,
} from "./sidebarConfig";
import { route } from "../../routes/route";
import { useLocation, useNavigate } from "react-router-dom";
import { Check } from "lucide-react";

export function SidebarContent({ isMouseLeft }: SidebarProps) {
  return (
    <motion.div
      initial={{
        x: isMouseLeft ? SIDEBAR_WIDTH : -SIDEBAR_WIDTH - SIDEBAR_MARGIN,
      }}
      animate={{
        x: isMouseLeft ? SIDEBAR_MARGIN : -SIDEBAR_WIDTH - SIDEBAR_MARGIN,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div
        className={`flex flex-col gap-2 blur-bg p-5 rounded-2xl`}
        style={{ width: `${SIDEBAR_WIDTH}px` }}
      >
        <SidebarButtons />
      </div>
    </motion.div>
  );
}

function SidebarButtons() {
  const navi = useNavigate();

  const { pathname } = useLocation();

  return (
    <>
      {route.map(({ name, path }) => {
        const isActive = pathname === path;

        return (
          <motion.button
            key={name}
            onClick={() => {
              navi(path);
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative px-4 py-2 rounded-lg bg-white text-gray-800 font-medium border border-blue-100 hover:border-blue-300"
          >
            {isActive && <CheckIcon />}
            {name}
          </motion.button>
        );
      })}
    </>
  );
}

function CheckIcon() {
  return (
    <div className="absolute mx-auto top-3">
      <Check size={14} strokeWidth={3} />
    </div>
  );
}
