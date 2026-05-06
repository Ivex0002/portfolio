import { useEffect, useRef } from "react";
import type { ImageConfig } from "./images";
import { CreateStripeArt } from "stripe-art";
import { motion } from "framer-motion";

// 실제 각 이미지를 변환 및 렌더링하는 컴포넌트입니다.
export function StripeLayer({ config }: { config: ImageConfig }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const {
      src,
      backColor,
      lineColor,
      lineGap,
      maxLineWidth,
      contrastMidpoint,
      contrastStrength,
    } = config;

    CreateStripeArt({
      target: containerRef.current,
      image: src,
      backColor: backColor,
      lineColor: lineColor,
      lineGap: lineGap,
      maxLineWidth: maxLineWidth,
      contrastMidpoint: contrastMidpoint,
      contrastStrength: contrastStrength,
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
