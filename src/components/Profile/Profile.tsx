import React from "react";
import s from './Profile.module.css'
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/Post/MyPostsContainer";

export const Profile = () => {
  return (
    <div className={s.profile}>
      <ProfileInfo/>
      <MyPostsContainer/>
    </div>
  )
}