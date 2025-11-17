import { media } from "@/styles/media";
import styled from "styled-components";

export const ArrowButtonWrapper = styled.button`
  display: none;
  ${({ $direction }) =>
    $direction === "left" ? { left: "-80px" } : { right: "-80px", transform: "rotate(180deg)" }}

  &:disabled {
    background: var(--color-gray-500);
  }

  @media ${media.desktop} {
    display: block;
    top: 172px;
    flex: 0 0 40px;
    width: 40px;
    height: 80px;
    border-radius: 8px;

    background-color: #1b1b1bcc;
  }

  @media ${media.desktopSlider} {
    position: absolute;
  }
`;
