import { Button } from "../../common/styles/Button"
import { Header } from "../../common/styles/Header";
import { Paragraph } from "../../common/styles/Paragraph";
import { Section } from "../../common/styles/Section";

const ErrorPage = () => {
    return (
        <Section>
            <Header>error</Header>
            <Paragraph>Sorry, the page you tried cannot be found</Paragraph>
            <Button to="/">back home</Button>
        </Section>
    )
}

export default ErrorPage;