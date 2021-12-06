import {rerenderEntireTree} from "../render";

export type postPropsType = {
  id: number
  message: string
  likescount: number
}
export type dialogsPropsType = {
  id: number
  name: string
}
export type profilePagePropsState = {
  posts: Array<postPropsType>
  newPostText: string
}
export type messagesPropsType = {
  id: number
  message: string
}
export type messagesPagePropsType = {
  messages: Array<messagesPropsType>
  dialogs: Array<dialogsPropsType>
  newMessageText: string
}
export type statePropsType = {
  profilePage: profilePagePropsState
  messagesPage: messagesPagePropsType
}

export let state: statePropsType = {
  profilePage: {
    posts: [
      {id: 1, message: 'Hi, how are you?', likescount: 3},
      {id: 2, message: 'It\'s my first post', likescount: 15}
    ],
    newPostText: ''
  },
  messagesPage: {
    messages: [
      {id: 1, message: 'Hello'},
      {id: 2, message: 'How are you?'},
      {id: 3, message: ':)'},
    ],
    dialogs: [
      {id: 1, name: 'Ed'},
      {id: 2, name: 'Viktoria'},
      {id: 3, name: 'Ned'},
      {id: 4, name: 'Varova'}
    ],
    newMessageText: ''
  }
}

export const addPost = (postMessage: string) => {
  let newPost: postPropsType = {
    id: 5,
    message: postMessage,
    likescount: 0
  }
  state.profilePage.posts.push(newPost)
  rerenderEntireTree()
}

export const updateNewPostText = (newText: string) => {
  state.profilePage.newPostText = newText
  rerenderEntireTree()
}

export const addMessage = (textMessage: string) => {
  let newMessage: messagesPropsType = {
    id: 4,
    message: textMessage
  }
  state.messagesPage.messages.push(newMessage)
  rerenderEntireTree()
}

export const updateNewMessageText = (newMessage: string) => {
  state.messagesPage.newMessageText = newMessage
  rerenderEntireTree()
}