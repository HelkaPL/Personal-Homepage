import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
    box-sizing: border-box;
    }
    *, ::after, ::before {
    box-sizing: inherit;
    }
    body {
    background: ${({ theme }) => theme.colors.background.site};
    font-family: 'Inter', sans-serif;
    word-break: break-word;
    transition: background .3s;
    }
`;