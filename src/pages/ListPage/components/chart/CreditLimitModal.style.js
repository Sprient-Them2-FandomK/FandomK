import closePng from "@/assets/btn_delete_24px.png";
import credit_icon from "@/assets/credit_113px.png";
import { TYPO } from "@/styles/typography";
import { hexToRgba } from "@/utils/color";
import styled from "styled-components";

export const Overlay = styled.div`
  display: flex;
  position: fixed;
  z-index: 999;
  inset: 0;
  background: ${hexToRgba("#000000B2")};
  justify-content: center;
  align-items: center;
`;

export const ModalBox = styled.div`
  display: flex;
  position: relative;
  width: 339px;
  height: 330px;
  background: ${hexToRgba("#181D26FF")};
  border-radius: 12px;
  flex-direction: column;
  align-items: center;
`;

export const Icon = styled.div`
  width: 133px;
  height: 113px;
  background-image: url(${credit_icon});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin: 56px 24px 0;
`;

export const Message = styled.p`
  margin-top: 31px;

  color: var(--color-white-100);
  ${TYPO.body16Medium}

  span {
    color: ${hexToRgba("#f77")};
    font-weight: 600;
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 24px;
  right: 16px;
  width: 24px;
  height: 24px;
  border: none;
  background-image: url(${closePng});
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
`;
