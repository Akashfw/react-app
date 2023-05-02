import React from 'react'
import {useState} from "react";

function Counter() {
    let [counter, setCounter] = useState(0);
  return (
    <div><h1>Count is - {counter}</h1>
    <button onClick={()=>{setCounter(counter+1)
    console.log(counter)}}>+</button>
    <button onClick={()=>{
      if(counter===0){return}
      setCounter(counter-1);
    console.log(counter)}}>-</button></div>
  )
}

export default Counter