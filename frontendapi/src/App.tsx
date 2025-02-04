import { useState } from 'react'
import ServiceForm from './components/ServiceForm'
import ServiceIndex from './components/ServiceIndex'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className=' bg-zinc-800 h-screen text-white flex items-center justify-center'>
   <div className='bg-gray-950 p-4 w-2/5'>
   <h1 className='text-center font-bold text-6xl my-2'> APP service </h1>
          <ServiceForm />
          <ServiceIndex />
   </div>
          
 </div>
    </>
  )
}
export default App
