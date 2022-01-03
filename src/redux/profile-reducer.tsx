export type InitialStatePropsType = typeof initialState
export type postPropsType = {
  id: number
  message: string
  likescount: number
}
type ActionsType = AddPostACProsType | UpdateNewPostTextACProsType
type AddPostACProsType = {
  type: "ADD-POST"
}
type UpdateNewPostTextACProsType = {
  type: 'UPDATE-NEW-POST-TEXT'
  newText: string
}

let initialState = {
  posts: [
    {id: 1, message: 'Hi, how are you??', likescount: 3},
    {id: 2, message: 'It\'s my first post', likescount: 15}
  ] as Array<postPropsType>,
  newPostText: ''
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
    default:
      return state
  }
}
export const AddPostAC = () => ({type: "ADD-POST"} as const)
export const UpdateNewPostTextAC = (newText: string) => ({type: 'UPDATE-NEW-POST-TEXT', newText: newText} as const)
