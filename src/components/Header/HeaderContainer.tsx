import React, {useEffect} from 'react';
import {Header} from "./Header";
import {useDispatch, useSelector} from "react-redux";
import {setAuthUserDataThunk} from "../../redux/auth-reducer";
import {AppStatetype} from "../../redux/redux-store";

export const HeaderContainer = () => {
  let state = useSelector((state: AppStatetype) => state.auth)
  let dispatch = useDispatch()
  useEffect(() => {
    setAuthUserDataThunk(dispatch)
    }
  )
  return (
    <Header state={state}/>
  );
};