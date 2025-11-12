import styled from "styled-components";
import LogoImg from "../../assets/imgs/logo.svg";
import ProfileImg from "../../assets/imgs/profile.png";
import GlowImg from "../../assets/imgs/header_glow.png";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  if (location.pathname == "/") return null;

  return (
    <HeaderContainer>
      <HeaderGlow src={GlowImg} />

      <HeaderContent>
        <HeaderLogo
          src={LogoImg}
          alt="로고"
          onClick={() => {
            window.location.reload();
          }}
        />
        <HeaderProfile src={ProfileImg} alt="프로필" onClick={() => navigate("/mypage")} />
      </HeaderContent>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  width: 100%;
  height: 80px;
  background-color: var(--black-02000E);

  @media (max-width: 767px) {
    height: 64px;
  }
`;

const HeaderGlow = styled.img`
  position: absolute;
  width: 199px;
  height: 273px;
  left: -114px;
  top: -49px;
`;

const HeaderContent = styled.div`
  width: 1200px;
  height: 100%;
  margin: 0 auto;
  position: relative;
  z-index: 1;

  @media (max-width: 1199px) {
    width: 100%;
  }
`;

const HeaderLogo = styled.img`
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

const HeaderProfile = styled.img`
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

export default Header;
