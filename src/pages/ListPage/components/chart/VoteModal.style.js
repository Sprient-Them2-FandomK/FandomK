import closePng from "@/assets/btn_delete_24px.png";
import backPng from "@/assets/icj_arrow_left2.png";
import { media } from "@/styles/media";
import { COLOR_VAR_MAP, hexToRgba } from "@/utils/color";
import styled from "styled-components";

export const Container = styled.div`
  display: block;
  z-index: 999;
  background: ${hexToRgba("#000000B2")};
  inset: 0;

  @media (${media.tablet}) {
    position: fixed;
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
  }
`;

export const Modal = styled.div`
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  max-width: none;
  border-radius: 0;
  padding: 16px;
  background: var(--color-bg-base);

  @media (${media.tablet}) {
    position: static;
    display: flex;
    overflow: hidden;
    width: 100%;
    height: 693px;
    margin: 0 auto;
    padding: 24px;

    color: var(--color-white-100);
    max-width: 524px;
    flex-direction: column;
    border-radius: 16px;
  }
`;

export const Header = styled.div`
  display: none;

  @media (${media.tablet}) {
    display: flex;
    width: 100%;
    height: 24px;
    padding-bottom: 34px;
    justify-content: space-between;
  }
`;

export const MobileHeader = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 44px;
  justify-content: space-between;
  align-items: center;

  @media (${media.tablet}) {
    display: none;
  }
`;

export const Rbox = styled.div`
  display: block;
  width: 24px;
  height: 24px;

  @media (${media.tablet}) {
    display: none;
  }
`;

export const BackBtn = styled.button`
  display: block;
  width: 24px;
  height: 24px;
  background: url(${backPng}) no-repeat center / contain;
  border: 0;
  cursor: pointer;

  @media (${media.tablet}) {
    display: none;
  }
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 14px;

  @media (${media.tablet}) {
    font-weight: 500;
    font-size: 18px;
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
  height: 100%;

  @media (${media.tablet}) {
    flex: 1;
    min-height: 0;
    overflow-y: auto;

    /* 스크롤바 숨김(필요 시 제거 가능) */
    scrollbar-width: none;
    -ms-overflow-style: none;

    &:-webkit-scrollbar {
      display: none;
    }
  }
`;

export const Vote = styled.div`
  margin: 0 auto;

  position: fixed;
  bottom: 0;
  z-index: 10;
  height: 106px;
  background: transparent;
  width: 100%;

  @media (${media.tablet}) {
    position: static;
    text-align: center;
  }
`;

export const VoteNotice = styled.p`
  margin: 0;

  font-size: 12px;
`;

export const Credit = styled.span`
  color: ${hexToRgba(COLOR_VAR_MAP["--color-primary"])};
`;
