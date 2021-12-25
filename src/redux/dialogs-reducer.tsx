import {ActionsType, messagesPagePropsType, messagesPropsType} from "./store";

export const dialogsReducer = (state: messagesPagePropsType, action: ActionsType) => {
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
export const UpdateNewMessageTextAC = (newMessage: string) => ({type: 'UPDATE-NEW-MESSAGE-TEXT', newMessage: newMessage} as const)