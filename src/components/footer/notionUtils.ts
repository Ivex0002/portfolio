import type { ExtendedRecordMap } from "notion-types";
export function normalizeNotionId(id: string) {
  if (id.includes("-")) return id;

  return [
    id.slice(0, 8),
    id.slice(8, 12),
    id.slice(12, 16),
    id.slice(16, 20),
    id.slice(20),
  ].join("-");
}

export function pickSubtree(
  recordMap: ExtendedRecordMap,
  rootId: string,
): ExtendedRecordMap {
  const pickedBlocks: ExtendedRecordMap["block"] = {};

  function dfs(id: string) {
    const record = recordMap.block[id];
    if (!record) return;

    pickedBlocks[id] = record;
    // console.log({ pickedBlocks });

    const raw = record.value;
    const block = "role" in raw && "value" in raw ? raw.value : raw;

    block.content?.forEach(dfs);
  }

  dfs(rootId);

  return {
    ...recordMap,
    block: pickedBlocks,
  };
}

// type WrappedBlock =
//   | Block
//   | {
//       role: string;
//       value: Block;
//     };

// export function getBlock(raw: WrappedBlock): Block {
//   return "value" in raw ? raw.value : raw;
// }
