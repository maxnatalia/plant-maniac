import styled, { css } from "styled-components";

export const Section = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70vh;
    position: relative;
    
`;

export const LoginWrapper = styled.div`
    padding: 20px;
    height: 70%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const Input = styled.input`
    width: 100%;
    padding: 10px;
`;

export const PopUpWrapper = styled.div`
   display: none;

    ${({ activePop }) => activePop && css`
        display: flex;
        position: absolute;
        top: 0;
        left: 0;
    `}
`;

export const ErrorWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.colors.light};
    background-color: ${({ theme }) => theme.colors.dark};
    width: 90%;
    height: 70%;
`;