import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
  return (
    <div className={s.profile}>
      <img src={'https://ic.pics.livejournal.com/stepbystep_hdr/11824494/1199598/1199598_original.jpg'} alt={'main logo'}/>
      <div>
        Ava+desctiption
      </div>
      <MyPosts/>
    </div>
  )
}