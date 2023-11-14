import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #__next{
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    justify-content: space-between;
    background: #E5E5E5;
  }

  .flex {
    display: flex;
    justify-self: center;
    align-self: center;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 938px;
    gap: 22.4px;
    margin: 12.5rem 0;
  }
`;
