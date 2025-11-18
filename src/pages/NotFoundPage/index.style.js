import { COLOR_VAR_MAP, hexToRgba } from "@/utils/color";
import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  min-height: calc(100vh - 80px);
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 72px;
  font-weight: 800;
  color: ${hexToRgba(COLOR_VAR_MAP["--color-white-100"])};
  margin: 0;
`;

export const Subtitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: ${hexToRgba(COLOR_VAR_MAP["--color-white-90"])};
`;

export const Description = styled.p`
  font-size: 16px;
  color: ${hexToRgba(COLOR_VAR_MAP["--color-white-90"])};
  line-height: 1.6;
  margin-bottom: 20px;
`;

export const HomeButton = styled.button`
  padding: 12px 20px;
  border-radius: 8px;
  color: white;
  font-size: 16px;
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
    transform: translateY(-2px);
    opacity: 0.9;
  }
`;
