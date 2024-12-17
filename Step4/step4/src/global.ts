import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
:root {
    box-sizing: border-box;
    font-size: 1rem;
    --main-color: white;
    --first-text:#000000de;
    --second-text: #00000099;
    --error-color: #ff4d4f;
    --main-font: "Roboto";
    --button-color: #2196f3;
    --first-shadow:#00000033;
    --second-shadow:#00000024;
    --third-shadow:#0000001f;
    --border-color:#0000003b;
    --input-color:#000;
    --error-text: #d32f2f;
  }

  *,
  ::before,
  ::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body,
  html {
    height: 100dvh;
    background-color: #f5f5f5;
    line-height: 1;
  }

  #root{
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  table{
	  border-collapse: collapse;
	  border-spacing: 0;
}
`;
