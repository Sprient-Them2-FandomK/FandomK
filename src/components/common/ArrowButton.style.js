import { media } from "@/styles/media";
import { hexToRgba } from "@/utils/color";
import styled, { css } from "styled-components";

const sizes = {
  md: css`
    width: 40px;
    height: 80px;
  `,
  lg: css`
    width: 29px;
    height: 135px;
  `,
};

export const ArrowButtonWrapper = styled.button`
  display: none;
  cursor: pointer;
  border-radius: 8px;
  background-color: ${hexToRgba("#1b1b1bcc")};

  ${({ $isLeft }) =>
    $isLeft ? { left: "-80px" } : { right: "-80px", transform: "rotate(180deg)" }}

  ${({ $size }) => sizes[$size] || sizes.md}

  &:disabled {
    background: ${hexToRgba("#080611")};
  }

  @media ${media.tablet} {
    ${({ $isTablet }) => ($isTablet ? { display: "block" } : {})}
  }

  @media ${media.desktop} {
    display: block;
  }

  @media ${media.desktopSlider} {
    position: absolute;
    top: 50%;
    ${({ $isLeft }) =>
      $isLeft
        ? css`
            transform: translateY(-50%);
          `
        : css`
            transform: translateY(-50%) rotate(180deg);
          `}
  }
`;
