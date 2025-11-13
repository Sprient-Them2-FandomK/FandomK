import { media } from "@/styles/media";
import styled from "styled-components";

export const Container = styled.div`
  width: auto;
  height: 131px;
  border: 1px solid #f1eef9cc;
  border-radius: 8px;
  margin: 16px 24px 40px;
  padding: 0px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${media.tablet} {
    margin: 0px 24px 64px;
    padding: 0px 64px;
  }

  @media ${media.desktop} {
    width: 1200px;
    margin: 50px auto;
    padding: 0px 78px;
  }
`;

export const CreditContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const CreditTitle = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: #ffffff99;

  @media ${media.tablet} {
    font-size: 16px;
  }
`;

export const CreditPoint = styled.div`
  font-size: 20px;
  font-weight: 700;
  display: flex;
  align-items: center;

  @media ${media.tablet} {
    font-size: 24px;
  }
`;

export const RechargeButton = styled.button`
  font-size: 13px;
  font-weight: 700;
  line-height: 26px;
  color: var(--orange-F96D69);
  cursor: pointer;

  @media ${media.tablet} {
    font-size: 16px;
  }
`;
