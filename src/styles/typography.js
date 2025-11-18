import { css } from "styled-components";

export const TYPO = {
  // Large Titles
  titleXL: css`
    font-size: 3rem; /* 30px */
    font-weight: 700;
    line-height: 3.2rem;
  `,
  titleLg: css`
    font-size: 2.6rem; /* 26px */
    font-weight: 700;
    line-height: 3rem;
  `,
  titleMd: css`
    font-size: 2.4rem; /* 24px */
    font-weight: 700;
    line-height: 2.8rem;
  `,

  // Mid Titles
  title20Bold: css`
    font-size: 2rem; /* 20px */
    font-weight: 700;
  `,
  title20Regular: css`
    font-size: 2rem;
    font-weight: 400;
  `,
  title18SemiBold: css`
    font-size: 1.8rem; /* 18px */
    font-weight: 600;
  `,

  // Body Text
  body16Medium: css`
    font-size: 1.6rem; /* 16px */
    font-weight: 500;
  `,
  body16Bold: css`
    font-size: 1.6rem; /* 16px */
    font-weight: 500;
  `,
  body14Bold: css`
    font-size: 1.4rem; /* 14px */
    font-weight: 700;
  `,
  body14Medium: css`
    font-size: 1.4rem;
    font-weight: 500;
  `,

  // Captions
  caption12Regular: css`
    font-size: 1.2rem; /* 12px */
    font-weight: 400;
    line-height: 1.8rem;
  `,
  caption12SemiBold: css`
    font-size: 1.2rem;
    font-weight: 600;
  `,
  caption14Bold: css`
    font-size: 1.4rem; /* 14px → from 13px */
    font-weight: 700;
  `,
};
