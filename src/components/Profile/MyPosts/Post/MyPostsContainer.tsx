import React from "react";
import {MyPosts} from "../MyPosts";
import {AddPostAC, UpdateNewPostTextAC} from "../../../../redux/profile-reducer";

type MyPostsPropsType = {
  store: any
}

export const MyPostsContainer = (props: MyPostsPropsType) => {
  let state = props.store.getState()

  const addPost = () => {
    props.store.dispatch(AddPostAC())
  }

  const onChangeHandler = (text: string) => {
    props.store.dispatch(UpdateNewPostTextAC(text))
  }


  return <MyPosts updateNewPostText={onChangeHandler} addPost={addPost} posts={state.profilePage.posts} newPostText={state.profilePage.newPostText}/>
}