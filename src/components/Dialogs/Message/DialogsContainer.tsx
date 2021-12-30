import React from "react";
import {Dialogs} from "../Dialogs";
import {StoreType} from "../../../redux/redux-store";
import {AddMessageAC, UpdateNewMessageTextAC} from "../../../redux/dialogs-reducer";

export const DialogsContainer: React.FC<StoreType> = (props ) => {
  let state = props.store.getState()
  const addMessage = () => {
    props.store.dispatch(AddMessageAC())
  }

  const onChangeHandler = (text: string) => {
    props.store.dispatch(UpdateNewMessageTextAC(text))
  }

  return <Dialogs addMessage={addMessage} onChangeHandler={onChangeHandler} messagesPage={state.messagesPage}/>
}