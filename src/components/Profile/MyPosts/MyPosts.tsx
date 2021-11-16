import React from "react";
import {Post} from "./Post/Post";
import s from './MyPosts.module.css'
import {postPropsType} from "../../../redux/State";

type MyPostsPropsType = {
  posts: Array<postPropsType>
}

export const MyPosts = (props:MyPostsPropsType) => {

  let postsElemnt = props.posts.map(p => <Post message={p.message} likescount={p.likescount}/>)

  return (
    <div>
      <h3>My posts</h3>
      <div>
        <textarea></textarea>
        <div>
          <button>Add Post</button>
        </div>
      </div>
      <div className={s.pospt}>
        {postsElemnt}
      </div>
    </div>
  )
}