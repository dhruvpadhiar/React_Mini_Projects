import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-300 text-black p-4 rounded-2xl mb-4'>Tailwind Test</h1>
    </>
  )
}

export default App
