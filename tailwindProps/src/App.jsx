import { useState } from 'react'
import './App.css'

import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    name:'sahil',
    age:22
  }
   let newArr = [1,3,4,5]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'
      >Tailwind Test </h1>

      <Card username ="Chaiaurcode" btnText = 'click me' newObj = {newArr}  anotherObj = {myObj} />
      <Card username='Hitesh_Sir' />
    </>
  )
}

export default App
