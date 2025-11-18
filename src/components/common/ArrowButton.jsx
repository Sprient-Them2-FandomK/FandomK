import ArrowSvg from "@/assets/svg/ArrowSvg";
import * as S from "./ArrowButton.style";

const ArrowButton = ({
  onClick,
  label,
  disabled,
  $size = "md",
  $isLeft = true,
  $isTablet = true,
}) => {
  return (
    <S.ArrowButtonWrapper
      $size={$size}
      $isTablet={$isTablet}
      disabled={disabled}
      onClick={onClick}
      aria-label={label}
      $isLeft={$isLeft}
    >
      <ArrowSvg />
    </S.ArrowButtonWrapper>
  );
};

export default ArrowButton;
