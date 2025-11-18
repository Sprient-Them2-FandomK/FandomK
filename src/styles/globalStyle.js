import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    /* Background */
    --color-bg-dark: #02000E;
    --color-bg-base: #181D26;
    
    /* Gray Scale */
    --color-gray-600: #67666E;
    --color-gray-500: #828282;
    --color-gray-400: #8C92AB;
    --color-gray-300: #A3A5A8;
    
    /* Brand */
    --color-primary: #F96D69;
    --color-secondary: #FE5493;
    --color-accent: #DEC030;
    
    /* Neutral */
    --color-white-100: #FFF;  /* 가장 밝은 텍스트 */
    --color-white-90: #F7F7F8;   /* 약간 약한 텍스트 */
  }


  @font-face {
    font-family: Pretendard;

    font-weight: 900;
    font-display: swap;
    src: local("Pretendard Black"),
      url("/fonts/pretendard/Pretendard-Black.woff2") format("woff2"),
      url("/fonts/pretendard/Pretendard-Black.woff") format("woff");
  }

  @font-face {
    font-family: Pretendard;

    font-weight: 800;
    font-display: swap;
    src: local("Pretendard ExtraBold"),
      url("/fonts/pretendard/Pretendard-ExtraBold.woff2") format("woff2"),
      url("/fonts/pretendard/Pretendard-ExtraBold.woff") format("woff");
  }

  @font-face {
    font-family: Pretendard;

    font-weight: 700;
    font-display: swap;
    src: local("Pretendard Bold"),
      url("/fonts/pretendard/Pretendard-Bold.woff2") format("woff2"),
      url("/fonts/pretendard/Pretendard-Bold.woff") format("woff");
  }

  @font-face {
    font-family: Pretendard;

    font-weight: 600;
    font-display: swap;
    src: local("Pretendard SemiBold"),
      url("/fonts/pretendard/Pretendard-SemiBold.woff2") format("woff2"),
      url("/fonts/pretendard/Pretendard-SemiBold.woff") format("woff");
  }

  @font-face {
    font-family: Pretendard;

    font-weight: 500;
    font-display: swap;
    src: local("Pretendard Medium"),
      url("/fonts/pretendard/Pretendard-Medium.woff2") format("woff2"),
      url("/fonts/pretendard/Pretendard-Medium.woff") format("woff");
  }

  @font-face {
    font-family: Pretendard;

    font-weight: 400;
    font-display: swap;
    src: local("Pretendard Regular"),
      url("/fonts/pretendard/Pretendard-Regular.woff2") format("woff2"),
      url("/fonts/pretendard/Pretendard-Regular.woff") format("woff");
  }

  @font-face {
    font-family: Pretendard;

    font-weight: 300;
    font-display: swap;
    src: local("Pretendard Light"),
      url("/fonts/pretendard/Pretendard-Light.woff2") format("woff2"),
      url("/fonts/pretendard/Pretendard-Light.woff") format("woff");
  }

  @font-face {
    font-family: Pretendard;

    font-weight: 200;
    font-display: swap;
    src: local("Pretendard ExtraLight"),
      url("/fonts/pretendard/Pretendard-ExtraLight.woff2") format("woff2"),
      url("/fonts/pretendard/Pretendard-ExtraLight.woff") format("woff");
  }

  @font-face {
    font-family: Pretendard;

    font-weight: 100;
    font-display: swap;
    src: local("Pretendard Thin"),
      url("/fonts/pretendard/Pretendard-Thin.woff2") format("woff2"),
      url("/fonts/pretendard/Pretendard-Thin.woff") format("woff");
  }

  * {
    margin: 0;
    font-family: Pretendard, sans-serif !important;
    box-sizing: border-box;
  }

  html {
    background: var(--color-bg-dark);

    color: var(--color-white-90);
    font-size: 10px;
  }

  body {
    font-size: 1.6rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;

    line-height: 2.6rem;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul,
  ol {
    list-style: none;
  }

  img,
  svg {
    display: block;
    max-width: 100%;
  }

  button,
  input,
  select,
  textarea {
    border: none;

    color: var(--color-white-90);
    font-family: inherit;
    background: none;
    outline: none;
  }
`;
