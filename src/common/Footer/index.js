import { StyledFooter, Wrapper, Container, Icon, Item } from "./styled";
import { Paragraph } from "../../common/styles/Paragraph";
import Logo from "../Logo";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { links } from "../utils/linksData";

const Footer = () => {
    return (
        <StyledFooter>
            <Wrapper>
                <Container items>
                    {links.map(({ id, path, text }) => {
                        return <Item key={id} to={path}>
                            {text}
                        </Item>
                    })}
                </Container>
                <Container>
                    <Logo />
                    <Icon><BsFacebook /></Icon>
                    <Icon><BsInstagram /></Icon>
                    <Icon><FiMail /></Icon>
                </Container>
            </Wrapper>
            <Paragraph>Plant Maniac &copy; {new Date().getFullYear()} All Rights Reserved</Paragraph>
        </StyledFooter>
    )
}

export default Footer;