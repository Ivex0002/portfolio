import { type SandpackProps } from "@codesandbox/sandpack-react";

type FileNames = "/App.css" | "/App.tsx";

type StrictOptions = Omit<
  SandpackProps["options"],
  "activeFile" | "visibleFiles"
> & {
  activeFile?: FileNames;
  visibleFiles?: FileNames[];
};

type StrictSandpackProps = Omit<SandpackProps, "options"> & {
  options?: StrictOptions;
};

// create Sandpack options with auto complete
export const SPOptions_ViveFloatingBox = {
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
const modules = import.meta.glob<string>("./exampleCode/*", {
  query: "?raw",
  import: "default",
});

async function getRawFiles() {
  const files = {} as Record<FileNames, string>;

  for (const [path, loader] of Object.entries(modules)) {
    const name = path.split("/").pop() as FileNames;

    files[name] = await loader();
  }

  return files;
}

