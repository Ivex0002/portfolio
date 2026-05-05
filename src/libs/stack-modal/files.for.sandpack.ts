import { type SandpackProps } from "@codesandbox/sandpack-react";

type FileNames = "/App.tsx" | "/examples/custom/TwFmExample.tsx" | "/examples/custom/twfmModalLayoutExample.tsx" | "/examples/preset/exampleModals.tsx" | "/examples/preset/modalStore.tsx" | "/examples/preset/presetExample.tsx" | "/examples/preset/styles.ts" | "/index.css" | "/main.tsx" | "/vite.config.ts";

type StrictOptions = Omit<
  NonNullable<SandpackProps["options"]>,
  "activeFile" | "visibleFiles"
> & {
  activeFile?: FileNames;
  visibleFiles?: FileNames[];
};

type StrictSandpackProps = Omit<SandpackProps, "options"> & {
  options?: StrictOptions;
};

// create Sandpack options with auto complete
export const SPOptions_StackModal = {
  create : createSandpackOptions
}

async function createSandpackOptions(
  props?: StrictSandpackProps,
): Promise<SandpackProps> {
  const files = await getRawFiles();
  return {
    ...props,
    files: files,
  };
}

// raw files for runtime
const modules = import.meta.glob<string>("./exampleCode/**/*", {
  query: "?raw",
  import: "default",
});

async function getRawFiles() {
  const ROOT = "./exampleCode";
  const files = {} as Record<FileNames, string>;

  for (const [path, loader] of Object.entries(modules)) {
    const name = path.slice(ROOT.length) as FileNames;

    files[name] = await loader();
  }

  return files;
}

