import { NotionRenderer } from "react-notion-x";
import type { RouteConfig } from "../../routes/route";
import { useEffect, useMemo } from "react";
import { pickSubtree } from "./notionUtils";
import { animatedNotionToggle } from "./animatedNotionToggle";
import { Code } from "react-notion-x/build/third-party/code";
import { useNotionStore } from "../../store/storeNotion";

export function Notion({
  currentRoute,
}: {
  currentRoute: RouteConfig | undefined;
}) {
  const { recordMap } = useNotionStore();

  // 특정 블록 레코드맵으로 재구성
  const block = useMemo(() => {
    if (!recordMap) return null;
    if (!currentRoute?.notionBlockId) return null;

    const picked = pickSubtree(recordMap, currentRoute.notionBlockId);
    // console.log({ picked });
    return picked;
  }, [recordMap, currentRoute]);

  // 토글 작동시 애니메이션 적용
  useEffect(() => {
    if (!block) return;
    document.addEventListener("click", animatedNotionToggle);
    return () => document.removeEventListener("click", animatedNotionToggle);
  }, [block]);

  if (!block) return;

  return (
    <div className="min-w-250">
      <NotionRenderer
        recordMap={block}
        fullPage={false}
        components={{
          Code,
        }}
      />
    </div>
  );
}
