import { ButtonLink } from "../../common/styles/ButtonLink"
import { Header } from "../../common/styles/Header";
import { Paragraph } from "../../common/styles/Paragraph";
import { Section } from "../../common/styles/Section";

const ErrorPage = () => {
    return (
        <Section>
            <Header>error</Header>
            <Paragraph>Sorry, the page you tried cannot be found</Paragraph>
            <ButtonLink to="/">back home</ButtonLink>
        </Section>
    )
}

export default ErrorPage;