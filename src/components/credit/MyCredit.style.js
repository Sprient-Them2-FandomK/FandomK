import { media } from "@/styles/media";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: auto;
  height: 131px;
  margin: 16px 24px 40px;
  padding: 0 20px;
  border: 1px solid #f1eef9cc;
  border-radius: 8px;
  justify-content: space-between;
  align-items: center;

  @media ${media.tablet} {
    margin: 0 24px 64px;
    padding: 0 64px;
  }

  @media ${media.desktop} {
    width: 1200px;
    margin: 50px auto;
    padding: 0 78px;
  }
`;

export const CreditContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const CreditTitle = styled.div`
  color: #fff9;
  font-weight: 400;
  font-size: 12px;

  @media ${media.tablet} {
    font-size: 16px;
  }
`;

export const CreditPoint = styled.div`
  display: flex;

  font-weight: 700;
  font-size: 20px;
  align-items: center;

  @media ${media.tablet} {
    font-size: 24px;
  }
`;

export const RechargeButton = styled.button`
  color: var(--color-primary);
  font-weight: 700;
  font-size: 13px;
  line-height: 26px;
  cursor: pointer;

  @media ${media.tablet} {
    font-size: 16px;
  }
`;
