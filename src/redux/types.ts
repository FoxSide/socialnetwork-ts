export type postPropsType = {
  id: number
  message: string
  likescount: number
}
export type dialogsPropsType = {
  id: number
  name: string
}
export type profilePagePropsType = {
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
  profilePage: profilePagePropsType
  messagesPage: messagesPagePropsType
}
export type storePropsType = {
  _state: statePropsType
  _rerenderEntireTree: () => void
  subscribe: (observer: () => void) => void
  getState: () => statePropsType
  dispatch: (action: ActionsType) => void
}
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



// export let store: storePropsType = {
//   _state: {
//     profilePage: {
//       posts: [
//         {id: 1, message: 'Hi, how are you??', likescount: 3},
//         {id: 2, message: 'It\'s my first post', likescount: 15}
//       ],
//       newPostText: ''
//     },
//     messagesPage: {
//       messages: [
//         {id: 1, message: 'Hello'},
//         {id: 2, message: 'How are you?'},
//         {id: 3, message: ':)'},
//       ],
//       dialogs: [
//         {id: 1, name: 'Eduard'},
//         {id: 2, name: 'Viktoria'},
//         {id: 3, name: 'Ned'},
//         {id: 4, name: 'Varova'}
//       ],
//       newMessageText: ''
//     }
//   },
//   _rerenderEntireTree() {
//   },
//
//   subscribe(observer: () => void) {
//     this._rerenderEntireTree = observer
//   },
//   getState() {
//     return this._state
//   },
//
//   dispatch(action) {
//     profileReducer(this._state.profilePage, action)
//     dialogsReducer(this._state.messagesPage, action)
//     this._rerenderEntireTree();
//   }
// }

// export const AddPostAC = () => ({type: "ADD-POST"} as const)
// export const UpdateNewPostTextAC = (newText: string) => ({type: 'UPDATE-NEW-POST-TEXT', newText: newText} as const)
// export const AddMessageAC = () => ({type: 'ADD-MESSAGE'} as const)
// export const UpdateNewMessageTextAC = (newMessage: string) => ({type: 'UPDATE-NEW-MESSAGE-TEXT', newMessage: newMessage} as const)