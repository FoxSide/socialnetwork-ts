import ReactDOM from "react-dom";
import React from "react";
import {App} from "./App";

export let rerenderEntireTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App/>
    </React.StrictMode>,
    document.getElementById('root')
  )
}