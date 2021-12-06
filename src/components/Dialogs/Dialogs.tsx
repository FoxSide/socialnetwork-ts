import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import {MessageItem} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogsItem";
import {messagesPagePropsType} from "../../redux/State";

type DialogsPropsType = {
  messagesPage: messagesPagePropsType
  addMessage: (textMessage: string) => void
  updateNewMessageText: (newMessage: string) => void
}

export const Dialogs: React.FC<DialogsPropsType> = (props ) => {
  const dialogsElement = props.messagesPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
  const messagesElement = props.messagesPage.messages.map(m => <MessageItem message={m.message}/>)

  const addMessage = () => {
      props.addMessage(props.messagesPage.newMessageText)
  }

  const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.updateNewMessageText(e.currentTarget.value)
  }

  return (
    <div className={s.dialogs}>
      <div className={s.user}>
        {dialogsElement}
      </div>
      <div className={s.message}>
        {messagesElement}
        <textarea value={props.messagesPage.newMessageText} onChange={onChangeHandler}/>
        <button onClick={addMessage}>Add message</button>
      </div>
    </div>
  )
}