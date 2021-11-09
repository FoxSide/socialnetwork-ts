import React from "react";
import s from './Nav.module.css'

export const Nav = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}><a href={'#s'}>Profile</a></div>
      <div className={s.item}><a href={'#s'}>Messages</a></div>
      <div className={s.item}><a href={'#s'}>News</a></div>
      <div className={s.item}><a href={'#s'}>Music</a></div>
      <div className={s.item}><a href={'#s'}>Settings</a></div>
    </nav>
  )
}