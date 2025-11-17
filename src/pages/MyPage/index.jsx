import { getIdolList } from "@/api/idolsClient";
import MypageAdd from "@/assets/svg/MypageAddSvg";
import MypageArrow from "@/assets/svg/MypageArrowSvg";
import HighlightButton from "@/components/common/HighlightButton";
import { idolsStorage } from "@/storage/idols.storage";
import { useEffect, useState } from "react";
import { css } from "styled-components";
import IdolCard from "./components/IdolCard";
import * as S from "./index.style";

const IDOLS_PER_PAGE = 16; // 8열 2행

const MyPage = () => {
  // 상태 관리: 사용자가 선택한 관심 아이돌 ID 목록
  const [selectedIdols, setSelectedIdols] = useState(() => {
    // 초기값을 로컬스토리지에서 불러오기
    return idolsStorage.get();
  });

  // 추가하려고 선택 중인 아이돌 ID 목록
  const [selectedIds, setSelectedIds] = useState([]);

  // API로 불러온 전체 아이돌 목록
  const [allIdols, setAllIdols] = useState([]);

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

  // 선택된 아이돌 객체 배열 가져오기
  const favoriteIdols = allIdols.filter((idol) => selectedIdols.includes(idol.id));

  // 추가 가능한 아이돌 (이미 관심 아이돌에 없는 것만)
  const availableIdols = allIdols.filter((idol) => !selectedIdols.includes(idol.id));

  // 현재 페이지의 아이돌들
  const currentPageIdols = availableIdols.slice(
    currentPage * IDOLS_PER_PAGE,
    (currentPage + 1) * IDOLS_PER_PAGE
  );

  // 전체 페이지 수
  const totalPages = Math.ceil(availableIdols.length / IDOLS_PER_PAGE);

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
                  size="small"
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
          <S.IdolsGridContainer>
            {/* 좌측 화살표 버튼 */}
            <S.ArrowButton onClick={handlePrevPage} disabled={currentPage === 0}>
              <MypageArrow />
            </S.ArrowButton>

            {/* 아이돌 그리드 */}
            <S.IdolsGrid>
              {currentPageIdols.map((idol) => (
                <IdolCard
                  key={idol.id}
                  idol={{
                    id: idol.id,
                    name: idol.name,
                    group: idol.group,
                    profileImage: idol.profilePicture,
                  }}
                  size="large"
                  selected={selectedIds.includes(idol.id)}
                  onClick={() => handleSelectIdol(idol.id)}
                />
              ))}
            </S.IdolsGrid>

            {/* 우측 화살표 버튼 */}
            <S.ArrowButton
              onClick={handleNextPage}
              disabled={currentPage === totalPages - 1}
              $isRight
            >
              <MypageArrow />
            </S.ArrowButton>
          </S.IdolsGridContainer>
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
