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
      <SandpackLayout className="h-180">
        <SandpackCodeEditor
          showTabs={props.options?.showTabs ?? true}
          showLineNumbers={props.options?.showLineNumbers}
          className="h-full"
          style={{ height: "100%" }}
        />
        <SandpackPreview
          showNavigator={props.options?.showNavigator}
          className="h-full"
          style={{ height: "100%" }}
        />
      </SandpackLayout>
    </SandpackProvider>
  );
}
