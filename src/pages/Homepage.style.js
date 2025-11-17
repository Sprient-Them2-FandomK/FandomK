import { media } from "@/styles/media";
import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--color-bg-dark);
  overflow-x: hidden;
`;

export const Section = styled.section`
  display: flex;
  height: 812px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${media.tablet} {
    height: 744px;
  }

  @media ${media.desktop} {
    height: 1200px;
  }
`;

export const FirstSection = styled(Section)`
  height: 812px;

  @media ${media.tablet} {
    height: 1200px;
  }

  @media ${media.desktop} {
    height: 1080px;
  }
`;

export const FirstSectionTitle = styled.h2`
  color: #ffffffde;
  font-weight: 700;
  font-size: 2.6rem;
  line-height: 3.1rem;
`;

export const FirstSectionBox = styled.div`
  display: flex;
  position: relative;
  width: 1080px;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  & > img {
    overflow: hidden;
    position: absolute;
    top: 50%;
    width: 100%;
    height: 100%;
    object-fit: contain;
    transform: translateY(-50%) scale(121.6%);
  }

  @media ${media.tablet} {
    & > img {
      transform: translateY(-50%) scale(111.2%);
    }
  }

  @media ${media.desktop} {
    & > img {
      overflow: visible;
      top: 0;
      transform: translateY(-5%);
    }
  }
`;

export const Blind = styled.h1`
  overflow: hidden;
  position: absolute !important;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  border: 0;

  white-space: nowrap;
  clip-path: inset(50%);
`;

export const LogoContainer = styled.div`
  display: flex;
  z-index: 1;
  margin-top: 100px;

  font-weight: 400;
  font-size: 20px;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  & span {
    color: var(--color-primary);
  }

  & > img {
    width: 236.64px;
    height: 45.1px;
  }

  @media ${media.tablet} {
    gap: 32px;
    margin-top: 120px;

    font-weight: 700;

    & > img {
      width: 325.34px;
      height: 62px;
    }
  }

  @media ${media.desktop} {
    gap: 29px;
    margin-top: 140px;

    font-size: 26px;

    & > img {
      width: 509px;
      height: 97px;
    }
  }
`;

export const StartButton = styled.button`
  z-index: 1;
  width: 230px;
  height: 48px;
  margin-bottom: 100px;

  color: white;
  font-weight: 400;
  font-size: 14px;
  line-height: 48px;
  text-align: center;
  background: linear-gradient(to right, #f86f65, #fe5493);
  border-radius: 3px;
  cursor: pointer;

  @media ${media.tablet} {
    width: 477px;
    margin-bottom: 120px;

    font-weight: 700;
  }
`;

export const SectionBox = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;

  @media ${media.desktop} {
    width: 1200px;
  }
`;

export const SectionBg = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const SectionTitleContainer = styled.div`
  display: flex;
  z-index: 1;
  margin-top: 93px;

  color: white;
  flex-direction: column;
  gap: 8px;
  align-items: center;

  @media ${media.tablet} {
    margin-top: 84px;
  }

  @media ${media.desktop} {
    margin-top: 160px;
  }
`;

export const SectionTitle = styled.div`
  color: var(--color-accent);
  font-weight: 500;
  font-size: 16px;
`;

export const SectionInfo = styled.div`
  font-weight: 700;
  font-size: 20px;
  text-align: center;

  @media ${media.desktop} {
    font-size: 24px;
  }
`;

export const SectionImg1 = styled.img`
  z-index: 1;
  width: 240px;
  height: 520.25px;
  margin-top: 47px;
  animation-name: phoneAni;
  animation-duration: 1.2s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;

  @media ${media.tablet} {
    width: 200px;
    height: 433.54px;
  }

  @media ${media.desktop} {
    width: 320px;
    height: 693.66px;
    margin-top: 60px;
  }

  @keyframes phoneAni {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(10px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`;

export const VerticalLine = styled.div`
  position: absolute;
  top: 1029px;
  left: 50%;
  width: 117px;
  height: 2133px;
  background: linear-gradient(to bottom, #030615, #051d31, #051e32, #051c30, #030b1c);
  transform: translateX(-50%);

  @media ${media.tablet} {
    top: 1394px;
    height: 1928px;
  }

  @media ${media.desktop} {
    top: 1393px;
    width: 187px;
    height: 3091px;
  }
`;
