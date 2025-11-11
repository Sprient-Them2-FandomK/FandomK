import styled from "styled-components";
import closePng from "../../assets/btn_delete_24px.png";
import backPng from "../../assets/icj_arrow_left2.png";

export const Container = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  display: grid;
  place-items: center;
  z-index: 999;

  @media (max-width: 524px) {
    background: rgba(2, 0, 14, 1);
    display: block;
  }
`;

export const Modal = styled.div`
  width: 100%;
  max-width: 524px;
  height: 693px;
  background: #181d26;
  padding: 24px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  color: #fff;
  border-radius: 16px;
  margin: 0 auto;

  @media (max-width: 524px) {
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
  width: 100%;
  height: 24px;
  padding-bottom: 34px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 524px) {
    display: none;
  }
`;

export const MobileHeader = styled.div`
  display: none;
  @media (max-width: 524px) {
    width: 100%;
    height: 44px;
    display: flex;
    justify-content: space-between;
  }
`;

export const Rbox = styled.div`
  display: none;

  @media (max-width: 524px) {
    display: block;
    width: 24px;
    height: 24px;
  }
`;

export const BackBtn = styled.button`
  background-image: url(${backPng});
  background-repeat: no-repeat;
  display: none;
  width: 24px;
  height: 24px;
  background-size: contain;
  @media (max-width: 524px) {
    display: block;
  }
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 500;
  margin: 0;

  @media (max-width: 524px) {
    font-size: 14px;
  }
`;

export const CloseBtn = styled.button`
  font-size: 24px;
  cursor: pointer;
  color: #fff;
  width: 24px;
  height: 24px;
  padding: 0;
  margin: 0;
  appearance: none;
  background: transparent url(${closePng}) no-repeat center / contain;
  border: 0;
`;

export const List = styled.div`
  flex: 1;
  width: 100%;
  min-height: 0;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 524px) {
    height: 100%;
  }
`;

export const Vote = styled.div`
  width: 100%;
  text-align: center;

  @media (max-width: 524px) {
    height: 106px;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background: transparent;
    pointer-events: none;
    z-index: 10;
  }
`;

export const TransparentOverlay = styled.div`
  @media (max-width: 524px) {
    height: 106px;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(2, 0, 14, 0.8);
    pointer-events: none;
    z-index: 9;
  }
`;

export const Votebtn = styled.button`
  width: 100%;
  height: 42px;
  font-size: 14px;
  cursor: pointer;
  background: linear-gradient(90deg, rgba(248, 111, 101, 1) 0%, rgba(254, 84, 147, 1) 100%);
  border: 0;
  border-radius: 10px;
  margin: 20px 0 12px;
  color: #fff;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};

  @media (max-width: 524px) {
    width: calc(100% - 32px);
    margin: 16px 0px;
    height: 44px;
    font-size: 15px;
    pointer-events: auto;
  }
`;

export const VoteNotice = styled.p`
  font-size: 12px;
  margin: 0;
`;
export const Credit = styled.span`
  color: rgba(249, 109, 105, 1);
`;
