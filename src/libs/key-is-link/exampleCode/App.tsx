import "./App.css";
import {
  DELETEPost,
  GetAllPosts,
  GetOnePost,
  GetPostComments,
  PatchPost,
  CreatePost,
  PutPost,
} from "./req_components";

export function App() {
  return (
    <>
      <div className="bg" />
      <div className="container">
        <GetAllPosts />
        <GetOnePost />
        <GetPostComments />
        <CreatePost />
        <PutPost />
        <PatchPost />
        <DELETEPost />
      </div>
    </>
  );
}
