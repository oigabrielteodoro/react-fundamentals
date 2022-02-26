import React from "react";

import Post from "./Post";

export default function App() {
  return (
    <>
      <h1>JStack's Blog</h1>
      <h2>Posts da semana</h2>
      <hr />

      <Post
        likes={20}
        post={{
          title: "Título da notícia 01",
          subtitle: "Subtítulo da notícia 01",
        }}
      />
    </>
  );
}
