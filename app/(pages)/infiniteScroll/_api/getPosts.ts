export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const getPostList = async ({
  page,
}: {
  page: number;
}): Promise<Post[]> => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`
  );

  const json = await res.json();

  return json;
};
