import React, { Component } from 'react';
class Header extends Component {
  render () {
    return (
      <div>
        <header className='header grad-bg'>
          <img src={'/media/logo-serverless-sea.png'} alt={'ServerlessDays SEA logo'} className='responsive-img' />
          <h2>One Day. One Track. One Community.</h2>
          <h4>Save The Date</h4>
          <a href='https://www.papercall.io/serverless-days-sea' target='_blank' rel='noopener noreferrer' className='btn-large top-marg'>Propose a talk!</a>
          <h5 className='top-marg'>October 4th, 2018 - Seattle, WA</h5>
        </header>
      </div>
    );
  }
}

export default Header;
