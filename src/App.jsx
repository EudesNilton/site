import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Header/>
        <div className='me'>
          <h1>
            Eudes Nilton
          </h1>
          <p>Desenvolvedor de Software</p>
        </div>
        <Footer/>
        
    </>
  )
}

export default App
