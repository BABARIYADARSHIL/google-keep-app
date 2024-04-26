import React from 'react'
import logo from '../Images/logo.png'


function Header() {
  return (
    <>
      <div className='header'>
        <img src={logo} alt='logo' width='70' height='50' id='logo' />
        <h1>Google Keep</h1>
      </div>
    </>
  )
}

export default Header