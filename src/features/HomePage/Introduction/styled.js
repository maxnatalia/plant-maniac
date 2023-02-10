import styled, { css } from "styled-components";
import background from "./background.jpg";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    height: 100vh;
    width: 100%;
    padding: 20px;
 
    @media (max-width: 1200px) {
        flex-direction: column-reverse;
        height: auto;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 70%;
    
    @media (max-width: 1200px) {
        width: 100%;
        justify-content: flex-start;
    }
`;

export const ImageWrapper = styled.div`
    position: relative;
    width: 50vw;
    height: 36vh;
    margin: 0 auto;

    @media (max-width: 1200px) {
       height: 50vh;
    }
`;

export const Image = styled.img`
    object-fit: cover;
    box-shadow: 0px 19px 38px rgba(0, 0, 0, 0.3);
    border-radius: 2px;
    position: absolute;
    z-index: 10;
    transition: all .2s;
    outline-offset: 10px;
    width: 20vw;

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

export const ArticleWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
    padding: 20px;
    margin: 40px auto;
    text-align: center;
    gap: 20px;
`;

export const Article = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 20px;
    width: 300px;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
    background-blend-mode: screen;
    background-image: linear-gradient(to right bottom, ${({ theme }) => theme.colors.light}, ${({ theme }) => theme.colors.primary}), url("${background}");
    background-size: cover;
    filter: contrast(95%);
`;

export const IconSpan = styled.div`
    font-size: 60px;;
`;