import styled from "styled-components";
import creditImg from "../assets/imgs/credit.png";
import { creditStorage } from "@/storage/credit.storage";
import { useState } from "react";

export const MyCredit = () => {
  const [, setShowRechargeModal] = useState(false);

  return (
    <Container>
      <CreditContainer>
        <CreditTitle>내 크레딧</CreditTitle>
        <CreditPoint>
          <img src={creditImg} alt="크레딧" />
          <div>{creditStorage.get().toLocaleString()}</div>
        </CreditPoint>
      </CreditContainer>

      <RechargeButton onClick={() => setShowRechargeModal(true)}>충전하기</RechargeButton>
    </Container>
  );
};

const Container = styled.div`
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

const CreditContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const CreditTitle = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #ffffff99;

  @media (max-width: 767px) {
    font-size: 12px;
  }
`;

const CreditPoint = styled.div`
  font-size: 24px;
  font-weight: 700;
  display: flex;
  align-items: center;

  & > img {
    width: 25px;
    height: 25px;
    object-fit: cover;
  }

  @media (max-width: 767px) {
    font-size: 20px;
  }
`;

const RechargeButton = styled.button`
  font-size: 16px;
  font-weight: 700;
  line-height: 26px;
  color: var(--orange-F96D69);
  cursor: pointer;

  @media (max-width: 767px) {
    font-size: 13px;
  }
`;
