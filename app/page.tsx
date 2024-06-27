import React from "react";
import {
  Stack,
  Box,
  Button,
  SvgIcon,
  List,
  ListItem,
  Dropdown,
} from "@mui/joy";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "postype web accessibility",
  description: "포스타입의 웹 접근성 테스트",
};

export default function Page() {
  return (
    <main>
      <header>
        <h1>postype</h1>

        <nav>
          <ul aria-describedby="각 페이지를 탐색할 네비게이션 리스트">
            <li>
              <a href="/post" aria-label="포스트 페이지로 이동">
                post
              </a>
            </li>
            <li>
              <a href="/community" aria-label="커뮤니티 페이지로 이동">
                community
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <div role="banner">
        <Image src={""} alt="banner" />
      </div>

      <section>
        <h2>회원님을 위한 추천</h2>
      </section>

      <section>
        <Button>이전으로</Button>

        <Button aria-label="돋보기">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
            width="40px"
            height="40px"
            viewBox="0 0 24 24"
          >
            <path d="M10.035,18.069a7.981,7.981,0,0,0,3.938-1.035l3.332,3.332a2.164,2.164,0,0,0,3.061-3.061l-3.332-3.332A8.032,8.032,0,0,0,4.354,4.354a8.034,8.034,0,0,0,5.681,13.715ZM5.768,5.768A6.033,6.033,0,1,1,4,10.035,5.989,5.989,0,0,1,5.768,5.768Z" />
          </svg>
        </Button>
      </section>

      <section>
        <h2>history title</h2>
        <p>history content</p>
      </section>
    </main>
  );
}
