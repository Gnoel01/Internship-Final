import React from 'react';

const TextCard = () => {
  
  return (
    <>
      <div className='text-card'>
        <h4 style={{textAlign: 'center'}}>Additional Accomplishments</h4>
        <ol>
          <li>
            Fixed typos and visual implementation issues across the application.
          </li>
          <br/>
          <li>
            Assisted with number placement and question ID placement and Duplicate question deconfliction.
          </li>
          <br/>
          <li>
            Unit testing
          </li>
          <br/>
          <li>
            Interviews with client squadron discussing options and implementation of new features.
          </li>
          <br/>
          <li>
            Assisted with making existing questions editable.
          </li>
          <br/>
          <li>
            We pitched scalability options: Reference dropdown, Test templates
          </li>
          <br/>
          <li>
            Implemented inactivity token security feature.
          </li>
          <br/>
          <li>
            Internet 101 course with James.
          </li>
          <br/>
          <li>
            3-part structural relationship and execution flowchart.
            <br/>- Nouns/Verbs list
            <br/>- Relationship Chart
            <br/>- Operational flow chart
          </li>
          <br/>
          <li>
            Attended in person briefing and tour of operational area with client unit.
          </li>
          <br/>
          <li>
            Created application operational flow chart based on information from client demonstration.
          </li>
          <br/>
          <li>
            Researched scanner technology and compliance.
            <br/>-Identified potential scanner technology solution. (Needs official authorization)
          </li>
        </ol>
      </div>

      {/* <div style={{display: "flex"}}>
        <div className='text-card'>
          <h4 style={{width: '35vw' , textAlign: 'center'}}>Kiosk</h4>

        </div>
        <div className='text-card'>
          <h4 style={{width: '35vw' , textAlign: 'center'}}>Shelf</h4>

        </div>

      </div> */}
    </>
    
  )
}

export default TextCard;