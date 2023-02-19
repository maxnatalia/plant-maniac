import { Header } from "../../../common/styles/Header";
import { Paragraph } from "../../../common/styles/Paragraph";
import { Section } from "../../../common/styles/Section";
import { Button } from "../../../common/styles/Button";
import { Article, ContentWrapper, Wrapper, BtnContainer, Image, Container, SpaceContainer } from "./styled.js";


const Offer = () => {
    return (
        <Section>
            <Header>What we offer?</Header>
            <Paragraph>With us every Plant Maniac will find in our shop new plants including collector plants.</Paragraph>
            <Article>
                <Wrapper office>
                    <ContentWrapper>
                        <Header>plants for office</Header>
                        <Paragraph size>
                            These plants are easy to care for and do well in office conditions,
                            such as lack of natural light and dry air. Additionally,
                            many of them have air purifying properties and improve air quality in the room,
                            which can help improve the quality of life and health of employees.
                        </Paragraph>
                        <Button>blog & tips</Button>
                        <Button>products</Button>
                        <Button>about us</Button>
                        <Button>collector plants</Button>
                    </ContentWrapper>
                </Wrapper>
            </Article>
            <Article>
                <Wrapper home>
                    <ContentWrapper>
                        <Header>plants for home</Header>
                        <Paragraph size>
                            It is important to make sure that the plants are properly matched to the conditions in the specific room,
                            such as light availability, humidity, and temperature.
                        </Paragraph>
                        <Button>blog & tips</Button>
                        <Button>products</Button>
                        <Button>about us</Button>
                        <Button>collector plants</Button>
                    </ContentWrapper>
                </Wrapper >
            </Article>
        </Section>
    )
}

export default Offer;