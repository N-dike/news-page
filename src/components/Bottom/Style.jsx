import styled from "styled-components";

export const Wrapper = styled.div `
    display: grid;
    grid-column-gap: 40px;
    grid-row-gap: 0px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    margin-top: 50px;
    @media (max-width: 960px){
        display: grid;
        grid-column-gap: 0px;
        grid-row-gap: 35px;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(3, 1fr);
    }
`
export const CardWrapper = styled.div`
    display: flex;

`

export const ImgWrapper = styled.div `
    height: 100%;
    width: 100%;
`

export const Image = styled.img `
    display: block;
    height: 100%;
    max-width: 100%;
    @media (max-width: 960px) {
        
    }

`
export const TextWrapper = styled.div`
    flex-direction: column;
    margin-left: 30px;
    width: 100%;

`
export const H1 = styled.h1 `
    color: hsl(233, 8%, 79%);
    font-weight: 700;
    font-size: 35px;
    margin-bottom: 10px;
    width: 100%;
    
    `

export const H2 = styled.h2 `
    color: hsl(240, 100%, 5%);
    font-size: 20px;
    font-weight: 800;
    margin-bottom: 10px;
    &:hover{
        color: hsl(5, 85%, 63%);
        cursor: pointer;
    }
    @media (max-width: 960px) {
        font-weight: 700;
    }
`

export const Span = styled.span `
    color: hsl(236, 13%, 42%);
    font-size: 15px;
    font-weight: 400px;
    line-height: 20px;
`