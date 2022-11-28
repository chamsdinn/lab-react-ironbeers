import React from 'react'
import { Link } from 'react-router-dom'
import headerImg from '../assets/header.png'
const Header = () => {
  return (
    <header>

      <Link to='/'><img src={headerImg} alt="" /></Link>


    </header>
  )
}

export default Header