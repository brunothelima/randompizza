import React from 'react';
import dropOn from './assets/dropOn.svg'
import dropOff from './assets/dropOff.svg'
import './Calories.css'

function Calories({ calories }) {
  const on = [...Array(calories)].map(i => <img alt="on" key={i} src={dropOn} />)
  const off = [...Array(5 - calories)].map(i => <img alt="off" key={i} src={dropOff} />) 

  return ( 
    <div className="calories">
      <div className="calories__label">Calories</div>
      <div className="calories__rating">{on}{off}</div>
    </div>
  );
}

export default Calories;
