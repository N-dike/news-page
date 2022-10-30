import DesktopNavbar from './DesktopNavbar.jsx'
import Logos from '../../images/logo.svg'
import MobileNavbar from './MobileNavbar.jsx';
import { Logo, LogoImage, NavbarWrapper } from './Styles.jsx';
import React from 'react'

const Navbar = () => {  
    var Desktop = window.innerWidth > 960;
    return (
        <NavbarWrapper>
          <Logo>
            <LogoImage src = {Logos} />
          </Logo>
          {(Desktop === true) ? (<DesktopNavbar />):(<MobileNavbar />)}
        </NavbarWrapper>
    
  )
}

export default Navbar