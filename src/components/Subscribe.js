import React from 'react';
import subsbt from "../assets/SubscribeButton.png"

const Subscribe = () => {
  return <div className='subs'>
    <div className='subs-desp'>Subscribe to get information, latest news and other
interesting offers about Cobham</div>
    <div className='subs-email'>
    <input className='text-box'
            type="text"
            placeholder='Your Email'
            height={`4vh`}
         />
    <img src={subsbt} alt="Subs-bt"/>
    </div>
  </div>;
};

export default Subscribe;
