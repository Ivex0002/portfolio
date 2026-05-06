import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { images } from "./images";
import { StripeLayer } from "./StripeLayer";

export function Background() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 그림간의 전환을 위한 코드입니다.
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    // 화면 전체 속성입니다.
    // width, height 를 조절하면 그림의 크기를 조절할 수 있습니다.
    <div
      style={{
        position: "fixed",
        inset: "0",
        width: "760px",
        height: "730px",
        backgroundColor: "#000000",
      }}
    >
      <AnimatePresence mode="sync">
        <StripeLayer
          key={images[currentIndex].id}
          config={images[currentIndex]}
        />
      </AnimatePresence>
    </div>
  );
}
