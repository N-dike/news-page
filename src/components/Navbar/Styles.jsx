import styled from "styled-components";

export const NavbarWrapper = styled.div `
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  @media (max-width: 960px) {
  }
`
export const Logo = styled.div `
  @media (max-width: 960px) {
    height: 90%;
    width: 20%;
    z-index: 99;
  }
`
export const LogoImage = styled.img `
  object-fit: contain;
  width: 100%;
`
export const Wrapper = styled.nav `
  display: flex;
  justify-content: end;
  margin: 50px 0px;
  width: 100%;
  @media (max-width: 960px) {
    max-height: ${(props) => (props.extendNavbar ? "100vh" : "initial")};
  }

`
export const Ul = styled.ul `
  display: flex;
  justify-content: right;
  @media (max-width: 960px) {
    align-items: left;
    flex-direction: column;
    justify-content: center;
    margin-top: 40px;
  }
`

export const Li = styled.li `
  color: hsl(233, 8%, 79%);
  list-style: none;
  margin-left: 30px;
  &:hover {
    color: hsl(5, 85%, 63%);
    cursor: pointer;
  }
    @media (max-width: 960px) {
    display: none;
  }
  `

export const Xli = styled.li `
  color: hsl(240, 100%, 5%);
  list-style: none;
  margin-bottom: 20px;
  &:hover {
    color: hsl(5, 85%, 63%);
    cursor: pointer;
  }
  @media (min-width: 960px) {
    display: none;
  }
  `

export const Burger = styled.div `
  color: hsl(240, 100%, 5%);
  display: flex;
  cursor: pointer;
  @media (min-width: 960px) {
    display: none;
  }
`
export const SidebarWrapper = styled.div `
  display: flex;
  flex-direction: row;
  height: 100%;
`
export const Backdrop = styled.div `
  background: rgba(0,0,0,0.3);
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99;
  @media (min-width: 960px) {
    display: none;
  }
`
export const Xtend = styled.div `
  align-items: right;
  background-color: white;
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin-left: auto;
  margin-right: 0;
  right: 0px;
  position: fixed;
  top: 0px;
  width: 75%;
  z-index: 100;
  @media (min-width: 960px) {
    display: none;
  }
`
export const Close = styled.div `  
  margin-left: auto;
  margin-right: 10%;
  margin-top: 40px;
`

