import React from 'react';
import { Link } from 'react-router-dom';
import traveller from '../assets/Traveller.png';

const Showcase = () => {
  return <div className='screen'>
      <section className='showcase'>
          <div className='tag'>
          Best Destinations around the world
          </div>
          <div className='overlay'>
            <h1>Travel, enjoy <br/> and live a new
            <br/> and full life.</h1>
          </div>
          <div className='desc'>
          Built Wicket longer admire do barton vanity itself do in it.<br/>
          Preferred to sportsmen it engrossed listening. Park gate<br/>
          sell they west hard for the.
          </div>
          <div className='buttons'>
            <Link className='links-fmo' to="/flights">Find out more</Link>
            <Link className='links-pd' to="/bookings"><span className='pdtext'>Play Demo</span></Link>
          </div>
      </section>
      <section className='traveller'>
          <img src={traveller} alt="Traveller"/>
      </section>
  </div>;
};

export default Showcase;
