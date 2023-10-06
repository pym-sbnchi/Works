import React from "react";

export default function Comments({ comments }) {
  const commentsItems = comments?.map((e, index) => (
    <div key={index} class="comment">
      <p>{e.body}</p>
    </div>
  ));
  return (
    <div class="comments">
      <p>Comments:</p>
        {commentsItems}
    </div>
  );
}
