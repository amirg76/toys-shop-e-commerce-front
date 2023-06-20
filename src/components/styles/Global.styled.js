import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing:border-box;
  
    
}
html{
  scroll-behavior: smooth;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  
}

body {
  font-family: 'Urbanist', sans-serif;
  width: 100%;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  
}
`;

export default GlobalStyles;
