import React from 'react';
import place1 from "../assets/Place1.png";
import place2 from "../assets/Place2.png";
import place3 from "../assets/Place3.png";
import arrow from "../assets/Vector.png";

const Destination = () => {
  return <div className='topdes'>
    <div className='cat'>Top Selling</div>
    <div className='wobs'>Top Destinations</div>
    <div className='places'>
        <div className='place'>
            <img src={place1} alt="GroupI"/>
            <h4>Rome, Italy<div className='price'>$5.42k</div></h4>
            <div className='tripday'><img src={arrow} alt="Arrow"/>10 Days Trip</div></div>
        <div className='place'>
            <img src={place2} alt="GroupI"/>
            <h4>London, UK<div className='price'>$4.2k</div></h4>
            <div className='tripday'><img src={arrow} alt="Arrow"/>12 Days Trip</div></div>
        <div className='place'>
            <img src={place3} alt="GroupI"/>
            <h4>Full Europe<div className='price'>$15k</div></h4>
            <div className='tripday'><img src={arrow} alt="Arrow"/>20 Days Trip</div></div>
    </div>
  </div>;
};

export default Destination;
