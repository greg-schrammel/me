import css from "styled-jsx/css";
import theme from "./theme";

export default css.global`
  * {
    -webkit-user-drag: none;
    -webkit-app-region: no-drag;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    background-color: #000;
    font-family: "Inter", sans-serif;
    color: ${theme.colors.foreground};
  }
  body {
    margin: 0;
    background-color: ${theme.colors.background};
  }
  ::selection {
    background: ${theme.colors.selection};
    color: ${theme.colors.foreground};
  }

  a {
    text-decoration: none;
    font-weight: normal;
    cursor: pointer;
    color: ${theme.colors.accents_5};
  }
  a:visited {
    color: unset;
  }
  a:hover {
    opacity: 0.6;
  }

  h1,
  h2,
  h3,
  p,
  small {
    margin: 0;
  }
  h1 {
    font-size: 3.25rem;
    line-height: 1.1;
    margin-bottom: ${theme.space.x4};
    font-weight: 900;
  }
  h2 {
    font-size: 2rem;
    margin-bottom: ${theme.space.x4};
    font-weight: 700;
  }
  h3 {
    font-size: 1.5rem;
    margin-bottom: ${theme.space.x8};
    font-weight: 700;
  }
  p {
    font-size: 1.25rem;
    line-height: 1.6;
    font-weight: 300;
    margin-bottom: ${theme.space.x16};
    font-weight: 300;
  }
  small {
    font-size: 1rem;
    line-height: 1.5;
    font-weight: 500;
    color: ${theme.colors.accents_5};
    font-weight: 500;
  }

  section {
    padding-top: ${theme.space.large};
    padding-bottom: ${theme.space.large};
  }

  /* utils */
  .wrapper {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: ${theme.space.page};
    padding-right: ${theme.space.page};
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .flex {
    display: flex;
  }
  .flex-column {
    flex-direction: column;
  }
  .space-between {
    justify-content: space-between;
  }
  .justify-center {
    justify-content: center;
  }
  .align-center {
    align-items: center;
  }
  .text-center {
    text-align: center;
  }
  .wrap {
    flex-wrap: wrap;
  }
  .relative {
    position: relative;
  }
`;
