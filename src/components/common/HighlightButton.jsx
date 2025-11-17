import * as S from "./HighlightButton.style";

const HighlightButton = ({ children, disabled, onClick, $customStyle, type }) => {
  return (
    <S.Button $customStyle={$customStyle} onClick={onClick} disabled={disabled} type={type}>
      {children}
    </S.Button>
  );
};

export default HighlightButton;
