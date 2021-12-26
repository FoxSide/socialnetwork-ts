import {ActionsType, messagesPropsType} from "./store";


type initialStatePropstype = typeof initialState

let initialState = {
  messages: [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: ':)'},
  ],
  dialogs: [
    {id: 1, name: 'Eduard'},
    {id: 2, name: 'Viktoria'},
    {id: 3, name: 'Ned'},
    {id: 4, name: 'Varova'}
  ],
  newMessageText: ''
}

export const dialogsReducer = (state: initialStatePropstype = initialState, action: ActionsType) => {
  switch (action.type) {
    case 'ADD-MESSAGE':
      let newMessage: messagesPropsType = {
        id: 4,
        message: state.newMessageText
      }
      state.messages.push(newMessage)
      state.newMessageText = ''
      return state

    case 'UPDATE-NEW-MESSAGE-TEXT':
      state.newMessageText = action.newMessage
      return state
    default:
      return state
  }
}
export const AddMessageAC = () => ({type: 'ADD-MESSAGE'} as const)
export const UpdateNewMessageTextAC = (newMessage: string) => ({
  type: 'UPDATE-NEW-MESSAGE-TEXT',
  newMessage: newMessage
} as const)