import React, { useEffect, useState } from 'react';

const Card = ({ handleOpenModal, source, header, description }) => {
  // const [theme, setTheme] = useState("cards");

  // useEffect(() => {
  //   console.log("Test")
  //   const handleStorageUpdate = () => {
  //     let theme = localStorage.getItem("selectedTheme") === "dark" ? "cards-dark" : "cards";
  //     setTheme(theme);
  //   };

  //   window.addEventListener('storageUpdate', handleStorageUpdate);
  //   return () => {
  //     window.removeEventListener('storageUpdate', handleStorageUpdate);
  //   };
  // }, []);

  return (
    <div
      className="cards"
      onClick={() => handleOpenModal( { src: source, width: 1100, height: 500})}
    >
      <img src={source} alt="Card Image" style={{ width: '100%', borderRadius: '8px 8px 0 0' }} />
      <h2>{header}</h2>
      <p>{description}</p>
    </div>
  );
}

export default Card;