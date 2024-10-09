import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [Counter, setCounter] = useState(15);

  //  let Counter = 15

   const addValue = () =>{
    // console.log('value added', Counter)
    // Counter  = Counter + 1
    if(Counter < 20 ){
      setCounter(Counter + 1)
    }
   }

   const removeValue = () => {
     if(Counter >= 1 ){
       setCounter(Counter - 1)
     }
   }

  return (
    <>
      <h1>Chai aur react </h1>
      <h2>Counter value: {Counter}</h2>

      <button 
      onClick={addValue}
      >Add Value {Counter}</button>
      <br />
      <button
      onClick={removeValue}
      >Remove Value {Counter}</button>

      <footer>footer: {Counter}</footer>
    </>
  )
}

export default App
