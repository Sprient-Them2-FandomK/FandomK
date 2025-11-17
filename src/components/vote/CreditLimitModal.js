import styled from "styled-components";
import credit_icon from "../../assets/credit_113px.png";
import closePng from "../../assets/btn_delete_24px.png";
export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ModalBox = styled.div`
  width: 339px;
  height: 330px;
  background: rgba(24, 29, 38, 1);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const Icon = styled.div`
  width: 133px;
  height: 113px;
  background-image: url(${credit_icon});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin: 56px 24px 0px;
`;

export const Message = styled.p`
  color: #ffffff;
  font-size: 16px;
  line-height: 1.5;
  margin-top: 31px;

  span {
    color: #ff7777;
    font-weight: 600;
  }
`;

export const ConfirmButton = styled.button`
  width: 295px;
  height: 42px;
  border-radius: 3px;
  border: none;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  margin-top: 31px;

  background: linear-gradient(90deg, #f86f65 0%, #fe5493 100%);
  color: #ffffff;
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
