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
