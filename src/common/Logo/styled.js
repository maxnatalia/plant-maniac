import { Link } from "react-router-dom";
import styled from "styled-components";

export const LogoWrapper = styled(Link)`
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 5px 10px;
    text-decoration: none;
    color: inherit;
    transition: 1s ease-in-out;
    cursor: pointer;

    &:hover {
        box-shadow: 1px 2px 10px ${({ theme }) => theme.colors.dark};
    }
`;

export const StyledLogo = styled.img`
    width: 70px;
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
`;