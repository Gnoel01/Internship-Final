import logo from './logo.png';
import './App.css';
import profile from './components/Moon.png';
import React, { useState } from 'react';
import Modal from './components/Modal';
import DarkMode from "./components/DarkMode.js";

function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className='names'>
            Created By: MSgt Hamilton, TSgt Hudson-Greenlee, & (S)gt Noel
          </p>
          <DarkMode/>
        </header>
          <div>
            <button onClick={handleOpenModal}>Open Modal</button>
            {isModalOpen && (
              <Modal
                imageUrl={profile}
                width={300} // Optional
                height={200} // Optional
                onClose={handleCloseModal}
              />
            )}
          </div>
      </div>
    </>
  );
}

export default App;
