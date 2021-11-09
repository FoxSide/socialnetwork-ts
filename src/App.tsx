import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Nav} from "./components/Nav/Nav";
import {Profile} from "./components/Profile/Profile";

export const App = () => {
  return (
    <div className={'app-wrapper'}>
      <Header/>
      <div className={'body'}>
        <Nav/>
        <Profile/>
      </div>
    </div>
  );
}




