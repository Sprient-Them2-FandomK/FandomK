import styled from "styled-components";

export const Container = styled.div`
  width: 1200px;
  height: 131px;
  border: 1px solid #f1eef9cc;
  border-radius: 8px;
  margin: 50px auto;
  padding: 0px 78px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1199px) {
    margin: 0px 24px 64px;
    width: auto;
    padding: 0px 64px;
  }

  @media (max-width: 767px) {
    margin: 16px 24px 40px;
    padding: 0px 20px;
  }
`;

export const CreditContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const CreditTitle = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #ffffff99;

  @media (max-width: 767px) {
    font-size: 12px;
  }
`;

export const CreditPoint = styled.div`
  font-size: 24px;
  font-weight: 700;
  display: flex;
  align-items: center;

  @media (max-width: 767px) {
    font-size: 20px;
  }
`;

export const RechargeButton = styled.button`
  font-size: 16px;
  font-weight: 700;
  line-height: 26px;
  color: var(--orange-F96D69);
  cursor: pointer;

  @media (max-width: 767px) {
    font-size: 13px;
  }
`;
