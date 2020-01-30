import React from 'react';
import rockOn from './assets/rockOn.svg'
import rockOff from './assets/rockOff.svg'
import './Rarity.css'

function Rarity({ rarity }) {
  const on = [...Array(rarity)].map(i => <img alt="on" key={i} src={rockOn} />)
  const off = [...Array(5 - rarity)].map(i => <img alt="off" key={i} src={rockOff} />)

  return ( 
    <div className="rarity">
      <div className="rarity__label">Rarity</div>
      <div className="rarity__rating">{on}{off}</div>
    </div>
  );
}

export default Rarity;
