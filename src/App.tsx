import React from 'react';
import s from './App.module.css'
import {Header} from "./components/Header/Header";
import {Nav} from "./components/Nav/Nav";
import {Profile} from "./components/Profile/Profile";
import {Route, Routes, useParams} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {DialogsContainer} from "./components/Dialogs/Message/DialogsContainer";
import {UsersContainer} from "./components/Users/usersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

export const App = () => {
  return (
      <div className={s.appWrapper}>
        <Header/>
        <div className={s.appWrapperBody}>
          <Nav/>
          <div className={s.appWrapperContent}>
            <Routes>
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




