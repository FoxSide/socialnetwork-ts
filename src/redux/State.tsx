export let state: statePropsType = {
  profilePage: {
    posts: [
      {id: 1, message: 'Hi, how are you?', likescount: 3},
      {id: 2, message: 'It\'s my first post', likescount: 15}
    ]
  },
  messagesPage: {
    messages: [
      {id: 1, massage: 'Hello'},
      {id: 2, massage: 'How are you?'},
      {id: 3, massage: ':)'},
    ],
    dialogs: [
      {id: 1, name: 'Ed'},
      {id: 2, name: 'Viktoria'},
      {id: 3, name: 'Ned'},
      {id: 4, name: 'Varova'}
    ]
  }
}

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
}
export type messagesPropsType = {
  id: number
  massage: string
}
export type messagesPagePropsType = {
  messages: Array<messagesPropsType>
  dialogs: Array<dialogsPropsType>
}
export type statePropsType = {
  profilePage: profilePagePropsState
  messagesPage: messagesPagePropsType
}