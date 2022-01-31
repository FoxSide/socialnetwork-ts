import React, {useEffect} from "react";
import {Profile} from "./Profile";
import {useDispatch, useSelector} from "react-redux";
import {AppStatetype} from "../../redux/redux-store";
import {setUserThunk} from "../../redux/profile-reducer";
import {useParams} from "react-router-dom";

type ContactsType = {
  facebook: string,
  website: null,
  vk: string,
  twitter: string,
  instagram: string,
  youtube: null,
  github: string,
  mainLink: null
}
type PhotosType = {
  small: string
  large: string
}
export type ProfileType = {
  aboutMe: string
  contacts: ContactsType
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  userId: number
  photos: PhotosType
} | null

export const ProfileContainer = () => {
  const state = useSelector((state: AppStatetype) => state.profilePage)
  const dispatch = useDispatch()
  let {userId} = useParams()
  if (!userId) {
    userId = '21580'
  }
  useEffect(() => {
    setUserThunk(userId, dispatch)
  }, [userId, dispatch])
  return (
    <div>
      <Profile profile={state.profile}/>
    </div>
  )
}