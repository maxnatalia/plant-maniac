import { Header } from "../../../common/styles/Header";
import { Paragraph } from "../../../common/styles/Paragraph";
import { Section } from "../../../common/styles/Section";
import { Button } from "../../../common/styles/Button";
import { Article, ContentWrapper, Wrapper, BtnContainer, Image, Container, SpaceContainer } from "./styled.js";
import { useState, useEffect } from "react";
import { plantAccessories } from "./plantAccessories";
import bedroom from "./bedroom.jpg";
import bathroom from "./bathroom.jpg";
import kitchen from "./kitchen.jpg";
import living from "./living-room.jpg";

const Offer = () => {

    const paragraphs = [
        {
            id: 1,
            img: bedroom,
            name: "bedroom",
            text: "Plants such as lavender, jasmine, and Aloe Vera are good to grow in the bedroom. They have calming properties and can improve the quality of sleep.",
        },
        {
            id: 2,
            img: bathroom,
            name: "bathroom",
            text: "Plants such as Tradescantia, Pothos, Spathiphyllum, and Philodendron thrive in the warm and humid conditions of a bathroom. They are able to process large amounts of moisture and are good air filters.",
        },
        {
            id: 3,
            img: kitchen,
            name: "kitchen",
            text: "Plants such as tomatoes, green peppers, basil, and rosemary are good options for growing in the kitchen. They not only provide fresh herbs, but also help to clean the air of some toxins.",
        },
        {
            id: 4,
            img: living,
            name: "livingroom",
            text: "Plants such as the Ficus Benjamina, Dracaena, and Monstera are good options for growing in the living room. They are low maintenance and can tolerate average humidity and light conditions.",
        }
    ];

    const [show, setShow] = useState(paragraphs[0]);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        if (show) {
            setAnimate(true);
        }
    }, [show]);

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
                        <Button>see more</Button>
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
                        <Button>see more</Button>
                    </ContentWrapper>
                </Wrapper >
            </Article>
            <Article space>
                <Header>perfect plant match</Header>
                {animate &&
                    <SpaceContainer show={show}>
                        <Image src={show.img} alt={show.name} />
                        <ContentWrapper>
                            <Header>{show.name}</Header>
                            <Paragraph size>{show.text}</Paragraph>
                        </ContentWrapper>
                    </SpaceContainer>
                }
                <BtnContainer>
                    {paragraphs.map((paragraph) => {
                        return (
                            <Container show={show} key={paragraph.id} disabled={paragraph.id === show.id} onClick={() => { setShow(paragraph); setAnimate(false) }}>
                                <Button absolute>
                                    {paragraph.name}
                                </Button>
                                <Image group src={paragraph.img} alt={paragraph.name} />
                            </Container>
                        )
                    })}
                </BtnContainer>
            </Article >

            <Article>
                <ContentWrapper accessories>
                    <Header>Accessories - how to care for your flowers and plants</Header>
                    <Paragraph>
                        You can also offer various pots and plant care accessories, such as fertilizers, substrates, and seawater.
                    </Paragraph>
                    <Paragraph>
                        Indoor plants are not just decoration, but also a source of life and energy for our home.
                        To keep our plants healthy and beautiful, we need proper care and support, which we can provide through various accessories.
                        In this article, we will discuss several essential accessories for our indoor plants.
                    </Paragraph>
                    <Paragraph>
                        In conclusion, proper care and support are essential for our indoor plants to thrive.
                        By using the right accessories, we can ensure that our plants receive the right amount of water, light, and nutrients,
                        and stay healthy and beautiful for years to come.
                    </Paragraph>
                </ContentWrapper>
                {plantAccessories.map((item) => {
                    return (
                        <Wrapper accessories key={item.id}>
                            <Image src={item.img} alt={item.title} />
                            <div>
                                <Header small>{item.title}</Header>
                                <Paragraph>{item.description}</Paragraph>
                                <Button to="/accessories">accesories</Button>
                            </div>
                        </Wrapper>
                    )
                })}


            </Article>
        </Section>
    )
}

export default Offer;