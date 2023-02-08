import styled from "styled-components";

export const StyledFooter = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin: 20px auto;
    padding-top: 20px;
    border-top: 2px solid ${({ theme }) => theme.colors.dark};
`;