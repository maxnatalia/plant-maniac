import { useEffect, useState } from "react";
import { useUserContext } from "../../context/loginContext.js";
import { Button } from "../../common/styles/Button";
import { Section } from "../../common/styles/Section";
import { LoginWrapper, Form, Input, PopUpWrapper, ErrorWrapper } from "./styled.js";
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
            mainData.setMessage(`Jesteś zalogowany jako - Guest`);
        }
        if (name) {
            mainData.setMessage(`Jesteś zalogowany jako - ${name}`);
            setName('');
        }
    }

    return (
        <>
            <HeroWrapper title={mainData.message} />
            <Section>
                <LoginWrapper>
                    <p>You can log in, otherwise you will be logged in as a Guest</p>
                    <Form onSubmit={onFormSubmit}>
                        <Input
                            type='text'
                            placeholder="Your name..."
                            value={name}
                            onChange={(e) => setName(e.target.value)} />
                        <Button as="button" type="submit" >Add your name</Button>
                        <Button as="button" type="button" onClick={() => mainData.setMessage(`Jesteś zalogowany jako - Guest`)}>
                            Log In as a Guest
                        </Button>
                        {mainData.message !== "you're not logged in" &&
                            <Button as="button" onClick={() => mainData.setMessage("you're not logged in")}
                            >
                                Log Out
                            </Button>}
                    </Form>
                </LoginWrapper>
                {error &&
                    <ErrorWrapper>
                        <h4>You don't provide your name - you are log in as a Guest</h4>
                    </ErrorWrapper>}
                {/* <PopUpWrapper activePop={activePop}>
                    <p>Welcome {activePop}, you are logged 🌺</p>
                </PopUpWrapper> */}
            </Section>
        </>
    )
}

export default LoginPage;