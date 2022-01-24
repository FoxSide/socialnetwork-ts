import React, {useEffect} from 'react';
import {Header} from "./Header";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {setUserDataAC} from "../../redux/auth-reducer";
import {AppStatetype} from "../../redux/redux-store";

export const HeaderContainer = () => {
  let state = useSelector((state: AppStatetype) => state.auth)
  let dispatch = useDispatch()
  useEffect(() => {
      axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true}).then(response => {
        if (response.data.resultCode === 0) {
          let {id, login, email} = response.data.data
          dispatch(setUserDataAC(id, email, login))
        }
      })
    }
  )
  return (
    <Header state={state}/>
  );
};