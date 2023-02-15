import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const StyledFooter = styled.footer`
    padding: 20px;
    border-top: 2px solid ${({ theme }) => theme.colors.dark};
    text-align: center;
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${({ theme }) => theme.colors.dark};

    @media (max-width: 992px) {
        flex-direction: column;
    }
`;

export const Container = styled.div`
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    ${({ items }) => items && css`
        flex: 1;
        flex-wrap: wrap;
        order: 1;
        gap: 30px;
    `}
`;

export const Icon = styled.div`
    font-size: 32px;
    padding: 5px;
    cursor: pointer;
    transition: all .7s ease-in-out;

    &:hover {
        filter: brightness(130%);
        transform: scale(1.2);
    }

    @media (max-width: 767px) {
        font-size: 20px;
    }
`;

export const Item = styled(Link)`
    text-decoration: none;
    color: inherit;
    text-transform: capitalize;
    letter-spacing: 2px;
    font-size: 20px;
    font-weight: 600;
    padding: 10px 20px;
    background-color: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
    transition: all .3s ease; 

    &:hover,
    &:active {
        filter: brightness(110%);
        box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
        transform: rotate(5deg) scale(1.3);
    }
`;