import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  const AddValue = () =>{
    if(counter == 20){
      setCounter(20)
    }else{
      setCounter(counter+1)
    }
    
    
  }

  const RemoveValue = () =>{
    if(counter <= 0){
      setCounter(0)
    }else{
      setCounter(counter-1)
    }
    
  }

  return (
    <>
      <h1>Counter</h1>
      <h2>Counter Value: {counter}</h2>
      <button
        onClick={AddValue}
      >Up</button>
      <br/>
      <button
        onClick={RemoveValue}
      >Down</button>
    </>
  )
}

export default App
