import useCreditContext from "@/app/contexts/CreditContext";
import { useState } from "react";
import CreditSvg from "../../../../assets/svg/CreditSvg";
import Modal from "../../../../components/common/Modal";
import * as S from "./MyCredit.style";
import RechargeModalContent from "./RechargeModalContent";

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
