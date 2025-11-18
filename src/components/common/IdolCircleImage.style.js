import { COLOR_VAR_MAP, hexToRgba } from "@/utils/color";
import styled from "styled-components";

export const IMAGE_SIZES = {
  sm: 60,
  md: 86,
  lg: 115,
};

// wrapper 사이즈 (이미지 + 여백)
export const WRAPPER_SIZES = {
  sm: 70,
  md: 100,
  lg: 128,
};

export const IdolCircleImageBorder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ $size }) => WRAPPER_SIZES[$size]}px;
  aspect-ratio: 1 / 1;
  border: 1px solid ${hexToRgba(COLOR_VAR_MAP["--color-primary"])};
  border-radius: 999px;
`;

export const IdolCircleImageWrapper = styled.div`
  width: ${({ $size }) => IMAGE_SIZES[$size]}px;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  border-radius: 999px;
`;

export const IdolImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
