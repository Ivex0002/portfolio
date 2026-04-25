import type { RouteConfig } from "../../routes/route";
import { Notion } from "./Notion";

export function Footer({
  currentRoute,
}: {
  currentRoute: RouteConfig | undefined;
}) {
  return (
    <div className="w-full pb-4 px-50">
      <Notion currentRoute={currentRoute} />
    </div>
  );
}
