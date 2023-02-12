import { StyledFooter, Wrapper, Container, IconFace, IconInsta, IconMail, Item } from "./styled";
import { ButtonLink } from "../../common/styles/ButtonLink"
import { Header } from "../../common/styles/Header";
import Logo from "../Logo";


const Footer = () => {
    return (
        <StyledFooter>
            <Wrapper>
                <div>
                    <Logo />
                    <Container>
                        <IconFace />
                        <IconInsta />
                        <IconMail />
                    </Container>
                </div>
                <Container links>
                    <Item>contact</Item>
                    <Item>about</Item>
                    <Item>blog & tips</Item>
                </Container>
            </Wrapper>
            <Header small>plant maniac &copy; {new Date().getFullYear()} all rights reserved</Header>


            {/* <ButtonLink to="/about">suscribe</ButtonLink> */}

        </StyledFooter>
    )
}

export default Footer;