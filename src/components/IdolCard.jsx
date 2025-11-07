import styled from "styled-components";

const IdolCard = ({ idol, size = "large" }) => {
  return (
    <CardContainer>
      {/* 이미지 영역 */}
      <ImageWrapper $size={size}>
        <IdolImage $size={size} src={idol.profileImage} alt={idol.name} />
      </ImageWrapper>

      {/* 텍스트 영역 */}
      <InfoSection>
        <MemberName>{idol.name}</MemberName>
        <GroupName>{idol.group}</GroupName>
      </InfoSection>
    </CardContainer>
  );
};

// 카드 전체 컨테이너
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

// 이미지 wrapper (외곽 border)
const ImageWrapper = styled.div`
  width: ${(props) => (props.$size === "small" ? "100px" : "128px")};
  height: ${(props) => (props.$size === "small" ? "100px" : "128px")};
  border: 1.31px solid #f96868;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// 아이돌 이미지
const IdolImage = styled.img`
  width: ${(props) => (props.$size === "small" ? "86px" : "115px")};
  height: ${(props) => (props.$size === "small" ? "86px" : "115px")};
  border-radius: 50%;
  object-fit: cover;
`;

// 텍스트 정보 섹션
const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
`;

// 멤버 이름
const MemberName = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #ffffff;
`;

// 그룹 이름
const GroupName = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6);
  padding: 0 12px;
`;

export default IdolCard;
