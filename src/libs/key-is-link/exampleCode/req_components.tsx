import type { JSX } from "react";
import { myApi } from "./api";
import {
  BodyWidget,
  BodyWithIdWidget,
  IdWidget,
  ReqWidget,
  WidgetWrapper,
} from "./base_components";

const raw_widgets = {
  GetAllPosts: () => <ReqWidget reqFn={() => myApi.posts.GET()} />,
  CreatePost: () => (
    <BodyWidget
      reqFn={(body) => myApi.posts.POST(body)}
      initialBody={{
        title: "foo",
        body: "bar",
        userId: 1,
      }}
    />
  ),
  GetOnePost: () => <IdWidget reqFn={(id) => myApi.posts(id).GET()} />,
  GetPostComments: () => (
    <IdWidget reqFn={(id) => myApi.posts(id).comments.GET()} />
  ),
  PutPost: () => (
    <BodyWithIdWidget
      reqFn={(id, body) => myApi.posts(id).PUT(body)}
      initialBody={{
        title: "foo",
        body: "bar",
        userId: 1,
      }}
    />
  ),
  PatchPost: () => (
    <BodyWithIdWidget
      reqFn={(id, body) => myApi.posts(id).PATCH(body)}
      initialBody={{
        title: "foo",
      }}
    />
  ),
  DELETEPost: () => <IdWidget reqFn={(id) => myApi.posts(id).DELETE()} />,
};

export const req_components = Object.entries(raw_widgets).reduce(
  (acc, [key, Component]) => {
    acc[key] = () => (
      <WidgetWrapper title={key}>
        <Component />
      </WidgetWrapper>
    );
    return acc;
  },
  {} as Record<string, () => JSX.Element>,
);
