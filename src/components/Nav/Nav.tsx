import React from "react";
import s from './Nav.module.css'
import {NavLink} from "react-router-dom";

export const Nav = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}><NavLink to='/profile'>Profile</NavLink></div>
      <div className={s.item}><NavLink to='/message'>Messages</NavLink></div>
      <div className={s.item}><NavLink to='/news'>News</NavLink></div>
      <div className={s.item}><NavLink to='/music'>Music</NavLink></div>
      <div className={s.item}><NavLink to='/settings'> Settings</NavLink></div>
    </nav>
  )
}