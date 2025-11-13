import { useState } from "react";
import useCreditContext from "@/app/contexts/CreditContext";
import CreditSvg from "../../assets/svg/CreditSvg";
import RadioOnSvg from "../../assets/svg/RadioOnSvg";
import RadioOffSvg from "../../assets/svg/RadioOffSvg";
import CreditWhite from "../../assets/svg/CreditWhiteSvg";
import * as S from "./RechargeModalContent.style";

const CREDITS = [100, 500, 1000];

const RechargeModalContent = ({ onClose }) => {
  const [selectedCredit, setSelectedCredit] = useState(CREDITS[0]);

  const actions = useCreditContext()[1];

  const onRechargeClick = () => {
    actions.addCredit(selectedCredit);
    onClose();
  };

  return (
    <S.Container>
      <S.CreditList>
        {CREDITS.map((it) => (
          <S.Credit
            key={it}
            credit={it}
            selected={it == selectedCredit}
            onClick={() => setSelectedCredit(it)}
          >
            <CreditSvg size="25px" />
            <div>{it}</div>
            {it == selectedCredit ? <RadioOnSvg /> : <RadioOffSvg />}
          </S.Credit>
        ))}
      </S.CreditList>
      <S.RechargeButton onClick={onRechargeClick}>
        <CreditWhite />
        <div>충전하기</div>
      </S.RechargeButton>
    </S.Container>
  );
};

export default RechargeModalContent;
