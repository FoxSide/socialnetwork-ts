import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Nav} from "./components/Nav";
import {Profile} from "./components/Profile";

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




