import styled from 'styled-components'


export const AppWrapper = styled.div `
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    width: 80%;
    @media (max-width: 960px){
        display: flex;
        flex-direction: column;
        margin:auto;
        width: 90%;
    }
`
export const PageWrapper = styled.div `
    top: 70px;
    @media (max-width: 960px){
        position: absolute;
        top: 100px;
        width: 90%;
    }

`