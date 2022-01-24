import React from 'react';
import s from './Header.module.css'
import logo from '../../images/logo.png'
import {NavLink} from "react-router-dom";
import {InitialStateType} from "../../redux/auth-reducer";

type HeaderPropsType = {
  state: InitialStateType
}

export const Header = (props: HeaderPropsType) => {

  return (
    <header className={s.header}>
      <img src={logo} alt={'logo'}/>
      <div className={s.loginBlock}>
        {props.state.isAuth ? props.state.login : <NavLink to={'/login'}>Login</NavLink>}
      </div>
    </header>
  )
}