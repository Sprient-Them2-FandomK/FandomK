import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  inset: 0;
  background-color: #000000cc;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ModalContainer = styled.div`
  background-color: var(--black-181D26);
  padding: 24px 16px 32px;
  border-radius: 8px;
`;

export const TitleBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > svg {
    cursor: pointer;
  }
`;

export const ModalTitle = styled.div`
  color: var(--white-F7F7F8);
  font-size: 18px;
  font-weight: 600;
`;
