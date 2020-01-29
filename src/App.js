import React from 'react';
import { useState } from 'react'
import { initial, pizzas } from './pizzas.js'
import './App.css'

function App() {
  let [loading, setLoading] = useState(false)
  let [current, setCurrent] = useState(initial)
  /**
   * This funcion select's a random pizza from the "pizzas" stack
   * and set the reactive variables to their new state
   */
  const randomize = () => {
    // hurrp durr
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
      <div className={`rdpizza__pizza ${(loading ? 'rdpizza__pizza--loading' : '')}`}>
        <img alt="pizza" src={current.img} />
      </div>
      <h3>{current.name}</h3>
      <button disabled={loading} onClick={randomize}>Randomize!</button>  
    </div>
  );
}

export default App;
