import closePng from "@/assets/btn_delete_24px.png";
import backPng from "@/assets/icj_arrow_left2.png";
import { COLOR_VAR_MAP, hexToRgba } from "@/utils/color";
import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  position: fixed;
  z-index: 999;
  inset: 0;
  background: ${hexToRgba("#000000B2")};
  place-items: center;

  @media (width <= 524px) {
    background: ${hexToRgba("#000000B2")};
    display: block;
  }
`;

export const Modal = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
  height: 693px;
  margin: 0 auto;
  padding: 24px;

  color: var(--color-white-100);
  max-width: 524px;
  background: var(--color-bg-base);
  flex-direction: column;
  border-radius: 16px;

  @media (width <= 524px) {
    position: fixed;
    inset: 0;
    width: 100vw;
    height: 100vh;
    max-width: none;
    border-radius: 0;
    padding: 16px;
  }
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  height: 24px;
  padding-bottom: 34px;
  justify-content: space-between;

  @media (width <= 524px) {
    display: none;
  }
`;

export const MobileHeader = styled.div`
  display: none;

  @media (width <= 524px) {
    display: flex;
    position: relative;
    width: 100%;
    height: 44px;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Rbox = styled.div`
  display: none;

  @media (width <= 524px) {
    display: block;
    width: 24px;
    height: 24px;
  }
`;

export const BackBtn = styled.button`
  display: none;
  width: 24px;
  height: 24px;
  background: url(${backPng}) no-repeat center / contain;
  border: 0;
  cursor: pointer;

  @media (width <= 524px) {
    display: block;
  }
`;

export const Title = styled.h2`
  margin: 0;

  font-weight: 500;
  font-size: 18px;

  @media (width <= 524px) {
    font-size: 14px;
  }
`;

export const CloseBtn = styled.button`
  width: 24px;
  height: 24px;
  background: transparent url(${closePng}) no-repeat center / contain;
  border: 0;
  cursor: pointer;
`;

export const List = styled.div`
  flex: 1;
  width: 100%;
  min-height: 0;
  overflow-y: auto;

  /* 스크롤바 숨김(필요 시 제거 가능) */
  scrollbar-width: none;
  -ms-overflow-style: none;

  &:-webkit-scrollbar {
    display: none;
  }

  @media (width <= 524px) {
    height: 100%;
  }
`;

export const Vote = styled.div`
  width: 100%;

  text-align: center;

  @media (width <= 524px) {
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 10;
    height: 106px;
    background: transparent;
    pointer-events: none;
  }
`;

export const TransparentOverlay = styled.div`
  display: none;

  @media (width <= 524px) {
    display: block;
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 9;
    height: 106px;
    background: ${hexToRgba("#000000B2")};
    pointer-events: none;
  }
`;

export const VoteNotice = styled.p`
  margin: 0;

  font-size: 12px;
`;

export const Credit = styled.span`
  color: ${hexToRgba(COLOR_VAR_MAP["--color-primary"])};
`;
