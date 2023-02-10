import { Header } from "../../../common/styles/Header";
import { Paragraph } from "../../../common/styles/Paragraph";
import { Section } from "../../../common/styles/Section";
import { ButtonLink } from "../../../common/styles/ButtonLink";
import { data } from "./data";
import { Container, ImageWrapper, Image, Wrapper, ArticleWrapper, Article, IconSpan } from "./styled.js";
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
                        Having plants in the home brings many benefits for our health and well-being.
                        They serve as natural air filters, helping to remove harmful substances such as formaldehyde, benzene, and trichloroethylene.
                        At night, they release carbon dioxide, which helps to maintain good air quality and improve sleep quality.
                    </Paragraph>
                    <Paragraph>
                        Studies show that the presence of plants in the workplace can improve concentration and productivity.
                        Plants are associated with better well-being and fewer symptoms of depression.
                        Additionally, plants naturally regulate temperature and humidity,
                        which can help to save energy and lower heating and air conditioning bills.
                    </Paragraph>
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
            <ArticleWrapper>
                {data.map(({ id, title, text, icon }) => (
                    <Article key={id}>
                        <IconSpan>{icon}</IconSpan>
                        <Header small>{title}</Header>
                        <Paragraph hiddenCard>{text}</Paragraph>
                        <ButtonLink to="/products">products</ButtonLink>
                    </Article>
                ))}
            </ArticleWrapper>
        </Section>

    )
}

export default Introduction;