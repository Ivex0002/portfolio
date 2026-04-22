/* eslint-disable react-refresh/only-export-components */
import { createStackModal } from "@ivex0002/stack-modal";
import {
  defaultPreset,
  drawerPreset,
  minimalPreset,
} from "@ivex0002/stack-modal-presets";
import { useSyncExternalStore } from "react";
import { exampleModals } from "./exampleModals";
import { secondaryBtn } from "./styles";

const presets = {
  default: defaultPreset,
  minimal: minimalPreset,
  drawer: drawerPreset,
};

type PresetKey = keyof typeof presets;

type State = {
  modal: ReturnType<typeof createStackModal>;
  currentPreset: PresetKey;
};

let state: State | null = null;

function getState(): State {
  if (!state) {
    state = {
      currentPreset: "default",
      modal: createStackModal(exampleModals, presets.default),
    };
  }
  return state;
}

const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((l) => l());
}

export const modalStore = {
  getSnapshot: () => getState(),

  subscribe: (listener: () => void) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  },

  setPreset: (preset: PresetKey) => {
    state = {
      currentPreset: preset,
      modal: createStackModal(exampleModals, presets[preset]),
    };
    emit();
  },
};

export function useModal() {
  const state = useSyncExternalStore(
    modalStore.subscribe,
    modalStore.getSnapshot,
    modalStore.getSnapshot,
  );

  return {
    modal: state.modal,
    currentPreset: state.currentPreset,
    setPreset: modalStore.setPreset,
  };
}

export function PresetButtons() {
  const { currentPreset, setPreset } = useModal();

  return (
    <div style={{ marginBottom: "20px", display: "flex", gap: "8px" }}>
      {Object.keys(presets).map((presetName) => (
        <button
          key={presetName}
          onClick={() => setPreset(presetName as keyof typeof presets)}
          style={{
            ...secondaryBtn,
            background: currentPreset === presetName ? "#2563eb" : "#ffb351",
            color: currentPreset === presetName ? "#fff" : "#111",
          }}
        >
          {presetName}
        </button>
      ))}
    </div>
  );
}
