import axios from "axios";
import type { ExtendedRecordMap } from "notion-types";
import { useSyncExternalStore } from "react";

type State = {
  recordMap: ExtendedRecordMap | null;
  initialized: boolean;
};

let state: State = {
  recordMap: null,
  initialized: false,
};

const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((listener) => listener());
}

export async function getNotionDoc() {
  if (state.initialized) return;

  const { data } = await axios.get<ExtendedRecordMap>("/api/notion");
  // console.log(data);

  state = {
    recordMap: data,
    initialized: true,
  };

  emit();
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot() {
  return state;
}

export function useNotionStore() {
  return useSyncExternalStore(subscribe, getSnapshot);
}
