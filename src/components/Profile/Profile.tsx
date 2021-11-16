import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import {postPropsType} from "../../redux/State";

type ProfilePropsType = {
  posts: Array<postPropsType>
}

export const Profile = (props: ProfilePropsType) => {
  return (
    <div className={s.profile}>
      <ProfileInfo/>
      <MyPosts posts={props.posts}/>
    </div>
  )
}