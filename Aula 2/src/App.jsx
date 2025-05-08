import { useState } from 'react'
import Scope from './components/scope'
import ScopeReduce from './components/ScopeReduce'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Scope/>
      <ScopeReduce/>
    </>
  )
}

export default App
