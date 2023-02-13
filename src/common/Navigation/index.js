import { useState } from "react";
import { useUserContext } from "../../context/loginContext";
import { links } from "./data";
import { StyledNavigation, NavLinksWrapper, StyledLink, NavLinkItem, BasketWrapper, BasketIcon, TotalBasket, LoginWrapper, LoginIcon, LoginText, MobileOpen, MobileClose } from "./styled";
import Logo from "../Logo";

const Navigation = () => {
    const mainData = useUserContext();
    const [openNav, setOpenNav] = useState(false);

    return (
        <StyledNavigation>
            <Logo />
            <NavLinksWrapper openNav={openNav}>
                {links.map(({ id, text, path }) => {
                    return <NavLinkItem key={id} >
                        <StyledLink
                            to={path}
                            onClick={() => setOpenNav(false)}
                        >
                            {text}
                        </StyledLink>
                    </NavLinkItem>
                })}
            </NavLinksWrapper>
            <BasketWrapper>
                <BasketIcon />
                <TotalBasket>12</TotalBasket>
            </BasketWrapper>
            {mainData.message === `Aktualnie nie jesteś zalogowany` ?
                <LoginWrapper to="/login">
                    <LoginIcon />
                    <LoginText>Log In</LoginText>
                </LoginWrapper>
                :
                <LoginWrapper to="/login">
                    <LoginIcon />
                    <LoginText>Log Out</LoginText>
                </LoginWrapper>}
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