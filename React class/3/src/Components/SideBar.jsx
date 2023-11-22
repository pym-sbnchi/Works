import React from "react";

export default function SideBar({ posts, handleClick }) {
  const items = posts?.map((post, index) => (
    <li onClick={() => handleClick(index)} key={index}>
      {post.title}
    </li>
  ));
  return (
    <aside>
      <ul>
        {items}
      </ul>
    </aside>
  );
}
