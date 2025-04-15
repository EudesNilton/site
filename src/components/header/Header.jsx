import React, { useState } from 'react'
import {FiMenu} from 'react-icons/fi'
import { CgClose } from "react-icons/cg";
import img from '../../assets/logo.png'
import './Header.css'

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div className='header'>
        <img className='img-header' src={img} alt="" />

        <button id='btn' onClick={toggleMenu} aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}>
        {menuOpen ? <CgClose size={35} /> : <FiMenu size={35} />}
      </button>

            <ul className={`menu-itens ${menuOpen ? 'active' : ''}`}>
                <li className='itens'><a href="">Sobre mim</a></li>
                <li className='itens'><a href="">Projetos</a></li>
                <li className='itens'><a href="">Contato</a></li>

                <img className='img-header' src={img} alt="" />
            </ul>
    </div>
  )
}

export default Header