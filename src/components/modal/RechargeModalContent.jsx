import styled from "styled-components";
import { useState } from "react";
import useCreditContext from "@/app/contexts/CreditContext";
import CreditSvg from "../svg/CreditSvg";
import RadioOnSvg from "../svg/RadioOnSvg";
import RadioOffSvg from "../svg/RadioOffSvg";
import CreditWhite from "../svg/CreditWhiteSvg";

const CREDITS = [100, 500, 1000];

const RechargeModalContent = ({ onClose }) => {
  const [selectedCredit, setSelectedCredit] = useState(CREDITS[0]);

  const actions = useCreditContext()[1];

  const onRechargeClick = () => {
    actions.addCredit(selectedCredit);
    onClose();
  };

  return (
    <Container>
      <CreditList>
        {CREDITS.map((it) => (
          <Credit
            key={it}
            credit={it}
            selected={it == selectedCredit}
            onClick={() => setSelectedCredit(it)}
          >
            <CreditSvg size="25px" />
            <div>{it}</div>
            {it == selectedCredit ? <RadioOnSvg /> : <RadioOffSvg />}
          </Credit>
        ))}
      </CreditList>
      <RechargeButton onClick={onRechargeClick}>
        <CreditWhite />
        <div>충전하기</div>
      </RechargeButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
`;

const CreditList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Credit = styled.div`
  border: 1px solid ${({ selected }) => (selected ? "var(--orange-F96D69)" : "var(--white-F7F7F8)")};
  display: flex;
  padding: 18px 20px;
  align-items: center;
  border-radius: 8px;
  cursor: pointer;

  & > div {
    flex: 1;
    font-size: 20px;
    font-weight: 700;
    color: var(--white-FFFFFF);
  }
`;

const RechargeButton = styled.button`
  width: 295px;
  height: 42px;
  background: linear-gradient(to right, var(--orange-F96D69), var(--pink-FE5493));
  color: var(--white-FFFFFF);
  font-size: 14px;
  font-weight: 700;
  margin-top: 24px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export default RechargeModalContent;
