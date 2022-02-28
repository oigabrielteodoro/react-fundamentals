import React, { useState } from "react";

import Post from "./Post";
import Header from "./Header";

export default function App() {
  const [posts, setPosts] = useState([]);

  function handleRefresh() {
    setPosts((prevState) => [
      ...prevState,
      {
        id: Math.random(),
        title: `Title #0${prevState.length + 1}`,
        subtitle: `Sub #0${prevState.length + 1}`,
        likes: 20,
      },
    ]);
  }

  return (
    <>
      <Header>
        <h2>
          Posts da semana
          <button onClick={handleRefresh}>Atualizar</button>
        </h2>
      </Header>

      {posts.map((post) => (
        <Post
          key={post.id}
          likes={post.likes}
          post={{
            title: post.title,
            subtitle: post.subtitle,
          }}
        />
      ))}
    </>
  );
}
