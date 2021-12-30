import React, {ChangeEvent} from "react";
import {Post} from "./Post/Post";
import s from './MyPosts.module.css'
import {postPropsType} from "../../../redux/types";

type MyPostsPropsType = {
  updateNewPostText: (text: string) => void
  addPost: () => void
  posts: Array<postPropsType>
  newPostText: string
}

export const MyPosts = (props: MyPostsPropsType) => {

  const postsElemnt = props.posts.map(p => <Post message={p.message} likescount={p.likescount}/>)

  const onAddPost = () => {
    props.addPost()
  }

  const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.updateNewPostText(e.currentTarget.value)
  }


  return (
    <div>
      <h3>My posts</h3>
      <div>
        <textarea placeholder={'Enter your post...'} value={props.newPostText} onChange={onChangeHandler}/>
        <div>
          <button onClick={onAddPost}>Add Post</button>
        </div>
      </div>
      <div className={s.pospt}>
        {postsElemnt}
      </div>
    </div>
  )
}