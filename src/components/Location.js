import React, { Component } from 'react';
import Map from './Map';

class Location extends Component {
  render () {
    return (
      <div>
        <div className='container' id='top'>
          <h2 className='center-align'>Join us in Seattle!</h2>
        </div>
        <img src={'/media/seattle-870282_1920.jpg'} alt={'Seattle Skyline'} className='full-img' />
        <div className='container'>
          <div className='container'>
            <h2 className='center-align' id='venue'>Venue</h2>
            <p>ServerlessDays Seattle will take place at <a href='https://www.pcs.org/' target='_blank' rel='noopener noreferrer'>McCaw Hall</a> in downtown Seattle, Washington.</p>
            <p>Nesholm Family Lecture Hall at McCaw Hall <br />321 Mercer Street <br />Seattle, WA 98109</p>
            <div className='small-space' />
          </div>
        </div>
        <img src={'/media/Lecture-Hall-1-Gallery-2017-c623946fe5.jpg'} alt={'Nesholm Family Lecture Hall'} className='full-img' />
        <div className='small-space' />
        <h2 className='center-align' id='map'>Map</h2>
        <Map />
      </div>
    );
  }
}

export default Location;
