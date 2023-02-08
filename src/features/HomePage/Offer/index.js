import { Header } from "../../../common/styles/Header";
import { Paragraph } from "../../../common/styles/Paragraph";
import { Section } from "../../../common/styles/Section";
import { Button } from "../../../common/styles/Button";

const Offer = () => {
    return (
        <Section>
            <Header>What we offer?</Header>
            <Paragraph>With us every Plant Maniac will find in our shop new plants including collector plants.</Paragraph>
            <Button to="/plants">plants</Button>
            <Paragraph>You can also offer various pots and plant care accessories, such as fertilizers, substrates, and seawater.</Paragraph>
            <Button to="/accessories">accesories</Button>
        </Section>
    )
}

export default Offer;