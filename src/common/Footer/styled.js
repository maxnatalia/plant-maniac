import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FiMail } from "react-icons/fi";

export const StyledFooter = styled.footer`
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    border-top: 2px solid ${({ theme }) => theme.colors.dark};
`;

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 767px) {
        flex-direction: column;
    }
`;

export const Container = styled.div`
    padding: 20px 30px;
    display: flex;
    justify-content: space-around;
    align-items: center;

    ${({ links }) => links && css`
        flex: 1;
        width: 100%;
    `}
`;

export const IconFace = styled(BsFacebook)`
    font-size: 32px;
    cursor: pointer;
`;
export const IconInsta = styled(BsInstagram)`
    font-size: 32px;
    cursor: pointer;
`;

export const IconMail = styled(FiMail)`
    font-size: 32px;
    cursor: pointer;
`;

export const Item = styled(Link)`
    text-decoration: unset;
    text-transform: capitalize;
    letter-spacing: 2px;
    font-size: 20px;
    cursor: pointer;
`;