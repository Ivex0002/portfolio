import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CreateStripeArt } from "stripe-art";

import { img1, img2, img3 } from "./assets/imgs";

const colors = {
  darkTeal: "#002020",
  white: "#FFFFFF",
  darkRed: "#1a0000",
  gold: "#FFD700",
  darkBlue: "#000033",
  cyan: "#00FFFF",
} as const;

// 이미지 설정 객체입니다.
// backColor, lineColor, lineGap 등을 변경하실 수 있습니다.
const images = [
  {
    id: "img1",
    src: img1,
    backColor: colors.darkTeal,
    lineColor: colors.white,
    lineGap: 10,
    maxLineWidth: 8,
    contrastMidpoint: 0.5,
    contrastStrength: 1.2,
  },
  {
    id: "img2",
    src: img2,
    backColor: colors.darkRed,
    lineColor: colors.gold,
    lineGap: 12,
    maxLineWidth: 9,
    contrastMidpoint: 0.5,
    contrastStrength: 2.5,
  },
  {
    id: "img3",
    src: img3,
    backColor: colors.darkBlue,
    lineColor: colors.cyan,
    lineGap: 8,
    maxLineWidth: 7,
    contrastMidpoint: 0.5,
    contrastStrength: 1.8,
  },
];

type ImageConfig = (typeof images)[0];

// 실제 이미지를 구현하는 컴포넌트입니다.
function StripeLayer({ config }: { config: ImageConfig }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    CreateStripeArt({
      target: containerRef.current,
      image: config.src,
      backColor: config.backColor,
      lineColor: config.lineColor,
      lineGap: config.lineGap,
      maxLineWidth: config.maxLineWidth,
      contrastMidpoint: config.contrastMidpoint,
      contrastStrength: config.contrastStrength,
      dpr: 4,
    });
  }, [config]);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      style={{
        position: "absolute",
        inset: "0",
        width: "100%",
        height: "100%",
      }}
    />
  );
}

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
