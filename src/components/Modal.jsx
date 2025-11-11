import { createPortal } from "react-dom";
import styled from "styled-components";
import closeImg from "../assets/imgs/btn_delete_24px.png";

export const Modal = ({ title, isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return createPortal(
    <Container>
      <ModalContainer>
        <TitleBar>
          <ModalTitle>{title}</ModalTitle>
          <ModalCloseButton src={closeImg} onClick={() => onClose()} />
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
`;

const ModalTitle = styled.div`
  color: var(--white-F7F7F8);
  font-size: 18px;
  font-weight: 600;
`;

const ModalCloseButton = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
