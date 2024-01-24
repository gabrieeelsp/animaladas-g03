import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <div className="container">
      <h1>¡Hola, mundo!</h1>
      <button type="button" className="btn btn-primary">
        Botón de Bootstrap
      </button>
    </div>
    </>
  )
}

export default App
