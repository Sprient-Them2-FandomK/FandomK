import { createPortal } from "react-dom";
import * as S from "./Modal.style";
import CloseButtonSvg from "@/assets/svg/CloseButtonSvg";

const Modal = ({ title, isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return createPortal(
    <S.Container onClick={() => onClose()}>
      <S.ModalContainer onClick={(e) => e.stopPropagation()}>
        <S.TitleBar>
          <S.ModalTitle>{title}</S.ModalTitle>
          <CloseButtonSvg onClick={() => onClose()} />
        </S.TitleBar>
        {children}
      </S.ModalContainer>
    </S.Container>,
    document.getElementById("modal-root")
  );
};

export default Modal;
