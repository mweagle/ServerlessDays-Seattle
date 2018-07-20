import React, { Component } from 'react';

class Schedule extends Component {
  render () {
    return (
      <div className='container' id='top'>
        <div className='container center-align'>
          <h2>Schedule coming soon!</h2>
          <img src={'/media/dino_mascot.png'} alt={'ServerlessDays mascot'} className='responsive-img not-wide' />
          <p>Psst! Serverless Dino says to <a data-target='signupModal' className='modal-trigger'>sign up for our mailing list</a> to be notified when tickets go on sale, speakers are updated and the schedule is posted.</p>
        </div>
      </div>
    );
  }
}

export default Schedule;
