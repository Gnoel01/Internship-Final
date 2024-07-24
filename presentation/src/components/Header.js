import React from 'react';
import DarkMode from "./DarkMode.js";
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <div>
        <p className='project'>
          Stan/Eval Project Showcase
        </p>
        <p className='names'>
          Created By: MSgt Hamilton, TSgt Hudson-Greenlee, & (S)gt Noel2
        </p>
      </div>
      <DarkMode/>
    </header>
  );
}

export default Header;