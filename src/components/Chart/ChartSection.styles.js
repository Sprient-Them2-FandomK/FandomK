import styled from "styled-components";
import frame from "../../assets/Chart.png";

export const Wrap = styled.section`
  width: 100%;
  padding: 80px 0px 0px;
  background: #000;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1199px) {
    padding: 0px 24px;
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

  @media (max-width: 744px) {
    margin-bottom: 16px;
  }
`;

export const H2 = styled.h2`
  margin: 0;
  font-size: 24px;
  font-weight: 700;
  @media (max-width: 744px) {
    font-size: 20px;
  }
`;

export const RightArea = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const VoteCta = styled.button`
  display: flex;
  width: 128px;
  height: 32px;
  border: 0;
  line-height: 32px;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  cursor: pointer;
  background: linear-gradient(90deg, rgba(248, 111, 101, 1) 0%, rgba(254, 84, 147, 1) 100%);
  white-space: nowrap;
  &:hover {
    opacity: 0.9;
  }
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
  background: #000;
`;

export const BoardHead = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 48px;
  background: #1b2029;
`;

export const HeadTab = styled.button`
  appearance: none;
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
  background: ${({ $active }) => ($active ? "rgba(255, 255, 255, 0.1)" : "#000")};
  color: ${({ $active }) => ($active ? "#fff" : "#828282")};
  border-bottom: ${({ $active }) =>
    $active ? "2px solid rgba(255, 255, 255, 1)" : "0.5px solid transparent"};
  transition:
    background 0.2s ease,
    color 0.2s ease;

  &:focus-visible {
    outline: 2px solid #3b82f6;
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
  background: #000;
  border-top: 1px solid rgba(225, 225, 225, 0.08);

  @media (max-width: 744px) {
    grid-template-columns: 1fr;
    gap: 0;
  }
`;

export const Col = styled.div`
  background: #000;
  @media (min-width: 744px) {
    font-size: 16px;
    padding: 24px 0 0;
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
  background: #222734;
  color: #fff;
  border: 1px solid rgba(241, 238, 249, 0.8);
  border-radius: 3px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;
