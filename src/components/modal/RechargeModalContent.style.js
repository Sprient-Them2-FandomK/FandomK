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
  border: 1px solid ${({ selected }) => (selected ? "var(--orange-F96D69)" : "var(--white-F7F7F8)")};
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

export const RechargeButton = styled.button`
  display: flex;
  width: 295px;
  height: 42px;
  margin-top: 24px;

  color: var(--color-white-100);
  font-weight: 700;
  font-size: 14px;
  background: linear-gradient(to right, var(--color-primary), var(--color-secondary));
  border-radius: 3px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
