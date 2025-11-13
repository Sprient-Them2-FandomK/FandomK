import { media } from "@/styles/media";
import styled from "styled-components";

export const Contaier = styled.section`
  padding-left: 24px;

  @media ${media.desktop} {
    width: 1200px;
    margin: 0 auto;
    padding-left: 0px;
  }
`;

export const DonationTitle = styled.h2`
  margin-bottom: 16px;
  font-size: 1.6rem;
  line-height: 2.6rem;
  font-weight: 700;

  @media ${media.tablet} {
    font-size: 2rem;
  }
  @media ${media.desktop} {
    font-size: 2.4rem;
  }
`;

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

export const FundingCardWrapper = styled.div`
  display: flex;
  gap: 8px;
  width: 100%;
  overflow: hidden;
  @media ${media.tablet} {
    gap: 16px;
  }

  @media ${media.desktop} {
    gap: 24px;
  }
`;

export const SlideArrow = styled.button`
  display: none;
  ${({ $direction }) =>
    $direction === "left" ? { left: "-80px" } : { right: "-80px", transform: "rotate(180deg)" }}

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
