import { media } from "@/styles/media";
import { TYPO } from "@/styles/typography";
import { COLOR_VAR_MAP, hexToRgba } from "@/utils/color";
import styled from "styled-components";

// 전체 컨테이너 - max-width 1200px, flex column, gap 40px
export const MypageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 76px 20px 40px;
  min-height: 100vh; /* 항상 최소 높이 확보로 스크롤바 공간 유지 */

  @media ${media.tablet} {
    padding: 76px 40px 40px;
  }

  @media ${media.desktop} {
    padding: 76px 0 40px;
  }
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
  ${TYPO.title18SemiBold};
  color: ${hexToRgba(COLOR_VAR_MAP["--color-white-100"])};
  margin-bottom: 24px;

  @media ${media.tablet} {
    font-size: 20px;
    margin-bottom: 28px;
  }

  @media ${media.desktop} {
    font-size: 24px;
    margin-bottom: 32px;
  }
`;

// 내가 관심있는 아이돌 리스트
export const FavoriteIdolsList = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  padding: 16px;
  min-height: 100px;

  @media ${media.tablet} {
    gap: 14px;
    padding: 18px;
  }

  @media ${media.desktop} {
    gap: 16px;
    padding: 20px;
  }
`;

// 빈 상태 메시지
export const EmptyMessage = styled.div`
  width: 100%;
  padding: 40px 0;

  color: ${hexToRgba("#FFFFFF99")};
  font-size: 16px;
  text-align: center;
`;

// 구분선
export const Divider = styled.div`
  width: 100%;
  height: 1px;

  background-color: ${hexToRgba(COLOR_VAR_MAP["--color-white-100"])};
`;

// 아이돌 그리드 컨테이너 (화살표 버튼 포함)
export const IdolsGridContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0; /* 모바일: 화살표 없음 */
  overflow: hidden; /* 모바일 슬라이드용 */
  width: 100%;

  @media ${media.tablet} {
    gap: 24px;
  }

  @media ${media.desktop} {
    gap: 32px;
  }
`;

// 화살표 버튼
export const ArrowButton = styled.button`
  display: flex;
  width: 29px;
  height: 135px;
  border: none;

  background-color: ${hexToRgba("#1B1B1BCC")};
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  flex-shrink: 0;
  transform: ${(props) => (props.$isRight ? "scaleX(-1)" : "none")};

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    opacity: 0.8;
  }
`;

// 아이돌 그리드 - 반응형 (모바일 3열, 타블렛 4열, 데스크톱 8열)
export const IdolsGrid = styled.div`
  /* 모바일: 3*2 그리드를 유지하면서 가로 슬라이드 */
  display: grid;
  gap: 32px 20px;
  flex: 1;

  /* 모바일: 2행 고정, 열은 자동으로 늘어남 */
  grid-template-rows: ${(props) => (props.$isMobile ? "repeat(2, 1fr)" : "none")};
  grid-template-columns: ${(props) => (props.$isMobile ? "none" : "repeat(3, 1fr)")};
  grid-auto-flow: ${(props) => (props.$isMobile ? "column" : "row")};
  grid-auto-columns: ${(props) => (props.$isMobile ? "128px" : "auto")}; /* 카드 너비 */

  @media ${media.tablet} {
    grid-template-rows: none;
    grid-template-columns: repeat(4, 1fr); /* 타블렛: 4*2 */
    grid-auto-flow: row;
    grid-auto-columns: auto;
    gap: 32px 20px;
    will-change: auto;
  }

  @media ${media.desktop} {
    grid-template-rows: none;
    grid-template-columns: repeat(7, 1fr); /* 데스크톱: 8*2 */
    grid-auto-flow: row;
    grid-auto-columns: auto;
    gap: 32px 20px;
    will-change: auto;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;

  @media ${media.desktop} {
    gap: 12px;
    width: 1200px;
    padding: 0 12px;
  }

  @media ${media.desktopSlider} {
    gap: 40px;
  }
`;
