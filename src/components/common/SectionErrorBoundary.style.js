import { COLOR_VAR_MAP, hexToRgba } from "@/utils/color";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 24px;
  border-radius: 12px;
  background: ${hexToRgba(COLOR_VAR_MAP["--color-white-100"], 0.05)};
  border: 1px solid ${hexToRgba(COLOR_VAR_MAP["--color-white-100"], 0.1)};
  text-align: center;
  margin: 16px 0;
`;

export const Title = styled.h3`
  color: ${hexToRgba(COLOR_VAR_MAP["--color-white-100"])};
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 12px;
`;

export const Message = styled.p`
  color: ${hexToRgba(COLOR_VAR_MAP["--color-white-90"])};
  font-size: 16px;
  margin-bottom: 12px;
  line-height: 1.5;
`;

export const Description = styled.p`
  color: ${hexToRgba(COLOR_VAR_MAP["--color-white-90"])};
  font-size: 14px;
  margin-bottom: 20px;
  line-height: 1.6;
`;

export const RetryButton = styled.button`
  padding: 10px 18px;
  border-radius: 8px;
  color: ${hexToRgba(COLOR_VAR_MAP["--color-white-90"])};
  font-size: 14px;
  font-weight: 700;
  border: none;
  cursor: pointer;
  transition: 0.2s;
  background: linear-gradient(
    to right,
    ${hexToRgba(COLOR_VAR_MAP["--color-primary"])},
    ${hexToRgba(COLOR_VAR_MAP["--color-secondary"])}
  );

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }
`;
