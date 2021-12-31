import {CombinedState, Store} from "redux";

//Типы для Profile

export type profilePagePropsType = {
  posts: Array<postPropsType>
  newPostText: string
}
export type postPropsType = {
  id: number
  message: string
  likescount: number
}

// Типы для Dialogs

export type messagesPagePropsType = {
  messages: Array<messagesPropsType>
  dialogs: Array<dialogsPropsType>
  newMessageText: string
}
export type dialogsPropsType = {
  id: number
  name: string
}
export type messagesPropsType = {
  id: number
  message: string
}

// Типы экшенов

export type ActionsType = AddMessageACProsType | UpdateNewMessageTextACProsType | AddPostACProsType | UpdateNewPostTextACProsType

export type AddPostACProsType = {
  type: "ADD-POST"
}
export type UpdateNewPostTextACProsType = {
  type: 'UPDATE-NEW-POST-TEXT'
  newText: string
}
export type AddMessageACProsType = {
  type: 'ADD-MESSAGE'
}
export type UpdateNewMessageTextACProsType = {
  type: 'UPDATE-NEW-MESSAGE-TEXT'
  newMessage: string
}

// Тип для стора из редакс

export type StoreType = {
  store: Store<CombinedState<{
    profilePage: profilePagePropsType
    messagesPage: messagesPagePropsType
  }>, ActionsType>
}