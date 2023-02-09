import styled, { css } from "styled-components";

export const Paragraph = styled.p`
    line-height: 1.7;
    letter-spacing: 2px;
    padding: 20px;
    margin: 0;

    ${({ hiddenCard }) => hiddenCard && css`
        display: inline-block;
        width: 250px;
        height: 200px;
        overflow: hidden;
        overflow-y: visible;
        margin: 20px 0;
        cursor: pointer;
        transition: all .5s ease-in-out;

        &:hover {
            scale: 1.1;
        }
        
    `}
`;