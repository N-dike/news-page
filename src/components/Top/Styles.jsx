import styled from 'styled-components'

export const Wrapper = styled.div `
    display: grid;
    grid-column-gap: 30px;
    grid-row-gap: 0px;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 1fr 0fr;
    @media (max-width: 960px){
        display: flex;
        flex-direction: column;
    }
`
export const Left = styled.div `
    grid-area: 1 / 1 / 2 / 2;
`
export const Img = styled.img `
    max-height: 100%;
    max-width: 100%;
    object-fit: contain;
`
export const TextArea = styled.div `
    display: grid;
    grid-column-gap: 40px;
    grid-row-gap: 0px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    margin-top: 30px;
    @media (max-width: 960px) {
        display: flex;
        flex-direction: column;
    }
`
export const Header = styled.div `
    margin-right: 50px;
    width: 100%;
`
export const HLeft = styled.h1 `
    color:hsl(240, 100%, 5%);
    font-size: 50px;
    font-weight: 800;
    line-height: 60px;
    width: 100%;
`
export const Content = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-left: 0px;
    @media (max-width: 960px){
        padding-left: 0px;
    }
`
export const P = styled.p `
    color: hsl(236, 13%, 42%);
    font-size: 15px;
    font-weight: 400;
    line-height: 30px;
    margin-bottom: 20px;
`
export const Butt = styled.button `
    background-color: hsl(5, 85%, 63%);
    border: none;
    color: hsl(36, 100%, 99%);
    cursor: pointer;
    font-weight: 700;
    letter-spacing: 4px;
    padding: 15px 10px;
    width: 50%;
    &:hover{
        background-color: hsl(240, 100%, 5%);
    }
    @media (max-width: 960px){
        padding: 20px 10px;
        width: 60%;
    }
`

export const Right = styled.div `
    background-color: hsl(240, 100%, 5%);
    grid-area: 1 / 2 / 2 / 3;
    padding: 20px 20px;
    @media (max-width: 960px) {
        margin-top: 40px;
    }
`

export const HRight = styled.h1 `
    color: hsl(35, 77%, 62%);
    font-size: 40px;
    font-weight: 800;
`
export const SubHeader = styled.h2 `
    color: hsl(36, 100%, 99%);
    font-size: 20px;
    font-weight: 700px;
    margin-bottom: 10px;
    margin-top: 10px;
    &:hover{
        color: hsl(35, 77%, 62%);
        cursor: pointer;
    }
`
export const Pr = styled.p `
    color: hsl(36, 100%, 99%);
    font-size: 15px;
    font-weight: 400;
    line-height: 25px;
    margin-bottom: 10px;
`
export const Hr = styled.hr `
    background-color: hsl(36, 100%, 99%);
    height: 0.05px;
    margin: 35px 0px;
`