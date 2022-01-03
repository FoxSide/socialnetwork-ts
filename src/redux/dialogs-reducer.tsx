export type InitialStatePropsType = typeof initialState
export type DialogsPropsType = {
  id: number
  name: string
}
export type MessagesPropsType = {
  id: number
  message: string
}
type ActionsType = AddMessageACProsType | UpdateNewMessageTextACProsType
type AddMessageACProsType = {
  type: 'ADD-MESSAGE'
}
type UpdateNewMessageTextACProsType = {
  type: 'UPDATE-NEW-MESSAGE-TEXT'
  newMessage: string
}

let initialState = {
  messages: [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: ':)'},
  ] as Array<MessagesPropsType>,
  dialogs: [
    {id: 1, name: 'Ed'},
    {id: 2, name: 'Viktoria'},
    {id: 3, name: 'Ned'},
    {id: 4, name: 'Varova'}
  ] as Array<DialogsPropsType>,
  newMessageText: ''
}

export const dialogsReducer = (state: InitialStatePropsType = initialState, action: ActionsType): InitialStatePropsType => {
  switch (action.type) {
    case 'ADD-MESSAGE': {
      let newMessage: MessagesPropsType = {
        id: 4,
        message: state.newMessageText
      }
      let stateCopy = {...state}
      stateCopy.messages = [...state.messages]
      stateCopy.messages.push(newMessage)
      stateCopy.newMessageText = ''
      return stateCopy
    }
    case 'UPDATE-NEW-MESSAGE-TEXT': {
      let stateCopy = {...state}
      stateCopy.newMessageText = action.newMessage
      return stateCopy
    }
    default:
      return state
  }
}
export const AddMessageAC = () => ({type: 'ADD-MESSAGE'} as const)
export const UpdateNewMessageTextAC = (newMessage: string) => ({
  type: 'UPDATE-NEW-MESSAGE-TEXT',
  newMessage: newMessage
} as const)