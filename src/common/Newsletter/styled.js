import styled, { css } from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 300px;
`;

export const VideoContainer = styled.video`
    width: 100%;
    height: 100%;
    z-index: -9;
    object-fit: cover;
    opacity: 0.5;
`;

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    z-index: 8;
    padding: 20px;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media (max-width: 767px) {
        flex-direction: column;
    }
`;

export const Form = styled.form`
   display: flex;

   @media (max-width: 767px) {
        flex-direction: column;
    }
`;

export const Input = styled.input`
    padding: 20px;
    border: 1px solid ${({ theme }) => theme.colors.dark};
    box-shadow:  0px 19px 38px rgba(0, 0, 0, 0.3);
    background-color: transparent;

    ${({ error }) => error && css`
        border: 2px solid crimson;
    `}
`;

export const SubmitButton = styled.button`
    padding: 20px 25px;
    font-size: 20px;
    font-weight: 600;
    text-transform: capitalize;
    background-color: ${({ theme }) => theme.colors.primary};
    transition: all .7s ease-out;
    box-shadow:  0px 19px 38px rgba(0, 0, 0, 0.3);
    border: none;
    cursor: pointer;

    &:hover {
        transform: scale(1.1);
        filter: brightness(110%);
        box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
    }

    @media (max-width: 767px) {
        width: 100%;
    }
`;

export const MsgSuscribe = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.dark};
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
    border-radius: 5px;
    background-image: linear-gradient(to right bottom, ${({ theme }) => theme.colors.light}, ${({ theme }) => theme.colors.primary});
    height: 70%;
    z-index: 10;
`;