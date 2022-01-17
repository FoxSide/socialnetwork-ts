import React from 'react';
import loader from "../../images/loader.svg";

export const Preloader = () => {
  return (
    <div>
      <img src={loader} alt='loader'/>
    </div>
  );
};