import * as S from "./CreditLimitModal.js";

const CreditLimitModal = ({ onClose }) => {
  return (
    <S.Overlay>
      <S.ModalBox>
        <S.CloseBtn onClick={onClose} />
        <S.Icon />
        <S.Message>
          앗! 투표하기 위한 <span>크레딧</span>이 부족해요.
        </S.Message>
        <S.ConfirmButton type="button" onClick={onClose}>
          확인
        </S.ConfirmButton>
      </S.ModalBox>
    </S.Overlay>
  );
};

export default CreditLimitModal;
