import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Matrix from './components/Matrix'
import MatrixGame from './components/MatrixApp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Matrix/>
    {/* <MatrixGame/> */}
    </>
  )
}

export default App
