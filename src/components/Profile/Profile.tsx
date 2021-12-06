import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import {postPropsType} from "../../redux/State";

type ProfilePropsType = {
  posts: Array<postPropsType>
  addPost: (postMessage: string) => void
  newPostText: string
  updateNewPostText: (newText: string) => void
}

export const Profile = (props: ProfilePropsType) => {
  return (
    <div className={s.profile}>
      <ProfileInfo/>
      <MyPosts posts={props.posts} addPost={props.addPost} newPostText={props.newPostText} updateNewPostText={props.updateNewPostText}/>
    </div>
  )
}