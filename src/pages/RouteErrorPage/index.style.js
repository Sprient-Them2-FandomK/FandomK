import { COLOR_VAR_MAP, hexToRgba } from "@/utils/color";
import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: calc(100vh - 80px);
  padding: 40px 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;
  gap: 20px;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: ${hexToRgba(COLOR_VAR_MAP["--color-white-100"])};
`;

export const Description = styled.p`
  font-size: 16px;
  color: ${hexToRgba(COLOR_VAR_MAP["--color-white-90"])};
  line-height: 1.6;
`;

export const ErrorBox = styled.pre`
  margin-top: 12px;
  background: rgb(0 0 0 / 40%);
  color: ${hexToRgba("#ff7b7b")};
  padding: 16px 20px;
  border-radius: 8px;
  font-size: 14px;
  white-space: pre-wrap;
  max-width: 420px;
  width: 100%;
`;

export const ButtonGroup = styled.div`
  margin-top: 16px;
  display: flex;
  gap: 12px;
  justify-content: center;
`;

export const RetryButton = styled.button`
  padding: 12px 20px;
  font-size: 15px;
  font-weight: 700;
  border-radius: 8px;
  border: none;
  cursor: pointer;

  background: ${hexToRgba(COLOR_VAR_MAP["--color-gray-500"])};
  color: ${hexToRgba(COLOR_VAR_MAP["--color-white-100"])};

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }
`;

export const HomeButton = styled.button`
  padding: 12px 20px;
  font-size: 15px;
  font-weight: 700;
  border-radius: 8px;
  border: none;
  cursor: pointer;

  background: linear-gradient(
    to right,
    ${hexToRgba(COLOR_VAR_MAP["--color-primary"])},
    ${hexToRgba(COLOR_VAR_MAP["--color-secondary"])}
  );
  color: white;

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }
`;
