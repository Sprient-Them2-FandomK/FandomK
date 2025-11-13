import { media } from "@/styles/media";
import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--black-02000E);
  width: 100vw;
  overflow-x: hidden;
`;

export const Section = styled.section`
  height: 812px;
  display: flex;
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
  font-size: 2.6rem;
  line-height: 3.1rem;
  font-weight: 700;
  color: #ffffffde;
`;

export const FirstSectionBox = styled.div`
  height: 100%;
  width: 1080px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;

  & > img {
    position: absolute;
    width: 100%;
    height: 100%;
    inset: 0;
    object-fit: contain;
    top: 50%;
    transform: translateY(-50%) scale(121.6%);
    overflow: hidden;
  }

  @media ${media.tablet} {
    & > img {
      transform: translateY(-50%) scale(111.2%);
    }
  }

  @media ${media.desktop} {
    & > img {
      top: 0px;
      transform: translateY(-5%);
      overflow: visible;
    }
  }
`;

export const Blind = styled.h1`
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  font-weight: 400;
  z-index: 1;
  gap: 20px;
  margin-top: 100px;

  & span {
    color: var(--orange-F96D69);
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
  width: 230px;
  font-weight: 400;
  margin-bottom: 100px;
  height: 48px;
  background: linear-gradient(to right, #f86f65, #fe5493);
  border-radius: 3px;
  text-align: center;
  line-height: 48px;
  font-size: 14px;
  z-index: 1;
  color: white;
  cursor: pointer;

  @media ${media.tablet} {
    width: 477px;
    font-weight: 700;
    margin-bottom: 120px;
  }
`;

export const SectionBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

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
  flex-direction: column;
  color: white;
  gap: 8px;
  align-items: center;
  z-index: 1;
  margin-top: 93px;

  @media ${media.tablet} {
    margin-top: 84px;
  }

  @media ${media.desktop} {
    margin-top: 160px;
  }
`;

export const SectionTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: var(--yellow-Dec030);
`;

export const SectionInfo = styled.div`
  font-size: 20px;
  font-weight: 700;
  text-align: center;

  @media ${media.desktop} {
    font-size: 24px;
  }
`;

export const SectionImg1 = styled.img`
  width: 240px;
  height: 520.25px;
  z-index: 1;
  margin-top: 47px;

  @media ${media.tablet} {
    width: 200px;
    height: 433.54px;
  }

  @media ${media.desktop} {
    width: 320px;
    height: 693.66px;
    margin-top: 60px;
  }
`;

export const VerticalLine = styled.div`
  background: linear-gradient(to bottom, #030615, #051d31, #051e32, #051c30, #030b1c);
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  height: 2133px;
  top: 1029px;
  width: 117px;

  @media ${media.tablet} {
    height: 1928px;
    top: 1394px;
  }

  @media ${media.desktop} {
    top: 1393px;
    height: 3091px;
    width: 187px;
  }
`;
