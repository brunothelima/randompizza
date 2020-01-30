import React from 'react';
import { useState } from 'react'
import { pizzas } from './pizzas'
import Stars from './Stars'
import Calories from './Calories'
import Rarity from './Rarity'
import './App.css'

function App() {
  let [loading, setLoading] = useState(undefined)
  let [current, setCurrent] = useState(pizzas[0])
  /**
   * This funcion select's a random pizza from the "pizzas" stack
   * and set the reactive variable to their new state
   */
  const randomize = () => {
    // Put the app in loading state
    setLoading(true)
    // Creates a new stack of pizzas without the current selected
    const haystack = [...pizzas]
    haystack.splice(pizzas.indexOf(current), 1)
    // A random index number to be the needle for the pizza hystack
    const needle = Math.floor(Math.random() * haystack.length)
    // Changes the current pizza to the new one as the animation continues
    setTimeout(() => setCurrent(haystack[needle]), 750)
    // Ends the rotation animation
    setTimeout(() => setLoading(false), 1500)
  }

  return (
    <div className="rdpizza">
      <div className={`pizza ${(loading ? 'pizza--loading' : '')}`}>
        <img alt={current.name} src={current.img} />
        <div className="pizza__info">
         <Stars stars={current.stars} />
         <Calories calories={current.calories} />
         <Rarity rarity={current.rarity} />
        </div>
      </div>
      <h3>{current.name}</h3>
      <button disabled={loading} onClick={randomize}>Randomize!</button>  
    </div>
  );
}

export default App;
