import fs from "fs";
import { NotionAPI } from "notion-client";

const notion = new NotionAPI();

const PAGE_ID = "3457b65065bc807f802bd025c7806d3f";

(async () => {
  try {
    console.log("fetch start");

    const result = await notion.getPage(PAGE_ID);

    fs.writeFileSync(
      "./public/notion.json",
      JSON.stringify(result, null, 2),
      "utf-8",
    );

    console.log("save success");
  } catch (err) {
    console.error(err);
  }
})();
