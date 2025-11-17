import MypageDelete from "@/assets/svg/MypageDeleteSvg";
import * as S from "./IdolCard.style";

const IdolCard = ({
  idol,
  size = "large",
  onRemove,
  showDeleteButton = false,
  selected = false,
  onClick,
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick(idol.id);
    }
  };

  return (
    <S.CardContainer onClick={handleClick} $clickable={!!onClick}>
      {/* 이미지 영역 */}
      <S.ImageWrapper $size={size} $selected={selected}>
        <S.ImageContainer $size={size} $selected={selected}>
          <S.IdolImage src={idol.profileImage} alt={idol.name} />
        </S.ImageContainer>

        {/* 삭제 버튼 */}
        {showDeleteButton && (
          <S.DeleteButton
            onClick={(e) => {
              e.stopPropagation();
              onRemove(idol.id);
            }}
            aria-label="삭제"
          >
            <MypageDelete />
          </S.DeleteButton>
        )}

        {/* 체크 표시 */}
        {selected && (
          <S.CheckIcon>
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
              <path
                d="M15 30L25 40L45 20"
                stroke="white"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </S.CheckIcon>
        )}
      </S.ImageWrapper>

      {/* 텍스트 영역 */}
      <S.InfoSection>
        <S.MemberName>{idol.name}</S.MemberName>
        <S.GroupName>{idol.group}</S.GroupName>
      </S.InfoSection>
    </S.CardContainer>
  );
};

export default IdolCard;
