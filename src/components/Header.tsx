import React from 'react';
import  s from './Header.module.css'

export const Header = () => {
  return (
    <header className={s.header}>
      <img
        src={'https://w7.pngwing.com/pngs/813/735/png-transparent-bird-of-prey-logo-beak-desktop-bird-animals-computer-logo.png'}
        alt={'logo'}/>
    </header>
  )
}