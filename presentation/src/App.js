import React, { useState, useEffect } from 'react';
import './css/App.css';
import Modal from './components/Modal';
import DarkMode from "./components/DarkMode.js";
import Card from "./components/Card.js"
import MainCard from "./components/MainCard.js";
import Header from "./components/Header.js"
import TextCard from "./components/TextCard.js";
import { cardItems } from "./assets/cardItems.js";
import shelf from './assets/Shelf.png';
import kiosk from './assets/kiosk.png';

import Screenshot_aspect_ratio_2 from './assets/Screenshot aspect ratio 2.png';

function App() {

  const [activeDiv, setActiveDiv] = useState(null);

  const handleOpenModal = (selectedDiv) => {
    setActiveDiv(selectedDiv);
  };

  const handleCloseModal = () => {
    setActiveDiv(null);
  };

  const createCards = () => {
    let cards = cardItems.map(item => {
      return (
        <Card handleOpenModal={handleOpenModal} source={item.source} header={item.header} description={item.description} />
      );
    })
    return cards;
  }

  return (
    <>
      <div className="App">
        <Header />
        <div className="Modal-Flex">
          <MainCard handleOpenModal={handleOpenModal} />
          {createCards()}
          <TextCard />

          <div className="cards"
            style={{
              cursor: "default",
              minWidth: '55vw',
            }}
            // onClick={() => handleOpenModal( { src: Screenshot_aspect_ratio, width: 1100, height: 500})}
            >
            <h1>Future Projects</h1>
              <div style={{display: "flex", flexDirection: "row"}}>
                <div style={{display: "flex", flexDirection: "column", width: "50%"}}>
                  <p>Kiosk</p>
                  <img src={kiosk} alt="Card Image" style={{ width: '95%', height: '200px', borderRadius: '8px 8px 0 0', padding: '10px' }} />
                </div>
                <div style={{display: "flex", flexDirection: "column", width: "50%"}}>
                  <p>Shelf</p>
                  <img src={shelf} alt="Card Image" style={{ width: '95%', height: '200px', borderRadius: '8px 8px 0 0', padding: '10px'  }} />
                </div>
              </div>
            {/* <p>Some descriptive text inside the card.12</p> */}
          </div>

          <div className="cards"
            style={{
              cursor: "default",
              minWidth: '55vw',
            }}
          >
            <h1>Key Takeaways</h1>
            <p>
              Forged networking pathways across cohort members to aid in future project collaboration.
              <br/><br/><br/>
              Opened potential opportunities for Supra Coders to continue to build on their skills while working at their home units.
              <br/><br/><br/>
              Maintaining diverse channels of communication with project teams and Supra Coder leadership to facilitate potential projects and applications within home squadrons.
            </p>
          </div>

          <div className="cards"
            style={{
              cursor: "default",
              minWidth: '55vw',
            }}
            // onClick={() => handleOpenModal( { src: Screenshot_aspect_ratio, width: 1100, height: 500})}
            >
              {/* <img src={Screenshot_aspect_ratio_2} alt="Card Image" style={{ width: '800px', height: '200px', borderRadius: '8px 8px 0 0' }} /> */}
            <h1>Questions?</h1>
            {/* <p>Some descriptive text inside the card.12</p> */}
          </div>

          {activeDiv && (
            <Modal
              imageUrl={activeDiv.src}
              width={activeDiv.width}
              height={activeDiv.height}
              onClose={handleCloseModal}
            />
          )}

        </div>
      </div>
    </>
  );
}

export default App;
