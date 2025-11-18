import { TYPO } from "@/styles/typography";
import { COLOR_VAR_MAP, hexToRgba } from "@/utils/color";
import styled from "styled-components";

export const Button = styled.button`
  ${TYPO.body14Bold}
  border-radius: 4px;
  background: linear-gradient(
    to right,
    ${hexToRgba(COLOR_VAR_MAP["--color-primary"])},
    ${hexToRgba(COLOR_VAR_MAP["--color-secondary"])}
  );
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    background: var(--color-gray-500);
  }

  ${({ $customStyle }) => $customStyle && $customStyle};
`;
