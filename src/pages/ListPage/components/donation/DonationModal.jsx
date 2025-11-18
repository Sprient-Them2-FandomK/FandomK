import { contributeDonation } from "@/api/donationsClinet";
import useCreditContext from "@/app/contexts/CreditContext";
import { isPositiveInteger } from "@/utils/number";
import { useState } from "react";
import DonationModalUi from "./DonationModalUi";

const DonationModal = ({ onSuccess, isOpen, onClose, content }) => {
  const [donationCredit, setDonationCredit] = useState("");
  const [isLoading, setIsLoading] = useState(false); // 데이터 요청 로딩 상태
  const [, { isEnoughCredit, subtractCredit }] = useCreditContext();

  const isNotEnough = !isEnoughCredit(donationCredit);

  const handleSetCredit = (e) => {
    const inputValue = e.target.value;

    // 숫자 or 빈 문자열만 허용
    if (inputValue === "" || isPositiveInteger(inputValue)) {
      setDonationCredit(inputValue);
    }
  };

  const resetState = () => {
    setDonationCredit("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // 새로고침 방지
    const amount = Number(donationCredit);
    try {
      setIsLoading(true); // 로딩 시작
      // 서버에 기부 요청
      await contributeDonation(content.id, { amount });
      subtractCredit(amount);
      onClose();
      resetState();
      onSuccess({
        donationId: content.id,
        amount,
      });
    } catch (error) {
      console.error("후원 실패:", error);
    } finally {
      setIsLoading(false); // 로딩 종료
    }
  };

  const handleClose = () => {
    resetState();
    onClose();
  };

  // 내용이 없으면 리턴
  if (!content) return null;

  return (
    <DonationModalUi
      isOpen={isOpen}
      onClose={handleClose}
      content={content}
      donationCredit={donationCredit}
      isNotEnough={isNotEnough}
      onChangeCredit={handleSetCredit}
      isLoading={isLoading}
      onSubmit={handleSubmit}
    />
  );
};

export default DonationModal;
