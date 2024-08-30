import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Class_Comp from './assets/componenets/Class_Comp'
import Fun_Comp from './assets/componenets/Fun_Comp'
import CounterClass, { Apps } from './assets/componenets/Test'
import Test1 from './assets/componenets/Test1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>
        <Class_Comp/>
      </div>
      <div>
        <Fun_Comp/>
      </div>
      <div>
        <CounterClass/>
        <Apps/>
      </div> */}

      <Test1/>
    </>
  )
}

export default App
