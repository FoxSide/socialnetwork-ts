import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import {ActionsType, postPropsType} from "../../redux/store";

type ProfilePropsType = {
  posts: Array<postPropsType>
  newPostText: string
  dispatch: (action: ActionsType) => void
}

export const Profile = (props: ProfilePropsType) => {
  return (
    <div className={s.profile}>
      <ProfileInfo/>
      <MyPosts posts={props.posts} newPostText={props.newPostText} dispatch={props.dispatch}/>
    </div>
  )
}