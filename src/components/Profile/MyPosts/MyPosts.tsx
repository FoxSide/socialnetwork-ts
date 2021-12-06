import React, {ChangeEvent} from "react";
import {Post} from "./Post/Post";
import s from './MyPosts.module.css'
import {postPropsType} from "../../../redux/State";

type MyPostsPropsType = {
  posts: Array<postPropsType>
  addPost: (postMessage: string) => void
  newPostText: string
  updateNewPostText: (newText: string) => void
}

export const MyPosts = (props: MyPostsPropsType) => {

  const postsElemnt = props.posts.map(p => <Post message={p.message} likescount={p.likescount}/>)

  const addPost = () => {
      props.addPost(props.newPostText)
  }

  const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
  props.updateNewPostText(e.currentTarget.value)
  }


  return (
    <div>
      <h3>My posts</h3>
      <div>
        <textarea value={props.newPostText} onChange={onChangeHandler}/>
        <div>
          <button onClick={addPost}>Add Post</button>
        </div>
      </div>
      <div className={s.pospt}>
        {postsElemnt}
      </div>
    </div>
  )
}