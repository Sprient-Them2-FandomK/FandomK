import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  inset: 0;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  padding: 24px 16px 32px;

  background-color: var(--color-bg-base);
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
  color: var(--color-white-90);
  font-weight: 600;
  font-size: 18px;
`;
