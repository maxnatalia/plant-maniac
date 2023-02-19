import styled, { css } from "styled-components";
import housePlant from "./house-plant.jpg";
import officePlant from "./office-plant.jpg";

export const Article = styled.article`
    height: 100%;
    width: 100%;
`;

export const SpaceContainer = styled.div`
    padding: 40px 0;
    display: flex;
    justify-content: center;
    opacity: ${({ show }) => show ? 1 : 0};
    animation: ${({ show }) => show ? "fadeIn 3s ease-in-out" : "fadeOut 3s ease-in-out"};

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

    @media (max-width: 767px) {
        flex-direction: column;
        align-items: center;
        padding: 20px 0;
    }
`;

export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    background-blend-mode: screen;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    @media (max-width: 767px) {
        flex-direction: column;
    }

    ${({ home }) => home && css`
        background-image: linear-gradient(to right bottom, ${({ theme }) => theme.colors.white}, ${({ theme }) => theme.colors.primary}), url("${housePlant}");
    `}

    ${({ office }) => office && css`
        background-image: linear-gradient(to right bottom, ${({ theme }) => theme.colors.white}, ${({ theme }) => theme.colors.primary}), url("${officePlant}");
    `}

    ${({ accessories }) => accessories && css`
      height: 50%;
      width: 75%;
      margin: 0 auto;
      align-items: center;
      padding: 20px;

      &:nth-child(odd) {
        flex-direction: row-reverse;
        
        @media (max-width: 767px) {
            flex-direction: column;
        }
      }
    `}
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px 5px;

    ${({ accessories }) => accessories && css`
      max-width: 900px;
      margin: 0 auto;
    `}
`;

