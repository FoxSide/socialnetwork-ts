import React from 'react';
import s from './App.module.css'
import {Header} from "./components/Header/Header";
import {Nav} from "./components/Nav/Nav";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";

export const App = () => {
  return (
    <BrowserRouter>
      <div className={s.appWrapper}>
        <Header/>
        <div className={s.appWrapperBody}>
          <Nav/>
          <div className={s.appWrapperContent}>
            <Routes>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/dialogs' element={<Dialogs/>}/>
            <Route path='/news' element={<News/>}/>
            <Route path='/music' element={<Music/>}/>
            <Route path='/settings' element={<Settings/>}/>
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}




