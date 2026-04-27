import { motion } from "framer-motion";
import {
  SIDEBAR_MARGIN,
  SIDEBAR_WIDTH,
  type SidebarProps,
} from "./sidebarConfig";
import { route } from "../../routes/route";
import { useNavigate } from "react-router-dom";

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
  return (
    <>
      {route.map(({ name, path }) => (
        <motion.button
          key={name}
          onClick={() => {
            // console.log({ path });
            navi(path);
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 rounded-lg bg-white text-gray-800 font-medium border border-blue-100 hover:border-blue-300"
        >
          {name}
        </motion.button>
      ))}
    </>
  );
}
