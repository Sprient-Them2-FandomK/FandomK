import { TYPO } from "@/styles/typography";
import { hexToRgba } from "@/utils/color";
import styled from "styled-components";

export const ToastContainer = styled.div`
  position: absolute;
  right: 20px;
  bottom: 20px;
  z-index: 2000;
  padding: 15px;

  background-color: ${hexToRgba("#fffc")};
  max-width: 200px;
  border-radius: 8px;
  pointer-events: none;
  transition: all 0.5s;
  opacity: ${({ isToasting }) => (isToasting ? 1 : 0.1)};
  transform: translateY(${({ isToasting }) => (isToasting ? 0 : 100)}%);
`;

export const ToastTitle = styled.h2`
  color: black;
  ${TYPO.caption12SemiBold}
`;

export const ToastMessage = styled.p`
  color: ${hexToRgba("#333")};
  ${TYPO.body14Medium}
`;
