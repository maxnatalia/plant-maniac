import { StyledLogo, LogoWrapper } from "./styled.js";
import { Header } from "../styles/Header";
import logo from "./logo.png";

const Logo = () => {
    return (
        <LogoWrapper to="/">
            <StyledLogo src={logo} alt="logo" />
            <Header small>Plant Maniac</Header>
        </LogoWrapper>
    )
}

export default Logo;