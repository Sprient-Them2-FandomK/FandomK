import { getDonationList } from "@/api/donationsClinet";
import ArrowSvg from "@/assets/svg/ArrowSvg";
import useModal from "@/hooks/useModal";
import { useEffect, useState } from "react";
import DonationModal from "./DonationModal";
import * as S from "./DonationSection.style";
import FundingCard from "./FundingCard";

const DonationSection = () => {
  const [list, setList] = useState([]);
  const { isOpen, modalContent, setModalContent, onOpen, onClose } = useModal();

  useEffect(() => {
    getDonationList().then((res) => setList(res.list));
  }, []);

  // 후원 성공시 리스트 갱신
  const handleDonationSuccess = ({ donationId, amount }) => {
    setList((prevList) =>
      prevList.map((item) =>
        item.id === donationId
          ? {
              ...item,
              receivedDonations: item.receivedDonations + amount,
            }
          : item
      )
    );
  };

  return (
    <>
      <S.Contaier>
        <S.DonationTitle>후원을 기다리는 조공</S.DonationTitle>
        <S.SlideWrapper>
          <S.SlideArrow $direction="left">
            <ArrowSvg />
          </S.SlideArrow>
          <S.FundingCardWrapper>
            {list.map((item) => (
              <FundingCard onClick={{ onOpen, setModalContent }} item={item} key={item.id} />
            ))}
          </S.FundingCardWrapper>
          <S.SlideArrow $direction="right">
            <ArrowSvg />
          </S.SlideArrow>
        </S.SlideWrapper>
      </S.Contaier>
      <DonationModal
        onSuccess={handleDonationSuccess}
        content={modalContent}
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
};

export default DonationSection;
