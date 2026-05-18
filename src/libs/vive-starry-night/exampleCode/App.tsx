import { ViveStarryNight } from "vive-starry-night";
import { starConfigs } from "./starConfigs";
import { img1, img2 } from "./asset/imgs";

const BG = {
  img1,
  img2,
};

export function App() {
  return (
    <div
      style={{
        position: "fixed",
        inset: "0",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* default example */}
      <div style={{ height: "50%" }}>
        <ViveStarryNight />
      </div>
      {/* custom example */}
      <div style={{ height: "50%", position: "relative" }}>
        <img src={BG.img1.trim()} style={{ width: "100%", height: "100%" }} />
        <div style={{ position: "absolute", inset: "0 0 25% 0" }}>
          <ViveStarryNight
            style={{
              backgroundColor: "transparent",
            }}
            starConfigs={starConfigs}
          />
        </div>
      </div>
    </div>
  );
}
