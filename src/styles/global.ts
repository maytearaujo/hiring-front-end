import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-family: "Poppins", sans-serif;
        font-weight: 400;
        font-style: normal
    }
`;

export default GlobalStyles;
