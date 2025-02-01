import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {

  let [counter, setCounter] = useState(10)

  function  addValue(){
    console.log("value added", counter);
    setCounter(counter + 1)
  }

   // to add more values to previous counter value use this methods interview questions

  //  setCounter(preCounter => preCounter + 1)
  //  setCounter(preCounter => preCounter + 1)
  //  setCounter(preCounter => preCounter + 1)
  //  setCounter(preCounter => preCounter + 1)

  function remoValue (){
    console.log('value decreased',counter);
    setCounter(counter - 1)
  }
  return (
    <>

    <h2>Code FOR India</h2>
    <h2>Counter value: {counter}</h2>

    <button onClick={addValue}>
      Add value</button>
      <br />

    <button  onClick={remoValue}>Remove value</button>



  </>
  )
}
export default App
