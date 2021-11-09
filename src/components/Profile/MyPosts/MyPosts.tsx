import React from "react";
import {Post} from "./Post/Post";

export const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <div>
          <button>Add Post</button>
        </div>
      </div>
      <div>
        <Post message={'Hi, how are you?'} likescount={3}/>
        <Post message={"It's my first post"} likescount={5}/>
      </div>
    </div>
  )
}