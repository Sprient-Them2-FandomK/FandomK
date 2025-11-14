import { getDonationList } from "@/api/donationsClinet";
import useModal from "@/hooks/useModal";
import { useEffect, useState } from "react";
import DonationModal from "./DonationModal";
import * as S from "./DonationSection.style";
import DonationSlider from "./DonationSlider";

const DonationSection = () => {
  const [list, setList] = useState([]);
  const { content, handleContent, isOpen, onClose, onOpen } = useModal();

  useEffect(() => {
    getDonationList({ pageSize: 10 }).then((res) => {
      setList(res.list);
      console.log(res);
    });
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
        <DonationSlider list={list} onClick={{ onOpen, handleContent }} />
      </S.Contaier>
      <DonationModal
        onSuccess={handleDonationSuccess}
        content={content}
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
};

export default DonationSection;
