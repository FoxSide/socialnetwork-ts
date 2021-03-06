import React, {ChangeEvent, useEffect} from "react";
import s from "./Dialogs.module.css"
import {MessageItem} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogsItem";
import {DialogsPropsType} from "./Message/DialogsContainer";
import {useNavigate} from "react-router-dom";


export const Dialogs = (props: DialogsPropsType) => {
  const dialogsElement = props.messagesPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
  const messagesElement = props.messagesPage.messages.map(m => <MessageItem message={m.message}/>)

  const onAddMessage = () => {
    props.addMessage()
  }

  const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.onChangeHandler(e.currentTarget.value)
  }

  let navigate = useNavigate()
  useEffect(() => {
    if(!props.isAuth){
      return navigate('/login')
    }
  })

  return (
    <div className={s.dialogs}>
      <div className={s.user}>
        {dialogsElement}
      </div>
      <div className={s.message}>
        {messagesElement}
        <textarea placeholder={'Enter your message...'} value={props.messagesPage.newMessageText}
                  onChange={onChangeHandler}/>
        <button onClick={onAddMessage}>Add message</button>
      </div>
    </div>
  )
}