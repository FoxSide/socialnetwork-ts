import React, {ChangeEvent} from "react";
import {Post} from "./Post/Post";
import s from './MyPosts.module.css'
import {MyPostsPropType} from "./Post/MyPostsContainer";

export const MyPosts = (props: MyPostsPropType) => {

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
        <textarea placeholder={'Enter your post'} value={props.newPostText} onChange={onChangeHandler}/>
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