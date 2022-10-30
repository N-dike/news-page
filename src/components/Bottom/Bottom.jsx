import { cards } from './Card'
import { CardWrapper, H1, H2, Image, ImgWrapper, Span, TextWrapper, Wrapper } from "./Style"

const Bottom = () => {
   
return (
    <Wrapper>
    {cards.map(({No, title, content, image}) => (
        <CardWrapper>
            <ImgWrapper>
                <Image src={image} alt="placeholder" />
            </ImgWrapper>
            <TextWrapper>
                <H1>{No}</H1>
                <H2>{title}</H2>
                <Span>{content}</Span>
            </TextWrapper>
        </CardWrapper>
    ))}
    </Wrapper>
)
}


export default Bottom