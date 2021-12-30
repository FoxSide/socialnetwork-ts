import React from 'react';
import s from './App.module.css'
import {Header} from "./components/Header/Header";
import {Nav} from "./components/Nav/Nav";
import {Profile} from "./components/Profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {StoreType} from "./redux/redux-store";
import {DialogsContainer} from "./components/Dialogs/Message/DialogsContainer";

export const App = (props: StoreType) => {
  return (
    <BrowserRouter>
      <div className={s.appWrapper}>
        <Header/>
        <div className={s.appWrapperBody}>
          <Nav/>
          <div className={s.appWrapperContent}>
            <Routes>
              <Route path='/profile' element={<Profile store={props.store}/>}/>
              <Route path='/dialogs/*' element={<DialogsContainer store={props.store}/>}/>
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




