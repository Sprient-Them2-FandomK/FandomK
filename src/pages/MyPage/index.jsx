import { getIdolList } from "@/api/idolsClient";
import { getRecommendations } from "@/api/recommendationClient";
import MypageAdd from "@/assets/svg/MypageAddSvg";
import ArrowButton from "@/components/common/ArrowButton";
import HighlightButton from "@/components/common/HighlightButton";
import useDraggableSlider from "@/hooks/useDraggableSlider";
import { idolsStorage } from "@/storage/idols.storage";
import { useEffect, useState } from "react";
import { css } from "styled-components";
import IdolCard from "./components/IdolCard";
import * as S from "./index.style";

const MyPage = () => {
  // 초기 화면 크기 감지 함수
  const getInitialLayout = () => {
    if (typeof window === "undefined")
      return { idolsPerPage: 16, recommendCount: 8, isMobile: false };

    const isTablet = window.matchMedia("(min-width: 744px) and (max-width: 1199px)").matches;
    const isDesktop = window.matchMedia("(min-width: 1200px)").matches;

    if (isDesktop) {
      return { idolsPerPage: 16, recommendCount: 8, isMobile: false }; // 8*2, 첫 행만
    } else if (isTablet) {
      return { idolsPerPage: 8, recommendCount: 8, isMobile: false }; // 4*2, 첫 페이지 전체
    } else {
      return { idolsPerPage: 6, recommendCount: 6, isMobile: true }; // 3*2, 첫 페이지 전체
    }
  };

  const initialLayout = getInitialLayout();

  // 화면 크기에 따른 페이지당 아이돌 수 및 추천 개수
  const [idolsPerPage, setIdolsPerPage] = useState(initialLayout.idolsPerPage);
  const [recommendCount, setRecommendCount] = useState(initialLayout.recommendCount);
  const [isMobile, setIsMobile] = useState(initialLayout.isMobile);

  // 미디어 쿼리 감지
  useEffect(() => {
    const updateLayout = () => {
      const isTablet = window.matchMedia("(min-width: 744px) and (max-width: 1199px)").matches;
      const isDesktop = window.matchMedia("(min-width: 1200px)").matches;

      if (isDesktop) {
        setIdolsPerPage(14); // 8*2
        setRecommendCount(7); // 첫 행만
        setIsMobile(false);
      } else if (isTablet) {
        setIdolsPerPage(8); // 4*2
        setRecommendCount(8); // 첫 페이지 전체
        setIsMobile(false);
      } else {
        // 모바일
        setIdolsPerPage(6); // 3*2
        setRecommendCount(6); // 첫 페이지 전체
        setIsMobile(true);
      }
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);
  // 상태 관리: 사용자가 선택한 관심 아이돌 ID 목록
  const [selectedIdols, setSelectedIdols] = useState(() => {
    // 초기값을 로컬스토리지에서 불러오기
    return idolsStorage.get();
  });

  // 추가하려고 선택 중인 아이돌 ID 목록
  const [selectedIds, setSelectedIds] = useState([]);

  // API로 불러온 전체 아이돌 목록
  const [allIdols, setAllIdols] = useState([]);

  // AI 추천 아이돌 목록
  const [recommendedIdols, setRecommendedIdols] = useState([]);

  // 로딩 및 에러 상태
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // 현재 페이지 (추가 가능한 아이돌 목록용)
  const [currentPage, setCurrentPage] = useState(0);

  // 컴포넌트 마운트 시 아이돌 목록 불러오기
  useEffect(() => {
    const fetchIdols = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await getIdolList({ pageSize: 100 }); // 충분히 큰 페이지 사이즈로 전체 목록 가져오기
        setAllIdols(data.list || []);
      } catch (err) {
        console.error("아이돌 목록을 불러오는데 실패했습니다:", err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchIdols();
  }, []);

  // selectedIdols 변경 시 로컬스토리지에 저장
  useEffect(() => {
    idolsStorage.set(selectedIdols);
  }, [selectedIdols]);

  // 관심 아이돌 변경 시 AI 추천 업데이트
  useEffect(() => {
    const fetchRecommendations = async () => {
      // 관심 아이돌이 없으면 추천 안 함
      if (selectedIdols.length === 0 || allIdols.length === 0) {
        setRecommendedIdols([]);
        return;
      }

      try {
        const result = await getRecommendations(selectedIdols, recommendCount);

        const { recommended_ids } = result;

        // 추천된 ID로 아이돌 객체 찾기
        const recommended = recommended_ids
          .map((id) => allIdols.find((idol) => idol.id === id))
          .filter((idol) => idol && !selectedIdols.includes(idol.id)); // 이미 선택된 건 제외

        setRecommendedIdols(recommended);
      } catch (err) {
        console.error("❌ 추천을 불러오는데 실패했습니다:", err);
        setRecommendedIdols([]);
      }
    };

    fetchRecommendations();
  }, [selectedIdols, allIdols, recommendCount]);

  // 선택된 아이돌 객체 배열 가져오기
  const favoriteIdols = allIdols.filter((idol) => selectedIdols.includes(idol.id));

  // 추가 가능한 아이돌 (이미 관심 아이돌에 없는 것만)
  const availableIdols = allIdols.filter((idol) => !selectedIdols.includes(idol.id));

  // AI 추천이 있으면 첫 페이지에 우선 배치, 나머지는 그 뒤에
  const availableIdolsWithRecommendations =
    selectedIdols.length > 0 && recommendedIdols.length > 0
      ? [
          ...recommendedIdols.slice(0, recommendCount), // AI 추천 (화면 크기에 따라 조정)
          ...availableIdols.filter((idol) => !recommendedIdols.some((rec) => rec.id === idol.id)),
        ]
      : availableIdols;

  // 현재 페이지의 아이돌들 (데스크톱/타블렛은 페이징, 모바일은 전체)
  const currentPageIdols = isMobile
    ? availableIdolsWithRecommendations // 모바일: 전체 보여주기
    : availableIdolsWithRecommendations.slice(
        currentPage * idolsPerPage,
        (currentPage + 1) * idolsPerPage
      );

  // 전체 페이지 수
  const totalPages = Math.ceil(availableIdolsWithRecommendations.length / idolsPerPage);

  // 슬라이드 기능 (모바일용)
  const drag = useDraggableSlider(availableIdolsWithRecommendations.length);

  // 관심 아이돌 삭제 핸들러
  const handleRemoveIdol = (idolId) => {
    setSelectedIdols((prev) => prev.filter((id) => id !== idolId));
  };

  // 아이돌 선택/해제 핸들러
  const handleSelectIdol = (idolId) => {
    setSelectedIds((prev) =>
      prev.includes(idolId) ? prev.filter((id) => id !== idolId) : [...prev, idolId]
    );
  };

  // 추가하기 버튼 핸들러
  const handleAddIdols = () => {
    if (selectedIds.length === 0) return;

    setSelectedIdols((prev) => [...prev, ...selectedIds]);
    setSelectedIds([]); // 선택 상태 초기화
  };

  // 이전 페이지
  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  // 다음 페이지
  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  // 로딩 중일 때
  if (isLoading) {
    return (
      <S.MypageContainer>
        <S.SectionTitle>아이돌 목록을 불러오는 중...</S.SectionTitle>
      </S.MypageContainer>
    );
  }

  // 에러 발생 시
  if (error) {
    return (
      <S.MypageContainer>
        <S.SectionTitle>오류가 발생했습니다: {error}</S.SectionTitle>
      </S.MypageContainer>
    );
  }

  return (
    <>
      <S.MypageContainer>
        {/* 내가 관심있는 아이돌 섹션 */}
        <S.FavoriteSection>
          <S.SectionTitle>내가 관심있는 아이돌</S.SectionTitle>
          <S.FavoriteIdolsList>
            {favoriteIdols.length > 0 ? (
              favoriteIdols.map((idol) => (
                <IdolCard
                  key={idol.id}
                  idol={{
                    id: idol.id,
                    name: idol.name,
                    group: idol.group,
                    profileImage: idol.profilePicture,
                  }}
                  $size="md"
                  showDeleteButton={true}
                  onRemove={handleRemoveIdol}
                />
              ))
            ) : (
              <S.EmptyMessage>관심 아이돌을 추가해보세요!</S.EmptyMessage>
            )}
          </S.FavoriteIdolsList>
        </S.FavoriteSection>

        {/* 구분선 */}
        <S.Divider />

        {/* 관심 있는 아이돌 추가 섹션 */}
        <S.AddIdolsSection>
          <S.SectionTitle>관심 있는 아이돌들을 추가해보세요.</S.SectionTitle>
          {/* 좌측 화살표 버튼 - 모바일에서 숨김 */}
          <S.Wrapper>
            <ArrowButton $size="lg" onClick={handlePrevPage} disabled={currentPage === 0} />

            <S.IdolsGridContainer
              ref={drag.viewportRef}
              onMouseDown={drag.handleMouseDown}
              onTouchStart={drag.handleTouchStart}
              onTouchMove={drag.handleTouchMove}
              onTouchEnd={drag.handleTouchEnd}
            >
              {/* 아이돌 그리드 */}
              <S.IdolsGrid ref={drag.listRef} $isMobile={isMobile}>
                {currentPageIdols.map((idol) => (
                  <IdolCard
                    key={idol.id}
                    idol={{
                      id: idol.id,
                      name: idol.name,
                      group: idol.group,
                      profileImage: idol.profilePicture,
                    }}
                    $size="lg"
                    $selected={selectedIds.includes(idol.id)}
                    onClick={() => handleSelectIdol(idol.id)}
                  />
                ))}
              </S.IdolsGrid>
            </S.IdolsGridContainer>
            <ArrowButton
              $size="lg"
              $isLeft={false}
              onClick={handleNextPage}
              disabled={currentPage === totalPages - 1}
            />
          </S.Wrapper>
          <HighlightButton
            onClick={handleAddIdols}
            $customStyle={css`
              display: flex;
              width: 255px;
              height: 48px;
              margin-top: 48px;

              font-size: 1.6rem;
              border-radius: 24px;
              cursor: pointer;
              align-self: center;
              justify-content: center;
              align-items: center;
              gap: 8px;
            `}
            disabled={selectedIds.length === 0}
            type="submit"
          >
            <MypageAdd />
            <span>추가하기</span>
          </HighlightButton>
        </S.AddIdolsSection>
      </S.MypageContainer>
    </>
  );
};

export default MyPage;
