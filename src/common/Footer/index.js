import { StyledFooter } from "./styled";
import { Button } from "../../common/styles/Button"
import { Header } from "../../common/styles/Header";

const Footer = () => {
    return (
        <StyledFooter>
            <Header small>plant maniac &copy; {new Date().getFullYear()} </Header>
            <Header small>all rights reserved</Header>
            <Button to="/about">suscribe</Button>
        </StyledFooter>
    )
}

export default Footer;