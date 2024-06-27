"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import React from "react";
import { getPostList } from "../_api/getPosts";

const Item = ({ id, title }: { id: number; title: string }) => {
  return (
    <div style={{ border: "1px #eee solid", height: 300 }}>
      {id}.{title}
    </div>
  );
};

export default function PostList() {
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["postList"],
      queryFn: ({ pageParam = 1 }) => getPostList({ page: pageParam }),
      getNextPageParam: (lastPage) => {
        if (lastPage.length > 0) {
          return Math.ceil(lastPage[0].id / 10) + 1;
        }

        return undefined;
      },
    });

  return (
    <>
      <ul>
        {/* {data?.pages[0].map((post) => (
          <li key={post.id}>
            <Item id={post.id} title={post.title} />
          </li>
        ))} */}

        {data?.pages.map((page) =>
          page.map((post) => (
            <li key={post.id}>
              <Item id={post.id} title={post.title} />
            </li>
          ))
        )}
      </ul>

      {hasNextPage && <button onClick={() => fetchNextPage()}>더보기</button>}
      {isFetchingNextPage ? "loading..." : null}
    </>
  );
}
