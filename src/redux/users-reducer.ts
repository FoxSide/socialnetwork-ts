import {followAPI, userAPI} from "../api/api";
import {Dispatch} from "redux";

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
  userId: number
}

let initialState = {
  users: [] as Array<UsersType>,
  pageSize: 6,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [] as number[]
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
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(id => id !== action.userId)
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
export const toggleIsFollowingAC = (isFetching: boolean, userId: number) => ({
  type: 'TOGGLE-IS-FOLLOWING',
  isFetching,
  userId
})

export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {
  return (dispatch: Dispatch) => {
    dispatch(toggleIsFetchingAC(true))
    userAPI.getUsers(currentPage, pageSize).then(data => {
      dispatch(toggleIsFetchingAC(false))
      dispatch(setUsersAC(data.items))
      dispatch(setTotalCountAC(data.totalCount))
    })
  }
}
export const followThunkCreator = (userId: number) => {
  return (dispatch: Dispatch) => {
    dispatch(toggleIsFollowingAC(true, userId))
    followAPI.setFollow(userId).then(data => {
      if (data.resultCode === 0) {
        dispatch(followAC(userId))
      }
      dispatch(toggleIsFollowingAC(false, userId))
    })
  }
}
export const unFollowThunkCreator = (userId: number) => {
  return (dispatch: Dispatch) => {
    dispatch(toggleIsFollowingAC(true, userId))
    followAPI.setUnfollow(userId).then(data => {
      if (data.resultCode === 0) {
        dispatch(unFollowAC(userId))
      }
      dispatch(toggleIsFollowingAC(false, userId))
    })
  }
}



