import React from "react";
import {Preloader} from "../../Common/preloader";
import {ProfileType} from "../ProfileContainer";
import s from './ProfileInfo.module.css'
import ProfileStatus from "./ProfileStatus";

type ProfileInfoPropsType = {
  profile: ProfileType
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {
  if (!props.profile) {
    return <Preloader/>
  }
  return (
    <div>
      {/*<img src={'https://ic.pics.livejournal.com/stepbystep_hdr/11824494/1199598/1199598_original.jpg'}*/}
      {/*     alt={'main logo'}/>*/}
      <div className={s.body}>
        <div className={s.photo}>
          <img src={props.profile.photos.large} alt={'img'}/>
        </div>

        <div className={s.info}>
          <span><span className={s.title}>Name : </span> {props.profile.fullName}</span>
          <span><span className={s.title}> About me : </span> {props.profile.aboutMe}</span>
          <span><span className={s.title}> Looking for a job : </span> {props.profile.lookingForAJobDescription}</span>
          <span><span className={s.title}> My contacts :</span>
            <div className={s.contacts}>
              <li> Facebook: {props.profile.contacts.facebook}</li>
              <li> Twitter: {props.profile.contacts.twitter}</li>
              <li> VK: {props.profile.contacts.vk}</li>
              <li> Github: {props.profile.contacts.github}</li>
            </div>
          </span>
        </div>
        <ProfileStatus status={'Hello'}/>
      </div>
    </div>
  )
}