import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
 :root {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;

  background-color: #fff;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}




  body {
  font-family: 'Space Mono', monospace;
    background:#ffffff;
    a{
      color:#000000;
      text-decoration:none;
      &:hover{
      }
    }
  }
  h1,h2,h3,h4,h5,h6{
  font-family: 'Space Grotesk', sans-serif;

  }

  *{
    margin:0px;
    padding:0px;
    box-sizing:border-box
  }


`;
