import styled, { css } from "styled-components";

export const Button = styled.button`
    padding: 10px 15px;
    font-weight: 900;
    color: ${({ theme }) => theme.colors.dark};
    border: 2px solid ${({ theme }) => theme.colors.dark};
    background-color: transparent;
    cursor: pointer;
    transition: all .7s ease-in-out;

    ${({ absolute }) => absolute && css`
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 2;
        color: ${({ theme }) => theme.colors.white};
        border: 2px solid ${({ theme }) => theme.colors.white};
        background-color: ${({ theme }) => theme.colors.dark};
    `}

    &:hover {
        color: ${({ theme }) => theme.colors.white};
        border: 2px solid ${({ theme }) => theme.colors.white};
        background-color: ${({ theme }) => theme.colors.dark};
    } 
`