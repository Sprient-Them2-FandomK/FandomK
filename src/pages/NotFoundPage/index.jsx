import { useNavigate } from "react-router-dom";
import * as S from "./index.style";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/", { replace: true });
  };

  return (
    <S.Container>
      <S.Title>404</S.Title>
      <S.Subtitle>페이지를 찾을 수 없습니다</S.Subtitle>
      <S.Description>
        입력하신 주소가 잘못되었거나
        <br /> 페이지가 이동되었을 수 있어요.
      </S.Description>
      <S.HomeButton onClick={handleGoHome}>홈으로 돌아가기</S.HomeButton>
    </S.Container>
  );
};

export default NotFoundPage;
