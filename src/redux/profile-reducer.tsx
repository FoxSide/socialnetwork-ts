import {ActionsType, postPropsType, profilePagePropsState} from "./State";

export const profileReducer = (state: profilePagePropsState, action: ActionsType) => {
  switch (action.type) {
    case 'ADD-POST':
      let newPost: postPropsType = {
        id: 5,
        message: state.newPostText,
        likescount: 0
      }
      state.posts.push(newPost)
      state.newPostText = ''
      return state

    case 'UPDATE-NEW-POST-TEXT':
      state.newPostText = action.newText
      return state
    default:
      return state
  }
}
