import { Header } from "../../../common/styles/Header"
import { Paragraph } from "../../../common/styles/Paragraph"
import { Section } from "../../../common/styles/Section"
import { data } from "./data";
import { Container, ImageWrapper, Image, Wrapper } from "./styled.js";
import plant1 from "./plant-one.jpg";
import plant2 from "./plant-two.jpg";
import plant3 from "./plant-three.jpg";
import Logo from "../../../common/Logo";

const Introduction = () => {
    return (
        <Section>
            <Header>Indoor Plant Cultivation at Home</Header>
            <Container>
                <Wrapper>
                    <Paragraph>
                        Cultivating indoor plants is a hobby that is gaining popularity among those who want to increase
                        their green experience and improve the air quality in their homes.
                        Not only do indoor plants look beautiful,
                        but they also help in filtering the air and improving its quality.
                    </Paragraph>
                    <Logo />
                </Wrapper>
                <ImageWrapper>
                    <Image photoOne src={plant1} alt="plant photo1" />
                    <Image photoTwo src={plant2} alt="plant photo2" />
                    <Image photoThree src={plant3} alt="plant photo3" />
                </ImageWrapper>
            </Container>

            <div>
                {data.map(({ id, title, text, icon }) => (
                    <article key={id}>
                        <div>{icon}</div>
                        <h3>{title}</h3>
                        <p>{text}</p>
                    </article>
                ))}
            </div>
        </Section>

    )
}

export default Introduction;