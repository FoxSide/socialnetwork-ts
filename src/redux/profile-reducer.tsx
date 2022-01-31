import {ProfileType} from "../components/Profile/ProfileContainer";
import {Dispatch} from "redux";
import {profileAPI} from "../api/api";

export type InitialStatePropsType = typeof initialState
export type postPropsType = {
  id: number
  message: string
  likescount: number
}
type ActionsType = AddPostACType | UpdateNewPostTextACType | SetUserProfileACType
type AddPostACType = {
  type: "ADD-POST"
}
type UpdateNewPostTextACType = {
  type: 'UPDATE-NEW-POST-TEXT'
  newText: string
}
type SetUserProfileACType = {
  type: 'SET-USER-PROFILE'
  profile: ProfileType
}

let initialState = {
  posts: [
    {id: 1, message: 'Hi, how are you??', likescount: 3},
    {id: 2, message: 'It\'s my first post', likescount: 15}
  ] as Array<postPropsType>,
  newPostText: '',
  profile: null
}

export const profileReducer = (state: InitialStatePropsType = initialState, action: ActionsType): InitialStatePropsType => {
  switch (action.type) {
    case 'ADD-POST': {
      let newPost: postPropsType = {
        id: 5,
        message: state.newPostText,
        likescount: 0
      }
      let stateCopy = {...state}
      stateCopy.posts = [...state.posts]
      stateCopy.posts.push(newPost)
      stateCopy.newPostText = ''
      return stateCopy
    }
    case 'UPDATE-NEW-POST-TEXT': {
      let stateCopy = {...state}
      stateCopy.newPostText = action.newText
      return stateCopy
    }
    case 'SET-USER-PROFILE': {
      return {...state, profile: action.profile} as InitialStatePropsType
    }
    default:
      return state
  }
}
export const AddPostAC = (): AddPostACType => ({type: "ADD-POST"})
export const UpdateNewPostTextAC = (newText: string): UpdateNewPostTextACType => ({
  type: 'UPDATE-NEW-POST-TEXT',
  newText: newText
})
export const SetUserProfileAC = (profile: ProfileType): SetUserProfileACType => ({type: 'SET-USER-PROFILE', profile})

export const setUserThunk = (userId: string | undefined, dispatch: Dispatch) => {
    profileAPI.getProfile(userId).then(response => {
      dispatch(SetUserProfileAC(response.data))
    })
}