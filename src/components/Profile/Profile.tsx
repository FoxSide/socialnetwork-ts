import React from "react";
import s from './Profile.module.css'
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/Post/MyPostsContainer";
import {ProfileType} from "./ProfileContainer";

type ProfilePropsType = {
  profile: ProfileType
}

export const Profile = (props: ProfilePropsType) => {

  return (
    <div className={s.profile}>
      <ProfileInfo profile={props.profile}/>
      <MyPostsContainer/>
    </div>
  )
}