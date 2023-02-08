import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
    margin: 0 auto;
    display: flex;
    width: 100%;
    height: 30vh;
    position: relative;

    @media (max-width: 767px) {
        display: none;
    }
`;

export const Video = styled.video`
    object-fit: cover;
    width: 100%;
    opacity: 0.3;
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    text-align: center;
    padding: 10px;
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const Span = styled.span`
    font-size: 50px;
    font-weight: 900;
    padding-right: 15px;
    padding-bottom: 15px;

    @media (max-width: 767px) {
        font-size: 26px;
    }
`;

export const HomeLink = styled(Link)`
    text-decoration: none;
    text-transform: capitalize;
    font-size: 50px;
    padding: 10px 15px;
    color: inherit;
    font-weight: 900;
    transition: all .5s ease-in-out;

    @media (max-width: 767px) {
        font-size: 26px;
    }

    &:hover {
        box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
    }

`;