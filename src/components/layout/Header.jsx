import LogoImg from "../../assets/imgs/logo.svg";
import ProfileImg from "../../assets/imgs/profile.png";
import GlowImg from "../../assets/imgs/header_glow.png";
import { useLocation, useNavigate } from "react-router-dom";
import * as S from "./Header.style";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  if (location.pathname == "/") return null;

  return (
    <S.HeaderContainer>
      <S.HeaderGlow src={GlowImg} />

      <S.HeaderContent>
        <S.HeaderLogo
          src={LogoImg}
          alt="로고"
          onClick={() => {
            window.location.reload();
          }}
        />
        <S.HeaderProfile src={ProfileImg} alt="프로필" onClick={() => navigate("/mypage")} />
      </S.HeaderContent>
    </S.HeaderContainer>
  );
};

export default Header;
