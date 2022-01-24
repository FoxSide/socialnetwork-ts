import React from "react";

type ActionType = SetuserDataACType
export type InitialStateType = {
  id: number | null
  login: string | null
  email: string | null
  isAuth: boolean
}
type SetuserDataACType = {
  type: 'SET-USER-DATA'
  data: {userId: number, email: string, login: string}
}

let initialState = {
  id: null,
  login: null,
  email: null,
  isAuth: false
}

export const authReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
  switch (action.type) {
    case 'SET-USER-DATA': {
      return {...state, ...action.data, isAuth: true}
    }
    default:
      return state
  }
}
export const setUserDataAC = (userId: number, email: string, login: string):SetuserDataACType => ({type: 'SET-USER-DATA', data: {userId, email, login}})