import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #121214;
    --modal-background: #202024;
    
    --second-button: #29292E;


    --text-title: #E1E1E6;
    --text-body: #A8A8B3;
    --text-highlight: #FFFFFF;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
    display: flex;
    justify-content: center;
  }

  body, input, textarea, button {
    font-family: sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  .react-modal-overlay {
    background: rgba(0,0,0,0.5);

    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ReactModal__Content{
    width: 100%;
    max-width: 1024px;
    background: var(--modal-background);
    padding: 48px;
    border-radius: 5px;
  }

  .react-modal-selected-trail {
    max-width: 700px;
  }
`;
