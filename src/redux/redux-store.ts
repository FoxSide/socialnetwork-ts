import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";



let redusers = combineReducers({
  profilePage: profileReducer,
  messagesPage: dialogsReducer
})

export let store = createStore(redusers)

