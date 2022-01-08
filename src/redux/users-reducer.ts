export type InitialStatePropsType = typeof initialState
export type UsersType = {
  id: number
  photoUrl: string
  followed: boolean
  fullName: string
  status: string
  location: {
    city: string
    country: string
  }
}
type ActionsType = FollowACType | UnFollowACType | SetUsersACType
type FollowACType = {
  type: 'FOLLOW'
  userID: number
}
type UnFollowACType = {
  type: 'UNFOLLOW'
  userID: number
}
type SetUsersACType = {
  type: 'SET-USERS'
  users: any
}

let initialState = {
  users: [] as Array<UsersType>
}

export const usersReducer = (state: InitialStatePropsType = initialState, action: ActionsType): InitialStatePropsType => {
  switch (action.type) {
    case 'FOLLOW':
      return {...state, users: state.users.map(m => m.id === action.userID ? {...m, followed: true} : m)}
    case 'UNFOLLOW':
      return {...state, users: state.users.map(m => m.id === action.userID ? {...m, followed: false} : m)}
    case 'SET-USERS':
      return {...state, users: [...state.users, ...action.users]}
    default:
      return state
  }
}

export const followAC = (userID: number) => ({type: 'FOLLOW', userID})
export const unFollowAC = (userID: number) => ({type: 'UNFOLLOW', userID})
export const setUsersAC = (users: Array<UsersType>) => ({type: 'SET-USERS', users})
