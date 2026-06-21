import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)

  const increase = () =>{
    if(counter >= 20) {
      alert("Counter can not be greater than 20")
      return
    }
    setCounter(counter+1)
  }

  const decrease = () => {
    if(counter <= 0) {
      alert("Counter can not be less than 0")
      return
    }
    setCounter(counter-1)
  }
  

  return (
    <>
        <h1>Chai aur Code</h1>
        <h2>Counter : {counter}</h2>

        <button onClick={increase}>Increase</button>
        <br />
        <button onClick={decrease}>Decrease</button>

        <footer></footer>
    </>
  )
}

export default App
