import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
`;

export const CreditList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Credit = styled.div`
  display: flex;
  padding: 18px 20px;
  border: 1px solid
    ${({ selected }) => (selected ? "var(--color-primary)" : "var(--color-white-90)")};
  align-items: center;
  border-radius: 8px;
  cursor: pointer;

  & > div {
    color: var(--color-white-100);
    font-weight: 700;
    font-size: 20px;
    flex: 1;
  }
`;
