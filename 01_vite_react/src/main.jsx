import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Chai from './Chai.jsx'
import React from 'react'

function ReactElement(){
  var userName = "Dhyey"
  return(
    <>
      <h1>{userName}</h1>
    </>
  )

}

const reactElement = {
    type : 'a',
    props : {
        href : "https://www.google.com",
        target : "_blank"
    },
    children : "Click me to visit google"
} // This is not the predefined format so we can not render this

const anotherEle = (
  <a href="https://www.google.com" target="_blank">Click me to visit google</a>
)

const reactEle = React.createElement(
  'a',
  {href : "https://www.google.com", target : "_blank"},
  'click me to visit google'
)

createRoot(document.getElementById('root')).render(
    <ReactElement />
)
