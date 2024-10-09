import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // useState is hook in REACT which takes a default value, 
  // it returns an array of two arguements i.e counter and a function 
  // that function is used to set the value of counter, and its name can be anything it's not necessary to name the function as setCount

  const [counter, setCount] = useState(15);
  // let counter = 15

  const addValue = () =>{
      
    setCount(counter + 1)
    console.log("counter : " + counter)
  }

  const removeValue = () => {

    setCount(counter - 1)
    console.log('counter : ' + counter)
  }

  return (
    <>
      <h1>Lets start with basic</h1>
      <h3>Count : {counter}</h3>

      {/* here we are passing the refernce of the function which should be 
      performed when we click the button show below */}

      <button onClick={addValue}>Inc: {counter}</button><br />
      <button onClick={removeValue}>Dec: {counter}</button>

      <footer>Final_count : {counter}</footer>
    </>
  )
}

export default App
