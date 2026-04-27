import { useEffect } from "react";
import { getNotionDoc } from "../store/storeNotion";

export function InitNotion() {
  useEffect(() => {
    getNotionDoc();
  }, []);

  return null;
}
