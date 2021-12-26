import {ActionsType, postPropsType} from "./store";

type initialStatePropstype = typeof initialState

let initialState = {
  posts: [
    {id: 1, message: 'Hi, how are you??', likescount: 3},
    {id: 2, message: 'It\'s my first post', likescount: 15}
  ],
  newPostText: ''
}

export const profileReducer = (state: initialStatePropstype = initialState, action: ActionsType) => {
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
export const AddPostAC = () => ({type: "ADD-POST"} as const)
export const UpdateNewPostTextAC = (newText: string) => ({type: 'UPDATE-NEW-POST-TEXT', newText: newText} as const)
