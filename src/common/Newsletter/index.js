import { Header } from "../styles/Header";
import { Paragraph } from "../styles/Paragraph";
import { Section } from "../styles/Section";
import leaves from "./leaves.mp4";
import { Form, Input, SubmitButton, Container, VideoContainer, Wrapper } from "./styled";

const Newsletter = () => {
    return (
        <Section>
            <Wrapper>
                <VideoContainer autoPlay muted loop>
                    <source src={leaves} type="video/mp4" />
                </VideoContainer>
                <Container>
                    <div>
                        <Header>newsletter</Header>
                        <Paragraph>Join our newsletter and get 20% off</Paragraph>
                    </div>
                    <Form>
                        <Input type="email" placeholder="Enter your e-mail..." />
                        <SubmitButton type="submit">suscribe</SubmitButton>
                    </Form>
                </Container>
            </Wrapper>
        </Section>
    )
}

export default Newsletter;