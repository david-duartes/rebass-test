import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
 body {
    background-color: ${(props) => props.theme.backgroundColor};
    color:${(props) => props.theme.colors.primary};
    font-family: Roboto Slab, sans-serif;
    font-size:0.8rem;
    margin:0;
  }
`;

export default GlobalStyles;
