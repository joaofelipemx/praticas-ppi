import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import CartaoAluno from './components/CartaoAluno'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <CartaoAluno
        nome = "João Felipe"
        turma = "INFO3M"
        matricula="20241094010018"
        mediaNotas={3}
      />
      <CartaoAluno
        nome = "João Felipe"
        turma = "INFO3M"
        matricula="20241094010018"
        mediaNotas={8}
      />
    </div>
  )
}

export default App
