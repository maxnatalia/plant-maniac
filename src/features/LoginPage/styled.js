import styled from "styled-components";
import background from "./background-msg.jpg";

export const Section = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;  
`;

export const LoginWrapper = styled.div`
    padding: 20px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    padding: 60px 0;
`;

export const Input = styled.input`
    padding: 10px;
`;

export const ErrorWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: flex-start;
    color: ${({ theme }) => theme.colors.dark};
    border: 1px solid ${({ theme }) => theme.colors.dark};
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
    border-radius: 5px;
    background-blend-mode: screen;
    background-image: linear-gradient(to right bottom, ${({ theme }) => theme.colors.light}, ${({ theme }) => theme.colors.primary}), url("${background}");
    background-repeat: no-repeat;
    height: 70%;
`;

export const ErrorMsg = styled.h4`
    padding: 20px;
    line-height: 2;
`;