import { media } from "@/styles/media";
import styled from "styled-components";

export const SlideWrapper = styled.div`
  display: flex;
  position: relative;
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
  overflow: hidden;
  width: 100%;
`;
