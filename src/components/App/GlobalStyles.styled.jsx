import { css } from '@emotion/react';

const GlobalStyles = css`
  body {
    margin: 0;
    margin-left: auto;
    margin-right: auto;
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: black;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  h1 {
    font-weight: 900;
    margin-top: 0px;
    text-transform: uppercase;
    margin-top: 0px;
    margin-bottom: 0px;
    text-align: center;
  }

  h2,
  h3,
  h4,
  h5,
  p {
    margin-top: 0px;
    margin-bottom: 0px;
  }
  ul,
  ol {
    list-style: none;
    margin-top: 0px;
    margin-bottom: 0px;
    padding-left: 0px;
  }
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
  a {
    text-decoration: none;
  }
`;

export { GlobalStyles };
