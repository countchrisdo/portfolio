import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    overflow-x: hidden; // Prevent horizontal scroll
    overflow-y: auto; // Prevent vertical scroll
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;

  }
  body {
    font-family: ${(props) => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${(props) => props.theme.colors.background1};
    color: ${(props) => props.theme.colors.primary1};
    cursor: default;

  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${(props) => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }

details {
  width: inherit;
  box-shadow: 3px 3px 4px black;
  border: 1px solid ${(props) => props.theme.colors.primary1};
  border-radius: 4px;
  padding: 1rem;
  margin: 1em 0;
  background: ${(props) => props.theme.colors.background1};
  color: ${(props) => props.theme.colors.primary1};
}

details > summary {
  background-color: none;
  border: none;
  cursor: pointer;
  font-weight: bold;
  text-align: left;
}

details > p {
  border-radius: 0 0 10px 10px;
  background-color: none;
  padding: 0.5rem 1rem;
  margin: 0;
}
`;

export default GlobalStyles;
