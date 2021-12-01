import React from "react";
import s from "./Dialogs.module.css"
import {MessageItem} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogsItem";
import {messagesPagePropsType} from "../../redux/State";

type DialogsPropsType = {
  messagesPage: messagesPagePropsType
  addMessage: (textMessage: string) => void
}

export const Dialogs: React.FC<DialogsPropsType> = (props ) => {
  const dialogsElement = props.messagesPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
  const messagesElement = props.messagesPage.messages.map(m => <MessageItem message={m.message}/>)
  const newMessageElement = React.createRef<HTMLTextAreaElement>()
  const addMessage = () => {
    const text = newMessageElement.current?.value
    if(text) {
      props.addMessage(text)
    }
  }

  return (
    <div className={s.dialogs}>
      <div className={s.user}>
        {dialogsElement}
      </div>
      <div className={s.message}>
        {messagesElement}
        <textarea ref={newMessageElement}></textarea>
        <button onClick={addMessage}>Add message</button>
      </div>
    </div>
  )
}