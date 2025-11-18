import { useRouteError, useNavigate } from "react-router-dom";
import * as S from "./index.style";

const RouteErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  console.error("[RouteErrorPage]", error);

  const message =
    error?.statusText ||
    error?.message ||
    "알 수 없는 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.";

  return (
    <S.Container>
      <S.Title>페이지를 불러오는 중 문제가 발생했어요</S.Title>

      <S.Description>
        잠시 후 다시 시도해 주세요.
        <br />
        문제가 반복되면 관리자에게 문의 부탁드립니다.
      </S.Description>

      <S.ErrorBox>{message}</S.ErrorBox>

      <S.ButtonGroup>
        <S.RetryButton onClick={() => window.location.reload()}>다시 시도하기</S.RetryButton>
        <S.HomeButton onClick={() => navigate("/", { replace: true })}>
          홈으로 돌아가기
        </S.HomeButton>
      </S.ButtonGroup>
    </S.Container>
  );
};

export default RouteErrorPage;
