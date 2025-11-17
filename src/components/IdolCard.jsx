import styled from "styled-components";
import DeleteIcon from "../assets/imgs/delete.svg";

// 이미지 사이즈 상수
const IMAGE_SIZES = {
  small: 86,
  large: 115,
};

// wrapper 사이즈 (이미지 + 여백)
const WRAPPER_SIZES = {
  small: 100,
  large: 128,
};

const IdolCard = ({ idol, size = "large", onRemove, showDeleteButton = false }) => {
  return (
    <CardContainer>
      {/* 이미지 영역 */}
      <ImageWrapper $size={size}>
        <IdolImage $size={size} src={idol.profileImage} alt={idol.name} />
        {/* 삭제 버튼 */}
        {showDeleteButton && (
          <DeleteButton onClick={() => onRemove(idol.id)} aria-label="삭제">
            <DeleteIconImg src={DeleteIcon} alt="삭제" />
          </DeleteButton>
        )}
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
  position: relative;
  width: ${(props) => WRAPPER_SIZES[props.$size]}px;
  aspect-ratio: 1;
  border: 1.31px solid #f96868;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// 아이돌 이미지
const IdolImage = styled.img`
  width: ${(props) => IMAGE_SIZES[props.$size]}px;
  aspect-ratio: 1;
  border-radius: 50%;
  object-fit: cover;
`;

// 삭제 버튼
const DeleteButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 31px;
  height: 31px;
  background-color: #ffffff;
  border: 2.8px solid #02000e;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 0;

  &:hover {
    opacity: 0.8;
  }
`;

// 삭제 아이콘 이미지
const DeleteIconImg = styled.img`
  width: 11px;
  height: 11px;
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
