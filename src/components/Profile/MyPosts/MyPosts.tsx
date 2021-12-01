import React from "react";
import {Post} from "./Post/Post";
import s from './MyPosts.module.css'
import {postPropsType} from "../../../redux/State";

type MyPostsPropsType = {
  posts: Array<postPropsType>
  addPost: (postMessage: string) => void
}

export const MyPosts = (props:MyPostsPropsType) => {

  const postsElemnt = props.posts.map(p => <Post message={p.message} likescount={p.likescount}/>)
  const newPostElement = React.createRef<HTMLTextAreaElement>()

  const addPost = () => {
    let text = newPostElement.current?.value
    if (text) {
      props.addPost(text)
    }
  }

  return (
    <div>
      <h3>My posts</h3>
      <div>
        <textarea ref={newPostElement}></textarea>
        <div>
          <button onClick={addPost} >Add Post</button>
        </div>
      </div>
      <div className={s.pospt}>
        {postsElemnt}
      </div>
    </div>
  )
}