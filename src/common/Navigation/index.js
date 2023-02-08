import { useState } from "react";
import { useUserContext } from "../../context/loginContext";
import { links } from "./data";
import { StyledNavigation, NavLinksWrapper, StyledLink, BasketWrapper, BasketIcon, TotalBasket, LinkWrapper, LoginIcon, LoginText, MobileOpen, MobileClose } from "./styled";
import Logo from "../Logo";

const Navigation = () => {
    const mainData = useUserContext();
    const [openNav, setOpenNav] = useState(false);

    return (
        <StyledNavigation>
            <Logo />
            <NavLinksWrapper openNav={openNav}>
                {links.map(({ id, text, path }) => {
                    return <li key={id} >
                        <StyledLink
                            to={path}
                            onClick={() => setOpenNav(false)}
                        >
                            {text}
                        </StyledLink>
                    </li>
                })}
            </NavLinksWrapper>
            <BasketWrapper>
                <BasketIcon />
                <TotalBasket>12</TotalBasket>
            </BasketWrapper>
            {mainData.message === `Aktualnie nie jesteś zalogowany` ?
                <LinkWrapper to="/login">
                    <LoginIcon />
                    <LoginText>Log In</LoginText>
                </LinkWrapper>
                :
                <LinkWrapper to="/login">
                    <LoginIcon />
                    <LoginText>Log Out</LoginText>
                </LinkWrapper>}
            <div onClick={() => setOpenNav(!openNav)}>
                {openNav ?
                    <MobileClose /> :
                    <MobileOpen />
                }
            </div>
        </StyledNavigation>
    )
}

export default Navigation;