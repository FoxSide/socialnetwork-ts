import React, {useEffect} from 'react';
import {Header} from "./Header";
import {useDispatch, useSelector} from "react-redux";
import {setUserDataAC} from "../../redux/auth-reducer";
import {AppStatetype} from "../../redux/redux-store";
import {authAPI} from "../../api/api";

export const HeaderContainer = () => {
  let state = useSelector((state: AppStatetype) => state.auth)
  let dispatch = useDispatch()
  useEffect(() => {
    authAPI.getAuth().then(data => {
        if (data.resultCode === 0) {
          let {id, login, email} = data.data
          dispatch(setUserDataAC(id, email, login))
        }
      })
    }
  )
  return (
    <Header state={state}/>
  );
};