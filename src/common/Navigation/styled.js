import { NavLink, Link } from "react-router-dom";
import { AiOutlineBars } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";
import { BsFillPersonFill } from "react-icons/bs";
import styled from "styled-components";

export const StyledNavigation = styled.nav`
    width: 100%;
    position: sticky;
    padding: 5px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
`;

export const NavLinksWrapper = styled.ul`
    flex:1;
    list-style: none;
    padding-left: 0;
    display: flex;
    justify-content: space-evenly;

    @media (max-width: 767px) {
        opacity: ${({ openNav }) => openNav ? "1" : "0"};
        visibility: ${({ openNav }) => openNav ? "visible" : "hidden"};
        flex-direction: column;
        align-items: center;
        position: absolute;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100%;
        background-color: ${({ openNav }) => openNav ? "#e8f5e9" : "transparent"};
        z-index: 2;
        overflow: hidden;
    }
`;

export const StyledLink = styled(NavLink)`
        color: ${({ theme }) => theme.colors.dark};
        background-color: transparent;
        text-decoration: none;
        text-transform: uppercase;
        padding: 10px 15px;
        transition: all .2s;
        cursor: pointer;
        z-index: 2;
    
        &:hover {
            box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
        }

        &.active {
            box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
        }
`;
export const BasketWrapper = styled.div`
    display: flex;
    flex-direction: column-reverse;
    padding: 10px;
    transition: 1s ease-in-out;
    cursor: pointer;

    &:hover {
        box-shadow: 1px 2px 10px ${({ theme }) => theme.colors.dark};
    }
`;

export const BasketIcon = styled(SlBasket)`
    font-size: 20px;
`;

export const TotalBasket = styled.span`
    border-radius: 50%;
    padding: 5px;
    background-color: rgb(27, 94, 32, 0.5);
    font-size: 12px;
    font-weight: 600;
`;

export const LinkWrapper = styled(Link)`
    display: flex;
    align-items:center;
    transition: 1s ease-in-out;
    cursor:pointer;

    &:hover {
        box-shadow: 1px 2px 10px ${({ theme }) => theme.colors.dark};
    }
`;

export const LoginIcon = styled(BsFillPersonFill)`
    font-size: 30px;
    color: ${({ theme }) => theme.colors.dark};
`;

export const LoginText = styled.p`
    font-size: 14px;

    @media (max-width: 767px) {
        display: none;
    }
`;

export const MobileOpen = styled(AiOutlineBars)`
    display: none;

    @media (max-width: 767px) {
        display: flex;
        cursor: pointer;
        font-size: 30px;
        transition: 1s ease-in-out;
        position: sticky;
        z-index: 2;

        &:hover {
            transform: scale(1.2);
        }
    }
`;

export const MobileClose = styled(AiOutlineClose)`
    display: none;

    @media (max-width: 767px) {
        display: flex;
        cursor: pointer;
        font-size: 30px;
        transition: 1s ease-in-out;
        position: sticky;
        z-index: 2;

        &:hover {
            transform: scale(1.2);
        }
    }
`;