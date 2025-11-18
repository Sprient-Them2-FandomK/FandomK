import { TYPO } from "@/styles/typography";
import { COLOR_VAR_MAP, hexToRgba } from "@/utils/color";
import styled from "styled-components";

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid ${hexToRgba("#E1E1E11A")};
  cursor: ${({ $variant }) => ($variant === "vote" ? "pointer" : "default")};
  transition: ${({ $variant }) => ($variant === "vote" ? "background 0.2s ease" : "none")};
  padding: 8px 0;

  &:last-child {
    border: none;
  }
`;

export const Rank = styled.span`
  width: 18px;

  color: ${hexToRgba(COLOR_VAR_MAP["--color-primary"])};
  ${TYPO.body14Medium}
  text-align: right;
  opacity: 0.9;
`;

export const TextGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  min-width: 0;
`;

export const Name = styled.p`
  overflow: hidden;
  margin: 0;

  font-weight: 500;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const ListVotes = styled.p`
  margin: 0 0 0 auto;

  color: ${hexToRgba("#aaa")};
  ${TYPO.body14Medium}
`;

export const RadioVisual = styled.span`
  display: ${({ $variant }) => ($variant === "chart" ? "none" : "flex")};

  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 2px solid
    ${({ $selected }) =>
      $selected ? ` ${hexToRgba(COLOR_VAR_MAP["--color-primary"])}` : hexToRgba("#666")};
  align-items: center;
  justify-content: center;

  &::after {
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${({ $selected }) =>
      $selected ? ` ${hexToRgba(COLOR_VAR_MAP["--color-primary"])}` : hexToRgba("#666")};
    transition: background 0.2s ease;
  }
`;
