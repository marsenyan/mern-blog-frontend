import React from "react";

import { Post } from "../components/Post";
import { Index } from "../components/AddComment";
import { CommentsBlock } from "../components/CommentsBlock";

export const FullPost = () => {
  return (
    <>
      <Post
        id={1}
        title="Frontend Developer"
        imageUrl="https://i0.wp.com/plopdo.com/wp-content/uploads/2021/07/Screenshot-1.png?resize=1210%2C642&ssl=1"
        user={{
          avatarUrl:
          "https://i0.wp.com/plopdo.com/wp-content/uploads/2021/07/Screenshot-1.png?resize=1210%2C642&ssl=1",
          fullName: "Keff",
        }}
        createdAt={"12 may 2023"}
        viewsCount={150}
        commentsCount={3}
        tags={["react", "fun", "typescript"]}
        isFullPost
      >
        <p>
        A Front-End Developer is someone who creates websites and web applications. The difference between Front-End and Back-End is that Front-End refers to how a web page looks, while back-end refers to how it works. You can think of Front-End as client-side and Back-End as server-side.
        </p>
      </Post>
      <CommentsBlock
        items={[
          {
            user: {
              fullName: 'John Long',
              avatarUrl: "https://mui.com/static/images/avatar/1.jpg",
            },
            text: 'This is a test comment',
          },
          {
            user: {
              fullName: 'Jeremy  Smith',
              avatarUrl: "https://mui.com/static/images/avatar/2.jpg",
            },
            text: 'The best way to become a frontend developer is to learn everything you can about HTML, CSS, JavaScript, and related skills.',
          },
        ]}
        isLoading={false}
      >
        <Index />
      </CommentsBlock>
    </>
  );
};
