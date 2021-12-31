import React from "react";
import s from './Profile.module.css'
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/Post/MyPostsContainer";
import {StoreType} from "../../redux/types";

export const Profile = (props: StoreType) => {
  return (
    <div className={s.profile}>
      <ProfileInfo/>
      <MyPostsContainer store={props.store}/>
    </div>
  )
}