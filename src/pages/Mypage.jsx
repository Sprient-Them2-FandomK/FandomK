import styled from "styled-components";
import IdolCard from "../components/IdolCard";

// 테스트 데이터
const TEST_IDOLS = [
  {
    id: 1,
    name: "린",
    group: "메이브",
    profileImage: "/placeholder.png",
  },
  {
    id: 2,
    name: "로제",
    group: "블랙핑크",
    profileImage: "/placeholder.png",
  },
  {
    id: 3,
    name: "카리나",
    group: "에스파",
    profileImage: "/placeholder.png",
  },
  {
    id: 4,
    name: "카리나",
    group: "에스파",
    profileImage: "/placeholder.png",
  },
  {
    id: 5,
    name: "카리나",
    group: "에스파",
    profileImage: "/placeholder.png",
  },
  {
    id: 6,
    name: "카리나",
    group: "에스파",
    profileImage: "/placeholder.png",
  },
  {
    id: 7,
    name: "카리나",
    group: "에스파",
    profileImage: "/placeholder.png",
  },
  {
    id: 8,
    name: "카리나",
    group: "에스파",
    profileImage: "/placeholder.png",
  },
  {
    id: 9,
    name: "카리나",
    group: "에스파",
    profileImage: "/placeholder.png",
  },
];

const Mypage = () => {
  return (
    <>
      <header>
        <div>fandomK 헤더</div>
      </header>
      <MypageContainer>
        {/* 내가 관심있는 아이돌 섹션 */}
        <FavoriteSection>
          <SectionTitle>내가 관심있는 아이돌</SectionTitle>
          <FavoriteIdolsList>
            {TEST_IDOLS.slice(0, 2).map((idol) => (
              <IdolCard key={idol.id} idol={idol} size="small" />
            ))}
          </FavoriteIdolsList>
        </FavoriteSection>

        {/* 구분선 */}
        <Divider />

        {/* 관심 있는 아이돌 추가 섹션 */}
        <AddIdolsSection>
          <SectionTitle>관심 있는 아이돌들을 추가해보세요.</SectionTitle>
          <IdolsGrid>
            {TEST_IDOLS.map((idol) => (
              <IdolCard key={idol.id} idol={idol} size="large" />
            ))}
          </IdolsGrid>
          {/* 추가하기 버튼 */}
          <AddButton>
            <ButtonText>
              <Plus>+</Plus> 추가하기
            </ButtonText>
          </AddButton>
        </AddIdolsSection>
      </MypageContainer>
    </>
  );
};

// 전체 컨테이너 - max-width 1200px, flex column, gap 40px
const MypageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 76px;
`;

// 섹션 공통
const FavoriteSection = styled.section`
  display: flex;
  flex-direction: column;
`;

const AddIdolsSection = styled.section`
  display: flex;
  flex-direction: column;
`;

// 섹션 제목 - 아래 마진 32px
const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 32px;
`;

// 내가 관심있는 아이돌 리스트
const FavoriteIdolsList = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  padding: 20px;
  min-height: 100px;
`;

// 구분선
const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #ffffff;
`;

// 아이돌 그리드 - 8열 2행 고정, 행간 32px
const IdolsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 32px 20px; /* 행간 32px, 열간 20px */
`;

// 추가하기 버튼 - 255x48px, radius 24px, 위 마진 48px
const AddButton = styled.button`
  width: 255px;
  height: 48px;
  margin-top: 48px;
  background: linear-gradient(90deg, #f96d69 0%, #fe5493 100%);
  border: none;
  border-radius: 24px;
  color: #fff;
  cursor: pointer;
  align-self: center;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    opacity: 0.9;
  }
`;

// 버튼 텍스트 wrapper
const ButtonText = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 16px;
  font-weight: 700;
`;

// + 기호 추후 아이콘으로 변경할 예정
const Plus = styled.span`
  font-size: 16px;
  font-weight: 700;
`;

export default Mypage;
