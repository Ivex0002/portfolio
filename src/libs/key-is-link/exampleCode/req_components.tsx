import { myApi } from "./api";
import {
  BodyWidget,
  BodyWithIdWidget,
  IdWidget,
  ReqWidget,
  WidgetWrapper,
} from "./base_components";

export function GetAllPosts() {
  return (
    <WidgetWrapper label="GetAllPosts">
      <ReqWidget reqFn={() => myApi.posts.GET()} />
    </WidgetWrapper>
  );
}
export function CreatePost() {
  return (
    <WidgetWrapper label="CreatePost">
      <BodyWidget
        reqFn={(body) => myApi.posts.POST(body)}
        initialBody={{
          title: "foo",
          body: "bar",
          userId: 1,
        }}
      />
    </WidgetWrapper>
  );
}
export function GetOnePost() {
  return (
    <WidgetWrapper label="GetOnePost">
      <IdWidget reqFn={(id) => myApi.posts(id).GET()} />
    </WidgetWrapper>
  );
}
export function GetPostComments() {
  return (
    <WidgetWrapper label="GetPostComments">
      <IdWidget reqFn={(id) => myApi.posts(id).comments.GET()} />
    </WidgetWrapper>
  );
}
export function PutPost() {
  return (
    <WidgetWrapper label="PutPost">
      <BodyWithIdWidget
        reqFn={(id, body) => myApi.posts(id).PUT(body)}
        initialBody={{
          title: "foo",
          body: "bar",
          userId: 1,
        }}
      />
    </WidgetWrapper>
  );
}
export function PatchPost() {
  return (
    <WidgetWrapper label="PatchPost">
      <BodyWithIdWidget
        reqFn={(id, body) => myApi.posts(id).PATCH(body)}
        initialBody={{
          title: "foo",
        }}
      />
    </WidgetWrapper>
  );
}
export function DELETEPost() {
  return (
    <WidgetWrapper label="DELETEPost">
      <IdWidget reqFn={(id) => myApi.posts(id).DELETE()} />
    </WidgetWrapper>
  );
}
