import React from 'react'
import { Nav, NavbarContainer, NavLogo } from './NavbarElement'

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
            <NavLogo to='/'>dollar</NavLogo>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar
