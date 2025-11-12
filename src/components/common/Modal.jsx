import { createPortal } from "react-dom";
import styled from "styled-components";
import CloseButtonSvg from "../svg/CloseButtonSvg";

const Modal = ({ title, isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return createPortal(
    <Container onClick={() => onClose()}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <TitleBar>
          <ModalTitle>{title}</ModalTitle>
          <CloseButtonSvg onClick={() => onClose()} />
        </TitleBar>
        {children}
      </ModalContainer>
    </Container>,
    document.getElementById("modal-root")
  );
};

const Container = styled.div`
  position: absolute;
  inset: 0;
  background-color: #000000cc;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalContainer = styled.div`
  background-color: var(--black-181D26);
  padding: 24px 16px 32px;
  border-radius: 8px;
`;

const TitleBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > svg {
    cursor: pointer;
  }
`;

const ModalTitle = styled.div`
  color: var(--white-F7F7F8);
  font-size: 18px;
  font-weight: 600;
`;

export default Modal;
