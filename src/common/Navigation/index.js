import { useState } from "react";
import { useUserContext } from "../../context/loginContext";
import { links } from "./data";
import { StyledNavigation, NavLinksWrapper, StyledLink, BasketWrapper, BasketIcon, TotalBasket, LoginWrapper, LoginIcon, LoginText, Span, MobileOpen, MobileClose, PopUp } from "./styled";
import Logo from "../Logo";

const Navigation = () => {
    const mainData = useUserContext();
    const [openNav, setOpenNav] = useState(false);

    return (
        <StyledNavigation>
            <Logo setOpenNav={setOpenNav} />
            <NavLinksWrapper openNav={openNav}>
                {links.map(({ id, text, path }) => {
                    return <StyledLink
                        key={id}
                        to={path}
                        onClick={() => setOpenNav(false)}
                    >
                        <Span>{text}</Span>
                    </StyledLink>
                })}
            </NavLinksWrapper>
            <BasketWrapper>
                <BasketIcon />
                <TotalBasket>12</TotalBasket>
            </BasketWrapper>
            {mainData.message === `LOG IN 🪴` ?
                <LoginWrapper onClick={() => setOpenNav(false)} to="/login">
                    <LoginIcon />
                    <LoginText>Log In</LoginText>
                </LoginWrapper>
                :
                <LoginWrapper onClick={() => setOpenNav(false)} to="/login">
                    <LoginIcon />
                    <LoginText>Log Out</LoginText>
                </LoginWrapper>}
            <div onClick={() => setOpenNav(!openNav)}>
                {openNav ?
                    <MobileClose /> :
                    <MobileOpen />
                }
            </div>
            {mainData.message !== "LOG IN 🪴" &&
                <PopUp>
                    {mainData.message}
                </PopUp>}
        </StyledNavigation>
    )
}

export default Navigation;