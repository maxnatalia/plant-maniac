import { Link } from "react-router-dom";
import styled from "styled-components";

export const Button = styled(Link)`
    font-size: 16px;
    font-weight: 200;
    text-transform: uppercase;
    letter-spacing: 1px;
    text-decoration: none;
    padding: 13px 20px 13px;
    border: 1px solid ${({ theme }) => theme.colors.dark};
    color: white;
    cursor: pointer;
    position: relative;
    background-color: rgba(0, 0, 0, 0);

    &:after {
        content: "";
        background-color: ${({ theme }) => theme.colors.dark};
        width: 100%;
        z-index: -1;
        position: absolute;
        height: 100%;
        top: 7px;
        left: 7px;
        transition: 0.3s;
    } 
    
    &:hover:after {
        z-index: -1;
        top: 0px;
        left: 0px;
        box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
    }

    @media (max-width: 768px) {
        padding: 13px 50px 13px;
    }
`;

