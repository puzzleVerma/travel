import React from 'react';
import step1 from "../assets/Step1.png";
import step2 from "../assets/Step2.png";
import step3 from "../assets/Step3.png";
import booking from "../assets/BookingImage.png";

const Bookatrip = () => {
  return <div className='bookat'>
    <div className='fhalf'>
    <div className='cat'>Easy and Fast</div>
    <div className='wobs'>Book Your Next Trip In 3 Easy Steps</div>
    <div className='steps'>
        <div className='step'>
            <img src={step1} alt="GroupI"/>
            <div className='step-desp'><h4>Choose Destination</h4>
            <div className='tripday'>Lorem ipsum dolor sit amet, consectetur 
adipiscing elit. Urna, tortor tempus. </div></div></div>
        <div className='step'>
            <img src={step2} alt="GroupI"/>
            <div className='step-desp'><h4>Make Payment</h4>
            <div className='tripday'>Lorem ipsum dolor sit amet, consectetur 
adipiscing elit. Urna, tortor tempus. </div></div></div>
        <div className='step'>
            <img src={step3} alt="GroupI"/>
            <div className='step-desp'><h4>Reach Airport on Selected Date</h4>
            <div className='tripday'>Lorem ipsum dolor sit amet, consectetur 
adipiscing elit. Urna, tortor tempus. </div></div></div>
    </div>
    </div>
    <div className='shalf'>
      <img src={booking} alt="Booking Screen"/>
    </div>
  </div>;
};

export default Bookatrip;
