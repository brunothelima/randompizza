import { useState } from 'react'
import { initial, pizzas } from './pizzas.js'

export function usePizza() {

  pizzas.map(pizza => new Image().src = pizza.img)
  
  let [loading, setLoading] = useState(false)
  let [current, setCurrent] = useState(initial)

  const randomize = () => {
    setLoading(true)
    
    const haystack = [...pizzas]
    haystack.splice(pizzas.indexOf(current), 1)
    
    const needle = Math.floor(Math.random() * haystack.length)

    setTimeout(() => setCurrent(haystack[needle]), 750)
    setTimeout(() => setLoading(false), 1500)
  }
  
  return {
    loading,
    current,
    randomize
  }
}