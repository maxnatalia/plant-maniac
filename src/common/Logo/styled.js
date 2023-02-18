import { Link } from "react-router-dom";
import styled from "styled-components";

export const LogoWrapper = styled(Link)`
    display: flex;
    align-items: center;
    gap: 5px;
    margin: 10px;
    text-decoration: none;
    color: inherit;
    transition: all .3s ease-in-out;
    cursor: pointer;
    z-index: 9;

    &:hover {
        filter: brightness(180%);
    }
`;

export const StyledLogo = styled.img`
    width: 70px;
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;

    @media (max-width: 767px) {
        width: 30px;
    }
`;