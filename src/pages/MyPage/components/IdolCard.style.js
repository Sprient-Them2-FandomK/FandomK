import { TYPO } from "@/styles/typography";
import { COLOR_VAR_MAP, hexToRgba } from "@/utils/color";
import styled from "styled-components";

// 카드 전체 컨테이너
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  cursor: ${({ $clickable }) => ($clickable ? "pointer" : "default")};

  &:hover {
    opacity: ${({ $clickable }) => ($clickable ? "0.9" : "1")};
  }
`;

// 이미지 wrapper (외곽 border)
export const ImageWrapper = styled.div`
  display: flex;
  position: relative;
  aspect-ratio: 1;
  border-radius: 50%;
  justify-content: center;
  align-items: center;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: linear-gradient(180deg, var(--color-primary) 0%, ${hexToRgba("#fe578f")} 100%);
    opacity: ${({ $selected }) => ($selected ? "0.3" : "0")};
    pointer-events: none;
    transition: opacity 0.2s ease;
  }
`;

// 삭제 버튼
export const DeleteButton = styled.button`
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  width: 31px;
  height: 31px;
  padding: 0;
  border: 3px solid ${hexToRgba("#02000e")};

  background-color: ${hexToRgba(COLOR_VAR_MAP["--color-white-100"])};
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

// 체크 아이콘
export const CheckIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

// 텍스트 정보 섹션
export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
`;

// 멤버 이름
export const MemberName = styled.div`
  color: ${hexToRgba(COLOR_VAR_MAP["--color-white-100"])};
  ${TYPO.body16Bold};
`;

// 그룹 이름
export const GroupName = styled.div`
  padding: 0 12px;

  color: ${hexToRgba("#FFFFFF99")};
  ${TYPO.body14Medium};
`;
