import frame from "@/assets/Chart.png";
import { media } from "@/styles/media";
import { TYPO } from "@/styles/typography";
import { COLOR_VAR_MAP, hexToRgba } from "@/utils/color";
import styled from "styled-components";

export const Wrap = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 24px 80px;

  @media (${media.desktop}) {
    padding-bottom: 80px;
  }
`;

export const ChartHeader = styled.div`
  width: 100%;
  max-width: 1200px;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;

  @media (${media.tablet}) {
    margin-bottom: 24px;
  }
`;

export const H2 = styled.h2`
  margin: 0;
  font-size: 20px;

  @media (${media.tablet}) {
    ${TYPO.titleMd}
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
  ${TYPO.caption14Bold};
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
  ${TYPO.body14Medium};
  cursor: pointer;
  background: ${({ $active }) => ($active ? hexToRgba("#1b2029") : "")};
  color: ${({ $active }) =>
    $active ? `${hexToRgba(COLOR_VAR_MAP["--color-white-100"])}` : hexToRgba("#828282")};
  border-bottom: ${({ $active }) =>
    $active ? `2px solid  ${hexToRgba(COLOR_VAR_MAP["--color-white-100"])}` : "none"};
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
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  grid-template-columns: 1fr;
  gap: 0;

  @media (${media.tablet}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 24px;
  }
`;

export const Col = styled.div`
  padding: 0;
  font-size: 14px;

  @media (${media.tablet}) {
    padding: 24px 0 0;
    font-size: 16px;
  }
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
  border: 1px solid ${hexToRgba("#F1EEF9CC")};
  border-radius: 3px;
  cursor: pointer;
  ${TYPO.caption14Bold}
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;
