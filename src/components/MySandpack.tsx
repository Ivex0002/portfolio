import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview,
  type SandpackProps,
} from "@codesandbox/sandpack-react";

export function MySandpack(props: SandpackProps) {
  return (
    <SandpackProvider {...props}>
      <SandpackLayout>
        <SandpackCodeEditor
          showTabs={props.options?.showTabs ?? true}
          showLineNumbers={props.options?.showLineNumbers}
        />
        <SandpackPreview showNavigator={props.options?.showNavigator} />
      </SandpackLayout>
    </SandpackProvider>
  );
}
