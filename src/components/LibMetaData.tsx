import { FloatingBox } from "vive-floating-box";
import type { RouteConfig } from "../routes/route";
import npmIcon from "../asset/npm-icon.png";

export function LibMetaData({
  currentRoute,
}: {
  currentRoute: RouteConfig | undefined;
}) {
  if (!currentRoute || !currentRoute.npmUrl) return;

  const { name, npmUrl } = currentRoute;
  return (
    <div className="ml-10 mb-2">
      <FloatingBox onlyActiveHover={true}>
        <a href={npmUrl} title={`npm_link:${npmUrl}`} target="_blank">
          <div className="blur-bg px-5 py-2 rounded-full flex flex-row items-center gap-1.5">
            <img src={npmIcon} className="w-5 h-5" />
            <span>{name}</span>
          </div>
        </a>
      </FloatingBox>
    </div>
  );
}
