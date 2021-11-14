import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

export const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.user}>
        <div><NavLink to='/dialogs/1'>Ed</NavLink></div>
        <div><NavLink to='/dialogs/2'>Viktoria</NavLink></div>
        <div><NavLink to='/dialogs/3'>Ned</NavLink></div>
        <div><NavLink to='/dialogs/4'>Varova</NavLink></div>
      </div>
      <div className={s.message}>
        <div>Hello!</div>
        <div>How are you?</div>
        <div>:)</div>
      </div>
    </div>
  )
}