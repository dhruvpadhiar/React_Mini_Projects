import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className='w-full h-screen duration-200'
    style={{backgroundColor: color}}>
      <div>
        <h1>hello</h1>
      </div>

    </div>
  )
}

export default App
