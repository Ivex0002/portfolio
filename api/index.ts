import { Hono } from "hono";
import { NotionAPI } from "notion-client";
import type { ExtendedRecordMap } from "notion-types";

const app = new Hono().basePath("/api");

const notion = new NotionAPI();

const PAGE_ID = "3457b65065bc807f802bd025c7806d3f";
const EXP_TIME = 1000 * 60 * 60;

let cache: ExtendedRecordMap | null = null;
let fetchedAt = 0;

app.get("/notion", async (c) => {
  const now = Date.now();

  if (cache && now - fetchedAt < EXP_TIME) {
    return c.json(cache);
  }

  const data = await notion.getPage(PAGE_ID);
  cache = data;
  fetchedAt = now;

  return c.json(data);
});

export default app;
