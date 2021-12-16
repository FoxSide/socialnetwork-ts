import React, {ChangeEvent} from "react";
import {Post} from "./Post/Post";
import s from './MyPosts.module.css'
import {ActionsType, postPropsType} from "../../../redux/State";

type MyPostsPropsType = {
  posts: Array<postPropsType>
  newPostText: string
  dispatch: (action: ActionsType) => void
}

export const MyPosts = (props: MyPostsPropsType) => {

  const postsElemnt = props.posts.map(p => <Post message={p.message} likescount={p.likescount}/>)

  const addPost = () => {
      props.dispatch({type: "ADD-POST", postMessage: props.newPostText})
  }

  const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
  props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: e.currentTarget.value})
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