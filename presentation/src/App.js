import logo from './logo.png';
import './App.css';
// import profile from './components/Moon.png';
import exam from './components/Screenshot Exam.png';
import darkmode from './components/Screenshot Dark Mode.png';
import qSelector from './components/Screenshot Q selector.png';
import sidebar from './components/Screenshot sidebar.png';
import sidebarSS from './components/Screenshot sidebar ss comp.png';
import qIso from './components/Screenshot question iso.png';
import qIso2 from './components/Screenshot question iso 2.png';
import Screenshot_aspect_ratio from './components/Screenshot aspect ratio.png';
import Screenshot_aspect_ratio_2 from './components/Screenshot aspect ratio 2.png';
import oldDPE2 from './components/Screenshot old DPE 2.png';
import DPE3 from './components/Screenshot DPE 3.png';
import practical from './components/Screenshot practical.png';


import DPE1 from './components/Screenshot DPE 1.png';
import DPE2 from './components/Screenshot DPE 2.png';
import oldDPE from './components/Screenshot old DPE.png';


import React, { useState } from 'react';
import Modal from './components/Modal';
import DarkMode from "./components/DarkMode.js";

function App() {

  const [activeDiv, setActiveDiv] = useState(null);

  const handleOpenModal = (selectedDiv) => {
    setActiveDiv(selectedDiv);
  };

  const handleCloseModal = () => {
    setActiveDiv(null);
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
          <div className="Modal-Flex">

            
            <div>
              <div 
                style={{
                  cursor: 'pointer',
                  color: 'blue',
                  padding: '20px',
                  backgroundColor: 'White',
                  border:'1px solid black',
                  borderRadius: '8px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  margin: '10px',
                  // maxWidth: '65vw',
                  textAlign: 'center'
                }}
                onClick={() => handleOpenModal( { src: exam, width: 1100, height: 500})}>
                  <img src={exam} alt="Card Image" style={{ width: '955px', height: '350px', borderRadius: '8px 8px 0 0' }} />
                <h2>Stan/Eval App</h2>
                <p>Quick look at the old vs new</p>
              </div>
            </div>
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              }}>
              <div 
                style={{
                  cursor: 'pointer',
                  color: 'blue',
                  padding: '20px',
                  backgroundColor: 'white',
                  border:'1px solid black',
                  borderRadius: '8px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  margin: '10px',
                  maxWidth: '35vw',
                  textAlign: 'center'
                }}
                onClick={() => handleOpenModal( { src: darkmode, width: 1100, height: 500})}>
                  <img src={darkmode} alt="Card Image" style={{ width: '100%', borderRadius: '8px 8px 0 0' }} />
                <h2>Dark Mode</h2>
                <p>2Some descriptive text inside the card.2</p>
              </div>

              <div 
                style={{
                  cursor: 'pointer',
                  color: 'blue',
                  padding: '20px',
                  backgroundColor: 'white',
                  border:'1px solid black',
                  borderRadius: '8px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  margin: '10px',
                  maxWidth: '35vw',
                  textAlign: 'center'
                }}
                onClick={() => handleOpenModal( { src: qSelector, width: 1100, height: 500})}>
                  <img src={qSelector} alt="Card Image" style={{ width: '100%', borderRadius: '8px 8px 0 0' }} />
                <h2>Test Generator</h2>
                <p>Some descriptive text inside the card.12</p>
              </div>
            </div>
            
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              }}>
              <div 
                style={{
                  cursor: 'pointer',
                  color: 'blue',
                  padding: '20px',
                  backgroundColor: 'white',
                  border:'1px solid black',
                  borderRadius: '8px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  margin: '10px',
                  maxWidth: '35vw',
                  textAlign: 'center'
                }}
                onClick={() => handleOpenModal( { src: sidebarSS, width: 1100, height: 500})}>
                  <img src={sidebarSS} alt="Card Image" style={{ width: '100%', borderRadius: '8px 8px 0 0' }} />
                <h2>Sidebar</h2>
                <p>3Some descriptive text inside the card.3</p>
              </div>

              <div 
                style={{
                  cursor: 'pointer',
                  color: 'blue',
                  padding: '20px',
                  backgroundColor: 'white',
                  border:'1px solid black',
                  borderRadius: '8px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  margin: '10px',
                  maxWidth: '35vw',
                  textAlign: 'center'
                }}
                onClick={() => handleOpenModal( { src: sidebar, width: 1100, height: 500})}>
                  <img src={sidebar} alt="Card Image" style={{ width: '100%', borderRadius: '8px 8px 0 0' }} />
                <h2>Sidebar Fullscreen</h2>
                <p>4Some descriptive text inside the card.4</p>
              </div>
            </div>

            <div style={{
              display: 'flex',
              flexDirection: 'row',
              }}>
              <div 
                style={{
                  cursor: 'pointer',
                  color: 'blue',
                  padding: '20px',
                  backgroundColor: 'white',
                  border:'1px solid black',
                  borderRadius: '8px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  margin: '10px',
                  maxWidth: '35vw',
                  textAlign: 'center'
                }}
                onClick={() => handleOpenModal( { src: qIso, width: 1100, height: 500})}>
                  <img src={qIso} alt="Card Image" style={{ width: '100%', borderRadius: '8px 8px 0 0' }} />
                <h2>Question Isolation</h2>
                <p>5Some descriptive text inside the card.5</p>
              </div>
              
              <div 
                style={{
                  cursor: 'pointer',
                  color: 'blue',
                  padding: '20px',
                  backgroundColor: 'white',
                  border:'1px solid black',
                  borderRadius: '8px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  margin: '10px',
                  maxWidth: '35vw',
                  textAlign: 'center'
                }}
                onClick={() => handleOpenModal( { src: qIso2, width: 1100, height: 500})}>
                  <img src={qIso2} alt="Card Image" style={{ width: '100%', borderRadius: '8px 8px 0 0' }} />
                <h2>Question Iso2</h2>
                <p>6Some descriptive text inside the card.6</p>
              </div>
            </div>

            <div style={{
              display: 'flex',
              flexDirection: 'row',
              }}>
              <div 
                style={{
                  cursor: 'pointer',
                  color: 'blue',
                  padding: '20px',
                  backgroundColor: 'white',
                  border:'1px solid black',
                  borderRadius: '8px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  margin: '10px',
                  maxWidth: '35vw',
                  textAlign: 'center'
                }}
                onClick={() => handleOpenModal( { src: Screenshot_aspect_ratio_2, width: 1100, height: 500})}>
                  <img src={Screenshot_aspect_ratio_2} alt="Card Image" style={{ width: '100%', borderRadius: '8px 8px 0 0' }} />
                <h2>Aspect Ratio</h2>
                <p>7Some descriptive text inside the card.7</p>
              </div>


              <div 
                style={{
                  cursor: 'pointer',
                  color: 'blue',
                  padding: '20px',
                  backgroundColor: 'white',
                  border:'1px solid black',
                  borderRadius: '8px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  margin: '10px',
                  maxWidth: '35vw',
                  textAlign: 'center'
                }}
                onClick={() => handleOpenModal( { src: Screenshot_aspect_ratio, width: 1100, height: 500})}>
                  <img src={Screenshot_aspect_ratio} alt="Card Image" style={{ width: '100%', borderRadius: '8px 8px 0 0' }} />
                <h2>Aspect Ratio 2</h2>
                <p>Some descriptive text inside the card.8</p>
              </div>
            </div>

            <div style={{
              display: 'flex',
              flexDirection: 'row',
              }}>
              <div 
                style={{
                  cursor: 'pointer',
                  color: 'blue',
                  padding: '20px',
                  backgroundColor: 'white',
                  border:'1px solid black',
                  borderRadius: '8px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  margin: '10px',
                  maxWidth: '35vw',
                  textAlign: 'center'
                }}
                onClick={() => handleOpenModal( { src: oldDPE2, width: 1100, height: 500})}>
                  <img src={oldDPE2} alt="Card Image" style={{ width: '100%', borderRadius: '8px 8px 0 0' }} />
                <h2>Old DPE</h2>
                <p>Some descriptive text inside the card.9</p>
              </div>

              <div 
                style={{
                  cursor: 'pointer',
                  color: 'blue',
                  padding: '20px',
                  backgroundColor: 'white',
                  border:'1px solid black',
                  borderRadius: '8px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  margin: '10px',
                  maxWidth: '35vw',
                  textAlign: 'center'
                }}
                onClick={() => handleOpenModal( { src: DPE3, width: 1100, height: 500})}>
                  <img src={DPE3} alt="Card Image" style={{ width: '100%', borderRadius: '8px 8px 0 0' }} />
                <h2>New DPE</h2>
                <p>Some descriptive text inside the card.10</p>
              </div>
            </div>

            <div style={{
              display: 'flex',
              flexDirection: 'row',
              }}>
              <div 
                style={{
                  cursor: 'pointer',
                  color: 'blue',
                  padding: '20px',
                  backgroundColor: 'white',
                  border:'1px solid black',
                  borderRadius: '8px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  margin: '10px',
                  maxWidth: '35vw',
                  textAlign: 'center'
                }}
                onClick={() => handleOpenModal( { src: practical, width: 1100, height: 500})}>
                  <img src={practical} alt="Card Image" style={{ width: '100%', borderRadius: '8px 8px 0 0' }} />
                <h2>Practical</h2>
                <p>Some descriptive text inside the card.11</p>
              </div>

              <div 
                style={{
                  cursor: 'pointer',
                  color: 'blue',
                  padding: '20px',
                  backgroundColor: 'white',
                  border:'1px solid black',
                  borderRadius: '8px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  margin: '10px',
                  maxWidth: '35vw',
                  textAlign: 'center'
                }}
                onClick={() => handleOpenModal( { src: Screenshot_aspect_ratio, width: 1100, height: 500})}>
                  <img src={Screenshot_aspect_ratio_2} alt="Card Image" style={{ width: '100%', borderRadius: '8px 8px 0 0' }} />
                <h2>Additional Accomplishments</h2>
                <p>Some descriptive text inside the card.12</p>
              </div>
            </div>

            <div style={{
              display: 'flex',
              flexDirection: 'row',
              }}>
              <div 
                style={{
                  cursor: 'pointer',
                  color: 'blue',
                  padding: '20px',
                  backgroundColor: 'white',
                  border:'1px solid black',
                  borderRadius: '8px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  margin: '10px',
                  maxWidth: '35vw',
                  textAlign: 'center'
                }}
                onClick={() => handleOpenModal( { src: Screenshot_aspect_ratio, width: 1100, height: 500})}>
                  <img src={Screenshot_aspect_ratio_2} alt="Card Image" style={{ width: '100%', borderRadius: '8px 8px 0 0' }} />
                <h2>Kiosk/Shelf</h2>
                <p>Some descriptive text inside the card.12</p>
              </div>

              <div 
                style={{
                  cursor: 'pointer',
                  color: 'blue',
                  padding: '20px',
                  backgroundColor: 'white',
                  border:'1px solid black',
                  borderRadius: '8px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  margin: '10px',
                  maxWidth: '35vw',
                  textAlign: 'center'
                }}
                onClick={() => handleOpenModal( { src: Screenshot_aspect_ratio, width: 1100, height: 500})}>
                  <img src={Screenshot_aspect_ratio_2} alt="Card Image" style={{ width: '100%', borderRadius: '8px 8px 0 0' }} />
                <h2>Final Thoughts</h2>
                <p>Some descriptive text inside the card.12</p>
              </div>
            </div>

            <div 
              style={{
                cursor: 'pointer',
                color: 'blue',
                padding: '20px',
                backgroundColor: 'white',
                border:'1px solid black',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                margin: '10px',
                minWidth: '55vw',
                textAlign: 'center'
              }}
              onClick={() => handleOpenModal( { src: Screenshot_aspect_ratio, width: 1100, height: 500})}>
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
