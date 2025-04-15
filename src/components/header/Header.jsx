import React, { useState } from 'react'
import img from '../../assets/react.svg'
import './Header.css'

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div className='header'>
        <img className='img-header' src={img} alt="" />

        <button id='btn' onClick={toggleMenu}> Menu </button>

            <ul className={`menu-itens ${menuOpen ? 'active' : ''}`}>
                <li className='itens'>Sobre mim</li>
                <li className='itens'>Projetos</li>
                <li className='itens'>Contato</li>

                <img src={img} alt="" />
            </ul>
    </div>
  )
}

export default Header