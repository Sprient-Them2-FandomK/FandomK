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
  font-weight: 600;
  font-size: 12px;
`;

export const ToastMessage = styled.p`
  color: ${hexToRgba("#333")};
  font-weight: 500;
  font-size: 14px;
`;
