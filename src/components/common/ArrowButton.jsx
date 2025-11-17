import ArrowSvg from "@/assets/svg/ArrowSvg";
import * as S from "./ArrowButton.style";
const ArrowButton = ({ onClick, label, disabled, $customStyle, $direction = "left" }) => {
  return (
    <S.ArrowButtonWrapper
      $customStyle={$customStyle}
      disabled={disabled}
      onClick={onClick}
      aria-label={label}
      $direction={$direction}
    >
      <ArrowSvg />
    </S.ArrowButtonWrapper>
  );
};

export default ArrowButton;
