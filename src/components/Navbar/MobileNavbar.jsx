import { Backdrop, Burger, Close, SidebarWrapper, Ul, Wrapper, Xli, Xtend } from './Styles'
import { ReactComponent as Burg } from '../../images/icon-menu.svg'
import { ReactComponent as CloseBar } from '../../images/icon-menu-close.svg'
import React, {useState} from 'react'

const MobileNavbar = () => {
    const [clicked, setClicked] = useState(false);
    console.log(clicked);
    if(clicked === true) {
      document.body.style.overflow = "hidden";
    }else {
      document.body.style.overflow = "";
    }

  return (
    <Wrapper extendNavbar = {clicked}>
        <Burger onClick = {() => { setClicked(!clicked)}}>
            <Burg />
        </Burger>
        <SidebarWrapper>
          {clicked && 
          (<>
            <Backdrop />
            <Xtend>
              <Close onClick = {() => {setClicked((curr) => !curr)}}>
                <CloseBar />
              </Close>
              <Ul>
                <Xli>Home </Xli>
                <Xli>New </Xli>
                <Xli>Popular</Xli>
                <Xli>Trending</Xli>
                <Xli>Categories</Xli>
              </Ul>
            </Xtend></>)}
        </SidebarWrapper>
    </Wrapper>
  )
}

export default MobileNavbar