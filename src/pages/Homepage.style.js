import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--black-02000E);
  width: 100vw;
  overflow-x: hidden;
`;

export const Section = styled.section`
  height: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 1079px) {
    height: 744px;
  }

  @media (max-width: 576px) {
    height: 812px;
  }
`;

export const FirstSection = styled(Section)`
  height: 1080px;

  @media (max-width: 1079px) {
    height: 1200px;
  }

  @media (max-width: 576px) {
    height: 812px;
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
    inset: 0;
    width: 100%;
    height: 100%;
    transform: translateY(-5%);
    object-fit: contain;
  }

  @media (max-width: 1079px) {
    width: 100%;
    overflow: hidden;

    & > img {
      position: absolute;
      left: 0px;
      right: 0px;
      top: 50%;
      transform: translateY(-50%) scale(111.2%);
    }
  }

  @media (max-width: 576px) {
    & > img {
      transform: translateY(-50%) scale(121.6%);
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
  gap: 29px;
  z-index: 1;
  margin-top: 140px;

  & span {
    color: var(--orange-F96D69);
  }

  @media (max-width: 1079px) {
    gap: 32px;
    font-size: 20px;
    margin-top: 120px;

    & > img {
      width: 325.34px;
      height: 62px;
    }
  }

  @media (max-width: 576px) {
    gap: 20px;
    font-weight: 400;
    margin-top: 100px;

    & > img {
      width: 236.64px;
      height: 45.1px;
    }
  }
`;

export const StartButton = styled.button`
  width: 477px;
  height: 48px;
  background: linear-gradient(to right, #f86f65, #fe5493);
  border-radius: 3px;
  text-align: center;
  line-height: 48px;
  font-weight: 700;
  font-size: 14px;
  margin-bottom: 120px;
  z-index: 1;
  color: white;
  cursor: pointer;

  @media (max-width: 576px) {
    width: 230px;
    font-weight: 400;
    margin-bottom: 100px;
  }
`;

export const SectionBox = styled.div`
  height: 100%;
  width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  @media (max-width: 1079px) {
    width: 100%;
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
  margin-top: 160px;

  @media (max-width: 1079px) {
    margin-top: 84px;
  }

  @media (max-width: 576px) {
    margin-top: 93px;
  }
`;

export const SectionTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: var(--yellow-Dec030);
`;

export const SectionInfo = styled.div`
  font-size: 24px;
  font-weight: 700;
  text-align: center;

  @media (max-width: 1079px) {
    font-size: 20px;
  }
`;

export const SectionImg1 = styled.img`
  width: 320px;
  height: 693.66px;
  z-index: 1;
  margin-top: 60px;

  @media (max-width: 1079px) {
    width: 200px;
    height: 433.54px;
    margin-top: 47px;
  }

  @media (max-width: 576px) {
    width: 240px;
    height: 520.25px;
  }
`;

export const VerticalLine = styled.div`
  width: 187px;
  height: 3091px;
  background: linear-gradient(to bottom, #030615, #051d31, #051e32, #051c30, #030b1c);
  position: absolute;
  top: 1393px;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: 1079px) {
    width: 117px;
    height: 1928px;
    top: 1394px;
  }

  @media (max-width: 576px) {
    height: 2133px;
    top: 1029px;
  }
`;
