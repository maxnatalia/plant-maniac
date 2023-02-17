import { useState, useEffect } from "react";
import { Header } from "../styles/Header";
import { Paragraph } from "../styles/Paragraph";
import { Section } from "../styles/Section";
import leaves from "./leaves.mp4";
import { Form, Input, SubmitButton, Container, VideoContainer, Wrapper, MsgSuscribe } from "./styled";

const Newsletter = () => {
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState(false);
    const [error, setError] = useState(false);

    const onFormSubmit = (e) => {
        e.preventDefault();

        if (email) {
            setMsg(`Thank you ---${email}--- for subscribing to our newsletter`);
            setEmail("");
            setError(false);
        }

        if (!email) {
            setError(true);
            setMsg(`Please provide your e-mail`);
        }
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            setMsg(false);
        }, 3000);
        return () => clearTimeout(timeout);
    }, [email, msg]);

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
                    <Form onSubmit={onFormSubmit}>
                        <Input error={error} type="email" placeholder="Enter your e-mail..." value={email} onChange={(e) => setEmail(e.target.value)} />
                        <SubmitButton type="submit">suscribe</SubmitButton>
                    </Form>
                </Container>
            </Wrapper>
            {error && msg &&
                <MsgSuscribe>
                    <Paragraph>{msg}</Paragraph>
                </MsgSuscribe>
            }
            {msg &&
                <MsgSuscribe>
                    <Paragraph> {msg}</Paragraph>
                </MsgSuscribe>
            }
        </Section>
    )
}

export default Newsletter;