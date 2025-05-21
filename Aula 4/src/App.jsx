import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Props from './components/Props'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Oi</h1>
      <Props nome={(2)} newname={"Teste"} atributo={"red"}/>
    </>
  )
}

export default App
