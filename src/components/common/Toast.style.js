import styled from "styled-components";

export const ToastContainer = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  max-width: 200px;
  padding: 15px;
  background-color: #ffffffcc;
  border-radius: 8px;
  pointer-events: none;
  z-index: 2000;
  transition: all 0.5s;
  opacity: ${({ isToasting }) => (isToasting ? 1 : 0.1)};
  transform: translateY(${({ isToasting }) => (isToasting ? 0 : 100)}%);
`;

export const ToastTitle = styled.h2`
  color: black;
  font-size: 12px;
  font-weight: 600;
`;

export const ToastMessage = styled.p`
  color: #333;
  font-size: 14px;
  font-weight: 500;
`;
