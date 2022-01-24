import React from 'react';
import group1 from "../assets/Group1.png";
import group2 from "../assets/Group2.png";
import group3 from "../assets/Group3.png";
import group4 from "../assets/Group4.png";

const Services = () => {
  return <div className='services'>
    <div className='cat'>CATEGORY</div>
    <div className='wobs'>We Offer Best Services</div>
    <div className='offers'>
        <div className='offer'>
            <img src={group1} alt="GroupI"/>
            <h3>Calculated Weather</h3>
            <h4>Built Wicket longer admire do barton vanity itself do in it.</h4></div>
        <div className={`offer offer-a`}>
            <img src={group2} alt="GroupI"/>
            <h3>Best Flights</h3>
            <h4>Engrossed listening. Park gate sell they west hard for the.</h4></div>
        <div className='offer'>
            <img src={group3} alt="GroupI"/>
            <h3>Local Events</h3>
            <h4>Barton vanity itself do in it. Preferd to men it engrossed listening.</h4></div>
        <div className='offer'>
            <img src={group4} alt="GroupI"/><
                h3>Customization</h3>
                <h4>We deliver outsourced aviation services for military customers</h4></div>
    </div>
  </div>;
};

export default Services;
