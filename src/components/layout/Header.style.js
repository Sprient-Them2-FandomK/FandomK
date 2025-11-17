import { media } from "@/styles/media";
import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 64px;

  background-color: var(--color-bg-dark);

  @media ${media.desktop} {
    height: 80px;
  }
`;

export const HeaderGlow = styled.img`
  position: absolute;
  top: -49px;
  left: -114px;
  width: 199px;
  height: 273px;
`;

export const HeaderContent = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  margin: 0 auto;

  @media ${media.desktop} {
    width: 1200px;
  }
`;

export const HeaderLogo = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 108px;
  height: 20.58px;
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
  position: absolute;
  top: 50%;
  right: 24px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  transform: translateY(-50%);
  cursor: pointer;

  @media ${media.desktop} {
    right: 0;
  }
`;
