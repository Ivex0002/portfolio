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
export const images = [
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

export type ImageConfig = (typeof images)[0];
