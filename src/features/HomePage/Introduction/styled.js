import styled, { css } from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Container = styled.div`
    padding: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    height: 70vh;
`;

export const ImageWrapper = styled.div`
    position: relative;
`;

export const Image = styled.img`
    width: 40%;
    height: 90%;
    object-fit: cover;
    box-shadow: 0px 19px 38px rgba(0, 0, 0, 0.3);
    border-radius: 2px;
    position: absolute;
    z-index: 10;
    transition: all .2s;
    outline-offset: 10px;

    ${({ photoOne }) => photoOne && css`
        left: 0;
        top: -5px;
    `}

    ${({ photoTwo }) => photoTwo && css`
        right: 10px;
        top: 30px;
    `}

    ${({ photoThree }) => photoThree && css`
        left: 30%;
        top: 100px;
    `}
`;