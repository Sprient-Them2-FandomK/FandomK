import frame from "@/assets/Chart.png";
import { hexToRgba } from "@/utils/color";
import styled from "styled-components";

export const Wrap = styled.section`
  width: 100%;
  padding: 80px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (width <= 1199px) {
    padding: 0 24px;
  }
`;

export const ChartHeader = styled.div`
  width: 100%;
  max-width: 1200px;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;

  @media (width <= 744px) {
    margin-bottom: 16px;
  }
`;

export const H2 = styled.h2`
  margin: 0;
  font-size: 24px;
  font-weight: 700;

  @media (width <= 744px) {
    font-size: 20px;
  }
`;

export const RightArea = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ChartImg = styled.div`
  width: 24px;
  height: 24px;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${frame});
`;

export const ChartVote = styled.p`
  margin-left: 4px;
  font-size: 13px;
  font-weight: 700;
`;

export const Board = styled.div`
  width: 100%;
  max-width: 1200px;
`;

export const BoardHead = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 48px;
`;

export const HeadTab = styled.button`
  appearance: none;
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
  background: ${({ $active }) => ($active ? hexToRgba("#1b2029") : "")};
  color: ${({ $active }) => ($active ? "var(--color-white-100)" : hexToRgba("#828282"))};
  border-bottom: ${({ $active }) => ($active ? `2px solid var(--color-white-100)` : "none")};
  transition:
    background 0.2s ease,
    color 0.2s ease;

  &:focus-visible {
    outline: 2px solid ${hexToRgba("#3b82f6")};
    outline-offset: 0;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  @media (width <= 744px) {
    grid-template-columns: 1fr;
    gap: 0;
  }
`;

export const Col = styled.div`
  @media (width >= 744px) {
    font-size: 16px;
    padding: 24px 0 0;
  }

  &:last-child {
    border-bottom: none; /* 마지막만 제거 */
  }

  padding: 0;
  font-size: 24px;
`;

export const MoreArea = styled.div`
  width: 100%;
  max-width: 524px;
  margin: 25px auto 0;
`;

export const MoreBtn = styled.button`
  width: 100%;
  height: 46px;
  background: ${hexToRgba("#222734")};
  color: ${hexToRgba("#fff")};
  border: 1px solid rgb(241 238 249 / 80%);
  border-radius: 3px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;
