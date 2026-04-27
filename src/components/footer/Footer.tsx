import type { RouteConfig } from "../../routes/route";
import { Notion } from "./Notion";

export function Footer({
  currentRoute,
}: {
  currentRoute: RouteConfig | undefined;
}) {
  return (
    <div className="w-full p-8">
      <Notion currentRoute={currentRoute} />
    </div>
  );
}
