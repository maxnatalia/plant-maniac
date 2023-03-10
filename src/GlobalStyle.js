import { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
    ${normalize}

    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        font-family: 'Merienda', cursive;
        letter-spacing: 1.5px;
        background-color: ${({ theme }) => theme.colors.light};
        color: ${({ theme }) => theme.colors.dark};
        position: relative;
    }

`;