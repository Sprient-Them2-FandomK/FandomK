import { TYPO } from "@/styles/typography";
import { COLOR_VAR_MAP, hexToRgba } from "@/utils/color";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: fixed;
  inset: 0;
  justify-content: center;
  align-items: center;

  background-color: ${hexToRgba("#000c")};
`;

export const ModalContainer = styled.div`
  padding: 24px 16px 32px;

  background-color: var(--color-bg-base);
  border-radius: 8px;
`;

export const TitleBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > svg {
    cursor: pointer;
  }
`;

export const ModalTitle = styled.div`
  color: ${hexToRgba(COLOR_VAR_MAP["--color-white-90"])};
  ${TYPO.title18SemiBold}
`;
