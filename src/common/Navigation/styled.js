import { NavLink, Link } from "react-router-dom";
import { AiOutlineBars } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";
import { BsFillPersonFill } from "react-icons/bs";
import styled from "styled-components";

export const StyledNavigation = styled.nav`
    height: 90px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    position: relative;
`;

export const NavLinksWrapper = styled.ul`
    flex: 1;
    height: 100%;
    list-style: none;
    padding-left: 0;
    margin: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media (max-width: 992px) {
        opacity: ${({ openNav }) => openNav ? "1" : "0"};      
        visibility: ${({ openNav }) => openNav ? "visible" : "hidden"};
        position: fixed;
        flex-direction: column;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        z-index: 10;
        height: 100vh;
        width: 100%;
        background-color: red;
    }   
`;

export const NavLinkItem = styled.li`
    cursor: pointer;
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        background-color: ${({ theme }) => theme.colors.primary};
        width: 4px;
        height: 100%;
        transform: scaleY(0);
        transition: transform .2s,
                    width .4s cubic-bezier(1,0,0,1) .2s,
                    background-color .1s;
    }

    &:hover::before {
        transform: scaleY(1);
        border-left: 4px solid ${({ theme }) => theme.colors.dark};
        width: 100%;
    }
`;

export const StyledLink = styled(NavLink)`
    color: inherit;
    text-decoration: none;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    position: relative;
    z-index: 10;

    &.active {
        font-weight: 900;
    }
`;

export const BasketWrapper = styled.div`
    position: relative;
    margin-right: 14px;
`;

export const BasketIcon = styled(SlBasket)`
    width: 30px;
    height: 30px;
`;

export const TotalBasket = styled.span`
    background-color: ${({ theme }) => theme.colors.dark};
    color: ${({ theme }) => theme.colors.white};
    font-weight: 100;
    border-radius: 50%;
    position: absolute;
    top: -12px;
    right: -12px;
    font-size: 14px;
    padding: 5px;
    display: flex;
    letter-spacing: 0;
    justify-content: center;
    align-items: center;
`;

export const LoginWrapper = styled(Link)`
    padding: 10px;
    height: 100%;
    display: flex;
    align-items: center;
    color: inherit;
    text-decoration: none;
    text-transform: capitalize;
    border-bottom: 4px solid transparent;
    cursor: pointer;
    transition: all .8s ease-in-out;

    &:hover {
        border-bottom: 4px solid ${({ theme }) => theme.colors.dark};
        background-color: ${({ theme }) => theme.colors.primary};
    }
`;

export const LoginIcon = styled(BsFillPersonFill)`
    width: 30px;
    height: 30px;
    fill: currentColor;
`;

export const LoginText = styled.p`
    margin:0;
    width: 80px;
`;

export const MobileClose = styled(AiOutlineClose)`
    display: none;

    @media (max-width: 992px) {
        display: flex;
        margin-right: 10px;
        width: 40px;
        height: 40px;
        fill: currentColor;
        cursor: pointer;
        transition: all .5s ease-in-out;
        position: relative;
        z-index: 10;

        &:hover {
            transform: rotate(180deg) scale(1.3);
        }
    }
`;

export const MobileOpen = styled(AiOutlineBars)`
    display: none;

    @media (max-width: 992px) {
        display: flex;
        margin-right: 10px;
        width: 40px;
        height: 40px;
        fill: currentColor;
        cursor: pointer;
        transition: all .5s ease-in-out;

        &:hover {
            transform: rotate(90deg) scale(1.3);
        }
    }
`;