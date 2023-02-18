import { features } from "./data";
import { Section } from "../../../common/styles/Section";
import { Header } from "../../../common/styles/Header";
import { Paragraph } from "../../../common/styles/Paragraph";
import { Icon, Container, ItemContainer } from "./styled";

const Features = () => {
    return (
        <section>
            <Header>Why it's worth choosing Plant Maniac?</Header>
            <Container>
                {features.map((item) => {
                    return <ItemContainer key={item.id}>
                        <Icon />
                        <Header smallest>{item.title}</Header>
                        <Paragraph>{item.description}</Paragraph>
                    </ItemContainer>
                })}
            </Container>
        </section>
    )
}

export default Features;