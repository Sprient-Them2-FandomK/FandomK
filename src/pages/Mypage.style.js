import styled from "styled-components";

// 전체 컨테이너 - max-width 1200px, flex column, gap 40px
export const MypageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 76px;
  min-height: 100vh; /* 항상 최소 높이 확보로 스크롤바 공간 유지 */
`;

// 섹션 공통
export const FavoriteSection = styled.section`
  display: flex;
  flex-direction: column;
`;

export const AddIdolsSection = styled.section`
  display: flex;
  flex-direction: column;
`;

// 섹션 제목 - 아래 마진 32px
export const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: var(--white-FFFFFF);
  margin-bottom: 32px;
`;

// 내가 관심있는 아이돌 리스트
export const FavoriteIdolsList = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  padding: 20px;
  min-height: 100px;
`;

// 빈 상태 메시지
export const EmptyMessage = styled.div`
  width: 100%;
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
  font-size: 16px;
  padding: 40px 0;
`;

// 구분선
export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: var(--white-FFFFFF);
`;

// 아이돌 그리드 컨테이너 (화살표 버튼 포함)
export const IdolsGridContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;

// 화살표 버튼
export const ArrowButton = styled.button`
  width: 29px;
  height: 135px;
  background-color: rgba(27, 27, 27, 0.8);
  border: none;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  flex-shrink: 0;
  transform: ${(props) => (props.$isRight ? "scaleX(-1)" : "none")};

  &:hover:not(:disabled) {
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;

// 아이돌 그리드 - 8열 2행 고정, 행간 32px
export const IdolsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 32px 20px; /* 행간 32px, 열간 20px */
  flex: 1;
`;

// 추가하기 버튼 - 255x48px, radius 24px, 위 마진 48px
export const AddButton = styled.button`
  width: 255px;
  height: 48px;
  margin-top: 48px;
  background: linear-gradient(90deg, var(--orange-F96D69) 0%, var(--pink-FE5493) 100%);
  border: none;
  border-radius: 24px;
  color: var(--white-FFFFFF);
  cursor: pointer;
  align-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  font-weight: 700;

  &:hover:not(:disabled) {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
