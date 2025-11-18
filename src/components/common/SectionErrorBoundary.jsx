import { ErrorBoundary } from "react-error-boundary";
import * as S from "./SectionErrorBoundary.style";

const SectionErrorFallback = ({ error, resetErrorBoundary }) => {
  // 에러 메시지 정제
  const message =
    error?.response?.status === 504
      ? "서버 응답이 지연되어 요청을 처리할 수 없어요. (504 Gateway Timeout)"
      : error?.message || "요청을 처리하는 중 문제가 발생했어요.";

  return (
    <S.Container>
      <S.Title>⚠️ 로딩 중 오류 발생</S.Title>
      <S.Message>{message}</S.Message>
      <S.Description>
        다시 시도해 주세요. 문제가 반복되면 관리자에게 문의 부탁드립니다.
      </S.Description>
      <S.RetryButton onClick={resetErrorBoundary}>다시 시도하기</S.RetryButton>
    </S.Container>
  );
};

const SectionErrorBoundary = ({ children }) => {
  return (
    <ErrorBoundary
      FallbackComponent={SectionErrorFallback}
      onError={(error, info) => {
        console.error("[SectionErrorBoundary]", error, info);
      }}
    >
      {children}
    </ErrorBoundary>
  );
};

export default SectionErrorBoundary;
