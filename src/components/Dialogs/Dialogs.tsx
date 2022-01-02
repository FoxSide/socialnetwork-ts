import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import {MessageItem} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogsItem";
import {messagesPagePropsType} from "../../redux/types";

type DialogsPropsType = {
  addMessage: () => void
  onChangeHandler: (text: string) => void
  messagesPage: messagesPagePropsType
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {
  const dialogsElement = props.messagesPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
  const messagesElement = props.messagesPage.messages.map(m => <MessageItem message={m.message}/>)

  const onAddMessage = () => {
    props.addMessage()
  }

  const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.onChangeHandler(e.currentTarget.value)
  }

  return (
    <div className={s.dialogs}>
      <div className={s.user}>
        {dialogsElement}
      </div>
      <div className={s.message}>
        {messagesElement}
        <textarea placeholder={'Enter your message'} value={props.messagesPage.newMessageText}
                  onChange={onChangeHandler}/>
        <button onClick={onAddMessage}>Add message</button>
      </div>
    </div>
  )
}