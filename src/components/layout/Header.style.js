import { media } from "@/styles/media";
import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 64px;
  background-color: var(--black-02000E);

  @media ${media.desktop} {
    height: 80px;
  }
`;

export const HeaderGlow = styled.img`
  position: absolute;
  width: 199px;
  height: 273px;
  left: -114px;
  top: -49px;
`;

export const HeaderContent = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  position: relative;
  z-index: 1;

  @media ${media.desktop} {
    width: 1200px;
  }
`;

export const HeaderLogo = styled.img`
  width: 108px;
  height: 20.58px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;

  @media ${media.tablet} {
    width: 120px;
    height: 22.87px;
  }

  @media ${media.desktop} {
    width: 167.92px;
    height: 32px;
  }
`;

export const HeaderProfile = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  position: absolute;
  right: 24px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;

  @media ${media.desktop} {
    right: 0;
  }
`;
