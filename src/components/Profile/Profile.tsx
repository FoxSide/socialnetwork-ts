import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
  return (
    <div className={s.profile}>
      <img src={'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg'} alt={'main logo'}/>
      <div>
        Ava+desctiption
      </div>
      <MyPosts/>
    </div>
  )
}