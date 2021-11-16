import React from "react";
import s from "./Dialogs.module.css"
import {MessageItem} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogsItem";
import {messagesPagePropsType} from "../../redux/State";

type DialogsPropsType = {
  messagesPage: messagesPagePropsType
}

export const Dialogs: React.FC<DialogsPropsType> = (props ) => {
  let dialogsElement = props.messagesPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
  let messagesElement = props.messagesPage.messages.map(m => <MessageItem message={m.massage}/>)

  return (
    <div className={s.dialogs}>
      <div className={s.user}>
        {dialogsElement}
      </div>
      <div className={s.message}>
        {messagesElement}
      </div>
    </div>
  )
}