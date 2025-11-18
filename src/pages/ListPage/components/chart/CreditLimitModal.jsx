import HighlightButton from "@/components/common/HighlightButton";
import { css } from "styled-components";
import * as S from "./CreditLimitModal.style";

const CreditLimitModal = ({ onClose }) => {
  return (
    <S.Overlay>
      <S.ModalBox>
        <S.CloseBtn onClick={onClose} />
        <S.Icon />
        <S.Message>
          앗! 투표하기 위한 <span>크레딧</span>이 부족해요.
        </S.Message>
        <HighlightButton
          onClick={onClose}
          $customStyle={css`
            width: 295px;
            height: 42px;
            margin-top: 31px;
          `}
          type="button"
        >
          확인
        </HighlightButton>
      </S.ModalBox>
    </S.Overlay>
  );
};

export default CreditLimitModal;
