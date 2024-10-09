import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// function MyApp() {
//   return (
//     <div>
//       <h1>MyApp</h1>
//     </div>
//   )
// }

// const reactElement = {
//   type: 'a',
//   props: {
//     href: 'https://www.google.com/',
//     target: '_blank'
//   },
//   children: "Click me to visit google"
// }

const anotherObj = (
  <a href="https://www.google.com" target='_blank'>Google</a>
)

const username = 'Sahil Alam'
const newObj = React.createElement (
  'a',
  {href: 'https://www.google.com' , target : '_blank'},
  'click here to visit google',
  username
)

createRoot(document.getElementById('root')).render(

  newObj

)
