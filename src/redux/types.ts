// НЕ ИСПОЛЬЗУЕТСЯ!!!
// НЕ ИСПОЛЬЗУЕТСЯ!!!
// НЕ ИСПОЛЬЗУЕТСЯ!!!


//Типы для Profile

import {CombinedState, Store} from "redux";

type profilePagePropsType = {
  posts: Array<postPropsType>
  newPostText: string
}
type postPropsType = {
  id: number
  message: string
  likescount: number
}

// Типы для Dialogs

type messagesPagePropsType = {
  messages: Array<messagesPropsType>
  dialogs: Array<dialogsPropsType>
  newMessageText: string
}
type dialogsPropsType = {
  id: number
  name: string
}
type messagesPropsType = {
  id: number
  message: string
}

// Типы экшенов

type ActionsType = AddMessageACProsType | UpdateNewMessageTextACProsType | AddPostACProsType | UpdateNewPostTextACProsType

type AddPostACProsType = {
  type: "ADD-POST"
}
type UpdateNewPostTextACProsType = {
  type: 'UPDATE-NEW-POST-TEXT'
  newText: string
}
type AddMessageACProsType = {
  type: 'ADD-MESSAGE'
}
type UpdateNewMessageTextACProsType = {
  type: 'UPDATE-NEW-MESSAGE-TEXT'
  newMessage: string
}

// Тип для стора из редакс

type StoreType = {
  store: Store<CombinedState<{
    profilePage: profilePagePropsType
    messagesPage: messagesPagePropsType
  }>, ActionsType>
}