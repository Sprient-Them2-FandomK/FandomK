import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 80px;
  background-color: var(--black-02000E);

  @media (max-width: 767px) {
    height: 64px;
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
  width: 1200px;
  height: 100%;
  margin: 0 auto;
  position: relative;
  z-index: 1;

  @media (max-width: 1199px) {
    width: 100%;
  }
`;

export const HeaderLogo = styled.img`
  width: 167.92px;
  height: 32px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;

  @media (max-width: 1199px) {
    width: 120px;
    height: 22.87px;
  }

  @media (max-width: 767px) {
    width: 108px;
    height: 20.58px;
  }
`;

export const HeaderProfile = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;

  @media (max-width: 1199px) {
    right: 24px;
  }
`;
