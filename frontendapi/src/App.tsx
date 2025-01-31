import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>hello</h1>
     <button onClick={() => setCount(count + 1)}>Increment</button>
     <p>Count: {count}</p>
    </>
  )
}
export default App
