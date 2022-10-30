import { Butt, Hr, Img, Content, Header, HLeft, HRight, Left, P, Right, TextArea, Wrapper, SubHeader, Pr } from './Styles.jsx'
import desktopIMG from '../../images/image-web-3-desktop.jpg'
import mobileIMG from '../../images/image-web-3-mobile.jpg'
import { useMediaQuery } from 'react-responsive'

const Top = () => {
    const isMobile = useMediaQuery ({query: `(max-width: 760px)`})
    return(
        <Wrapper>
            <Left>
                <Img src = {!isMobile ? desktopIMG : mobileIMG}/>
                <TextArea>
                    <Header>
                        <HLeft>The Bright Future of Web 3.0?</HLeft>
                    </Header>
                    <Content>
                        <P>
                            We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
                            But is it really fulfilling its promise?
                        </P>
                        <Butt>
                            READ MORE
                        </Butt>
                    </Content>
                </TextArea>
            </Left>
            <Right>
                <HRight> New</HRight> 
                <SubHeader>Hydrogen VS Electric Cars</SubHeader>
                <Pr>
                    Will hydrogen-fueled cars ever catch up to EVs? 
                </Pr>
                <Hr />
                <SubHeader>The Downsides of AI Artistry </SubHeader>
                <Pr>
                    What are the possible adverse effects of on-demand AI image generation? 
                </Pr>
                <Hr />
                <SubHeader>Is VC Funding Drying Up? </SubHeader>
                <Pr>
                    Private funding by VC firms is down 50% YOY. We take a look at what that means.
                </Pr>
            </Right>
        </Wrapper>
    )
}

export default Top;