import React from 'react'
import exam from '../assets/Screenshot Exam.png';

const MainCard = ({ handleOpenModal }) => {

  return (
    <div>
      <div
        className="main-card"
        onClick={() => handleOpenModal( { src: exam, width: 1500, height: 500})}
      >
        <img src={exam} alt="Card Image" style={{ width: '71.25vw', height: '55vh', borderRadius: '8px 8px 0 0' }} />
        <h2>Stan/Eval App</h2>
        <p>Quick look at the old vs new</p>
      </div>
    </div>
  )
}

export default MainCard;