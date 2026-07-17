import { useState } from 'react'
import './App.css'
import CartaoAluno from './components/CartaoAluno'

function App() {

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
