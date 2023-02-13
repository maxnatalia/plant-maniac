import styled, { css } from "styled-components";

export const Header = styled.h2`
    text-transform: capitalize;
    font-size: 50px;
    margin: 0;
    padding: 0 10px;
    text-align: center;

    @media (max-width: 767px) {
        font-size: 26px;
    }
    
    ${({ small }) => small && css`
        font-size: 26px;

        @media (max-width: 767px) {
            font-size: 14px;
        }
    `}

   
`;