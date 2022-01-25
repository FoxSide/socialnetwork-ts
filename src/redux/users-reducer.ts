export type InitialStatePropsType = typeof initialState
export type UsersType = {
  name: string
  id: number
  photos: {
    small: null
    large: null
  },
  status: null,
  followed: boolean
}
type ActionsType =
  FollowACType
  | UnFollowACType
  | SetUsersACType
  | SetCurrentPageAVType
  | SetTotalCountACType
  | ToggleIsFetchingACType
  | SetFirstPageACType
  | ToggleIsFollowingACType
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
type SetCurrentPageAVType = {
  type: 'SET-CURRENT-PAGE',
  currentPage: number
}
type SetTotalCountACType = {
  type: 'SET-TOTAL-COUNT'
  totalUsersCount: number
}
type ToggleIsFetchingACType = {
  type: 'TOGGLE-IS-FETCHING'
  status: boolean
}
type SetFirstPageACType = {
  type: 'SET-SHOW-VALUE'
  fistPage: number
  lastPage: number
}
type ToggleIsFollowingACType = {
  type: 'TOGGLE-IS-FOLLOWING'
  isFetching: boolean
}

let initialState = {
  users: [] as Array<UsersType>,
  pageSize: 6,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: false
}

export const usersReducer = (state: InitialStatePropsType = initialState, action: ActionsType): InitialStatePropsType => {
  switch (action.type) {
    case 'FOLLOW':
      return {...state, users: state.users.map(m => m.id === action.userID ? {...m, followed: true} : m)}
    case 'UNFOLLOW':
      return {...state, users: state.users.map(m => m.id === action.userID ? {...m, followed: false} : m)}
    case 'SET-USERS':
      return {...state, users: action.users}
    case 'SET-CURRENT-PAGE': {
      return {...state, currentPage: action.currentPage}
    }
    case 'SET-TOTAL-COUNT' : {
      return {...state, totalUsersCount: action.totalUsersCount}
    }
    case 'TOGGLE-IS-FETCHING' : {
      return {...state, isFetching: action.status}
    }
    case 'TOGGLE-IS-FOLLOWING': {
      return {
        ...state,
        followingInProgress: action.isFetching
      }
    }
    default:
      return state
  }
}

export const followAC = (userID: number) => ({type: 'FOLLOW', userID})
export const unFollowAC = (userID: number) => ({type: 'UNFOLLOW', userID})
export const setUsersAC = (users: Array<UsersType>) => ({type: 'SET-USERS', users})
export const setCurrentPageAC = (currentPage: number) => ({type: 'SET-CURRENT-PAGE', currentPage})
export const setTotalCountAC = (totalUsersCount: number) => ({type: 'SET-TOTAL-COUNT', totalUsersCount})
export const toggleIsFetchingAC = (status: boolean) => ({type: 'TOGGLE-IS-FETCHING', status})
export const toggleIsFollowingAC = (isFetching: boolean) => ({type: 'TOGGLE-IS-FOLLOWING', isFetching,})

