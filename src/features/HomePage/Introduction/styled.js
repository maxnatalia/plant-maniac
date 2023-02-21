import styled, { css } from "styled-components";

export const SectionIntro = styled.section`
    max-width: 1400px;
    height: 70%;
    margin: 15px auto;
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    height: 100%;
    width: 100%;
 
    @media (max-width: 1200px) {
        flex-direction: column-reverse;
        gap: 0;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    
    @media (max-width: 1200px) {
        width: 100%;
        justify-content: flex-start;
    }
`;

export const ImageWrapper = styled.div`
    width: 50%;
    padding: 40px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-gap: 20px;
    align-content: center;
    justify-content: center;

    @media (max-width: 1200px) {
       width: 100%;
    }
`;

export const Image = styled.img`
    object-fit: cover;
    width: 100%;
    z-index: 8;
    outline-offset: 10px;
    box-shadow: 0px 19px 38px rgba(0, 0, 0, 0.3);
    border-radius: 2px;
    transition: all .2s;
    cursor: pointer;

    ${({ photoOne }) => photoOne && css`
       grid-column: 1 / span 2;
       grid-row: 1 / span 3;
    `}

    ${({ photoTwo }) => photoTwo && css`
        grid-column: 2 / span 2;
        grid-row:  3 / span 3;
    `}

    ${({ photoThree }) => photoThree && css`
        grid-column: 3 / span 2;
        grid-row:  2 / span 3;
    `}

    &:hover {
        outline: 10px solid ${({ theme }) => theme.colors.primary};
        transform: scale(1.05) translateY(-5px);
        box-shadow: 0px 19px 38px rgba(0, 0, 0, 0.5);
        z-index: 9;
    }

    &:not(:hover) {
        opacity: .7;
        transform: scale(.90);
    }
`;