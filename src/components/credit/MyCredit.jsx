import { useState } from "react";
import useCreditContext from "@/app/contexts/CreditContext";
import CreditSvg from "../../assets/svg/CreditSvg";
import Modal from "../common/Modal";
import RechargeModalContent from "../modal/RechargeModalContent";
import * as S from "./MyCredit.style";

const MyCredit = () => {
  const [showRechargeModal, setShowRechargeModal] = useState(false);
  const [credit] = useCreditContext();

  return (
    <>
      <S.Container>
        <S.CreditContainer>
          <S.CreditTitle>내 크레딧</S.CreditTitle>
          <S.CreditPoint>
            <CreditSvg />
            <div>{credit.toLocaleString()}</div>
          </S.CreditPoint>
        </S.CreditContainer>

        <S.RechargeButton onClick={() => setShowRechargeModal(true)}>충전하기</S.RechargeButton>
      </S.Container>

      <Modal
        title="크레딧 충전하기"
        isOpen={showRechargeModal}
        onClose={() => setShowRechargeModal(false)}
      >
        <RechargeModalContent onClose={() => setShowRechargeModal(false)} />
      </Modal>
    </>
  );
};

export default MyCredit;
