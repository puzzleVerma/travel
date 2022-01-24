import React from 'react';

const Footer = () => {
  return <>
  <div className='footer'>
    <div className='foot-logo'>
      <h1>Jadoo.</h1><h4>Book your trip in minute, get full
Control for much longer.</h4>
    </div>
    <div className='company'>
      <div className="tag">Company</div>
      <div className='foot-desp'>About</div>
      <div className='foot-desp'>Career</div>
      <div className='foot-desp'>Mobile</div>
    </div>
    <div className='company'>
    <div className="tag">Contact</div>
    <div className='foot-desp'>Help/FAQ</div>
      <div className='foot-desp'>Press</div>
      <div className='foot-desp'>Affilates</div>
    </div>
    <div className='company'>
    <div className="tag">More</div>
    <div className='foot-desp'>Airlinefees</div>
      <div className='foot-desp'>Airline</div>
      <div className='foot-desp'>Low fare tips</div>
    </div>
    <div className='discover'></div>
  </div>
  <div className='bottommost'>All rights reserved@jadoo.co</div>
  </>
  ;
};

export default Footer;
