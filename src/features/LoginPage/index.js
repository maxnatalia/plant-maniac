import { useEffect, useState } from "react";
import { useUserContext } from "../../context/loginContext.js";
import { Button } from "../../common/styles/Button";
import { Section } from "../../common/styles/Section";
import { Paragraph } from "../../common/styles/Paragraph";
import { LoginWrapper, Form, Input, ErrorWrapper, ErrorMsg } from "./styled.js";
import HeroWrapper from "../../common/HeroWrapper/index.js";

const LoginPage = () => {

    const mainData = useUserContext();
    const [name, setName] = useState('');
    const [error, setError] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setError(false);
        }, 3000);
        return () => clearTimeout(timeout);
    }, [error]);

    const onFormSubmit = (e) => {
        e.preventDefault();
        if (!name) {
            setError(true);
            mainData.setMessage(`Welcome, Guest`);
        }
        if (name) {
            mainData.setMessage(`Welcome, ${name}`);
            setName('');
        }
    }

    return (
        <>
            <HeroWrapper title={mainData.message} />
            <Section>
                <LoginWrapper>
                    <Paragraph>You can log in, otherwise you will be logged in as a Guest.<br />Please provide your name.</Paragraph>
                    <Form onSubmit={onFormSubmit}>
                        <Input
                            type='text'
                            placeholder="Your name..."
                            value={name}
                            onChange={(e) => setName(e.target.value)} />
                        <Button type="submit" >Add your name</Button>
                        <Button type="button" onClick={() => mainData.setMessage(`Welcome, Guest`)}>
                            Log In as a Guest
                        </Button>
                        {mainData.message !== "LOG IN 🪴" &&
                            <Button onClick={() => mainData.setMessage("LOG IN 🪴")}
                            >
                                Log Out
                            </Button>}
                    </Form>
                </LoginWrapper>
                {error &&
                    <ErrorWrapper>
                        <ErrorMsg>You don't provide your name<br />You are log in as a Guest</ErrorMsg>
                    </ErrorWrapper>}
            </Section>
        </>
    )
}

export default LoginPage;