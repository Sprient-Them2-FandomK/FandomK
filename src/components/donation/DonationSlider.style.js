import { media } from "@/styles/media";
import styled from "styled-components";

export const SlideWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  @media ${media.desktop} {
    gap: 40px;
    width: 1200px;
  }
  @media ${media.desktopSlider} {
    gap: 40px;
  }
`;

export const SlideTrack = styled.div`
  display: flex;
  gap: 8px;
  will-change: transform;

  @media ${media.tablet} {
    gap: 16px;
  }

  @media ${media.desktop} {
    gap: 24px;
  }
`;

export const FundingCardWrapper = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
`;

export const SlideArrow = styled.button`
  display: none;
  ${({ $direction }) =>
    $direction === "left" ? { left: "-80px" } : { right: "-80px", transform: "rotate(180deg)" }}

  &:disabled {
    background: var(--gray-828282);
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
