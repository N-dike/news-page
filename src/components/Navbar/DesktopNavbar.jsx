import { Li, Ul, Wrapper } from './Styles'
import React from 'react'

const DesktopNavbar = () => {
    return (
        <Wrapper>
            <Ul>
                <Li>
                    Home 
                </Li>
                <Li>
                    New 
                </Li>
                <Li>
                    Popular
                </Li>
                <Li>
                    Trending
                </Li>
                <Li>
                    Categories
                </Li>
            </Ul>
    </Wrapper>
    )
}

export default DesktopNavbar