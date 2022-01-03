import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";

export type AppStatetype = ReturnType<typeof rootReduser>

let rootReduser = combineReducers({
  profilePage: profileReducer,
  messagesPage: dialogsReducer
})

export let store = createStore(rootReduser)



