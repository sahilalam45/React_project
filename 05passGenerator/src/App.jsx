import { useCallback, useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumber] = useState(false)
  const [characterAllowed, setCharater] = useState(false)

  const [password, setPassword] = useState("")

  //use useRef()
  //for selection visual 
  const passwordRef = useRef(null)

  //use useCallback()
  const passwordGenerator  = useCallback(() => {
    let pass = ''
    let string ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if(numberAllowed) string += '0123456789'
    if(characterAllowed) string += '!@#$%^&*()[]{}'

    for(let i=1; i<= length; i++){
      let idx = Math.floor(Math.random() * string.length + 1)

      pass += string.charAt(idx);
    }

    setPassword(pass)


  }, [length, numberAllowed, characterAllowed])

  const copyPasswordToClipboard = useCallback(() => {
    //used to select ref value
    passwordRef.current?.select();
    //used to select the ref value in a range
    // passwordRef.current?.setSelectionRange(0,100);
    window.navigator.clipboard.writeText(password)
  }, 
  [password])

  //useEffect()
  useEffect( ()=>{
    passwordGenerator()
  }, [length, numberAllowed, characterAllowed, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto my-8 p-4 shadow-md
      rounded-lg text-orange-500 bg-gray-800'>
        
        <h1 className='text-white text-center text-2xl my-2'>Pass Generator</h1>

        <div className='flex shadow rounded-lg overflow-hidden
        mb-4'>
          <input 
            type="text"
            value={password}
            className='outline-none w-full  py-1 px-3'
            placeholder='Password'
            readOnly
            ref={passwordRef}
          />
          <button 
          onClick={copyPasswordToClipboard}
          className=' outline-none bg-blue-700 text-white
          px-3 py-0.5 shrink-0'>Copy
          </button>

        </div>
        <div className='flex text-sm gap-x-4'>
          <div className='flex items-center gap-x-1'>
            <input 
              type="range"
              min = {0}
              max = {100}
              value={length}
              className='cursor-pointer'
              onChange={(e) =>{setLength(e.target.value)}}
            />
            <label>Length: {length}</label>

          </div>
          <div className='flex items-center gap-x-1'>
            <input 
              type="checkbox"
              defaultChecked = {numberAllowed}
              id='numberInput'
              onChange={() => {
                setNumber((prev) => !prev)
              }}    
           />
           <label htmlFor='numberInput'>Number</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={characterAllowed}
              id='charInput'
              onChange={() => {
                setCharater((prev) => !prev)
              }}
            />
            <label htmlFor='charInput'>Character</label>
          </div>

        </div>
      
      </div>
    </>
  )
}

export default App
