// 엔드포인트 구조입니다.
// 각 문자열 키(posts, comments 등)들은 엔드포인트의 "/" 사이의 값들과 일치합니다.
// (id: number)와 같은 경우는 중간 파라미터입니다. posts/`id`/ 요청에서 `id`값에 해당합니다.
// GET, POST 등 대문자로 구성된 http 메서드들은 http 요청을 실행하는 트리거입니다.
export type MyLink = {
  posts: {
    GET: () => { res: Post[] };
    POST: (req: Partial<PostForm>) => { res: Post };

    (id: number): {
      GET: () => { res: Post };
      PUT: (req: PostForm) => { res: Post };
      PATCH: (req: Partial<PostForm>) => { res: Post };
      DELETE: () => { res: Record<string, never> };

      comments: {
        GET: () => { res: Comment[] };
      };
    };
  };
};

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export type PostForm = Omit<Post, "id">;

export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
