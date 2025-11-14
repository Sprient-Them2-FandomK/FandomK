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
  border: 1px solid ${({ selected }) => (selected ? "var(--orange-F96D69)" : "var(--white-F7F7F8)")};
  display: flex;
  padding: 18px 20px;
  align-items: center;
  border-radius: 8px;
  cursor: pointer;

  & > div {
    flex: 1;
    font-size: 20px;
    font-weight: 700;
    color: var(--white-FFFFFF);
  }
`;

export const RechargeButton = styled.button`
  width: 295px;
  height: 42px;
  background: linear-gradient(to right, var(--orange-F96D69), var(--pink-FE5493));
  color: var(--white-FFFFFF);
  font-size: 14px;
  font-weight: 700;
  margin-top: 24px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
