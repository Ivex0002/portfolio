import { useEffect, useState } from "react";
import { SidebarContent } from "./SidebarContent";
import { SidebarHint } from "./SidebarHint";
import { SIDEBAR_WIDTH } from "./sidebarConfig";

export function Sidebar() {
  const [isMouseLeft, setIsMouseLeft] = useState<boolean>(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const threshold = Math.min(window.innerWidth / 5, SIDEBAR_WIDTH);
      const isLeft = e.clientX < threshold;
      setIsMouseLeft(isLeft);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <>
      <SidebarContent isMouseLeft={isMouseLeft} />
      <SidebarHint isMouseLeft={isMouseLeft} />
    </>
  );
}
