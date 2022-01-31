import React from 'react';
import s from './App.module.css'
import {Nav} from "./components/Nav/Nav";
import {Route, Routes} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {DialogsContainer} from "./components/Dialogs/Message/DialogsContainer";
import {UsersContainer} from "./components/Users/usersContainer";
import {ProfileContainer} from "./components/Profile/ProfileContainer";
import {HeaderContainer} from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";

export const App = () => {
  return (
      <div className={s.appWrapper}>
        <HeaderContainer/>
        <div className={s.appWrapperBody}>
          <Nav/>
          <div className={s.appWrapperContent}>
            <Routes>
              <Route path='/login' element={<Login/>}/>
              <Route path='/' element={<ProfileContainer/>}/>
              <Route path='/profile/' element={<ProfileContainer/>}/>
              <Route path='/profile/:userId' element={<ProfileContainer/>}/>
              <Route path='/dialogs/*' element={<DialogsContainer/>}/>
              <Route path='/news' element={<News/>}/>
              <Route path='/music' element={<Music/>}/>
              <Route path='/settings' element={<Settings/>}/>
              <Route path='/users' element={<UsersContainer/>}/>
            </Routes>
          </div>
        </div>
      </div>
  );
}




