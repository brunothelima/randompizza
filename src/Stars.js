import React from 'react';
import starOn from './assets/starOn.svg'
import starOff from './assets/starOff.svg'
import './Stars.css'

function Stars({ stars }) {  
  const on = [...Array(stars)].map(i => <img alt="on" key={i} src={starOn} />)
  const off = [...Array(5 - stars)].map(i => <img alt="off" key={i} src={starOff} />)

  return ( 
    <div className="stars">
      <div className="stars__label">Stars</div>
      <div className="stars__rating">{on}{off}</div>
    </div>
  );
}

export default Stars;
