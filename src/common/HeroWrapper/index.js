
import { Header } from "../styles/Header";
import { Wrapper, Video, Span, Container, HomeLink } from "./styled";
import videoBg from "./plant-video.mp4";

const HeroWrapper = ({ title }) => {
    return (
        <Wrapper>
            <Video src={videoBg} autoPlay muted loop />
            <Container>
                <HomeLink to='/'>home</HomeLink>
                <Span>/</Span>
                <Header>{title}</Header>
            </Container>
        </Wrapper>
    )
}

export default HeroWrapper;