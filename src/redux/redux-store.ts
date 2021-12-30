import {CombinedState, combineReducers, createStore, Store} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {ActionsType, messagesPagePropsType, profilePagePropsType} from "./types";

export type StoreType = {
  store: Store<CombinedState<{
    profilePage: profilePagePropsType
    messagesPage: messagesPagePropsType
  }>, ActionsType>
}

let redusers = combineReducers({
  profilePage: profileReducer,
  messagesPage: dialogsReducer
})

export let store = createStore(redusers)

// @ts-ignore
// export type AppStoreType = ReturnType<typeof store>
