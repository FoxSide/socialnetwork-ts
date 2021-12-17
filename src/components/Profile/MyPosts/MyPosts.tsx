import React, {ChangeEvent} from "react";
import {Post} from "./Post/Post";
import s from './MyPosts.module.css'
import {ActionsType, AddPostAC, postPropsType, UpdateNewPostTextAC} from "../../../redux/State";

type MyPostsPropsType = {
  posts: Array<postPropsType>
  newPostText: string
  dispatch: (action: ActionsType) => void
}

export const MyPosts = (props: MyPostsPropsType) => {

  const postsElemnt = props.posts.map(p => <Post message={p.message} likescount={p.likescount}/>)

  const addPost = () => {
    props.dispatch(AddPostAC())
  }

  const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.dispatch(UpdateNewPostTextAC(e.currentTarget.value))
  }


  return (
    <div>
      <h3>My posts</h3>
      <div>
        <textarea placeholder={'Enter your post'} value={props.newPostText} onChange={onChangeHandler}/>
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