import { getDonationList } from "@/api/donationsClinet";
import useModal from "@/hooks/useModal";
import { useCallback, useEffect, useState } from "react";
import { useErrorBoundary } from "react-error-boundary";
import DonationModal from "./DonationModal";
import * as S from "./DonationSection.style";
import DonationSlider from "./DonationSlider";

const PAGE_SIZE = 5;

const DonationSection = () => {
  const { showBoundary } = useErrorBoundary();
  const [list, setList] = useState([]);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [cursor, setCursor] = useState(undefined);
  const { isOpen, modalContent, setModalContent, onOpen, onClose } = useModal();

  // 최초 로딩
  useEffect(() => {
    const fetchInitial = async () => {
      try {
        const res = await getDonationList({ pageSize: PAGE_SIZE });
        setList(res.list);
        setCursor(res.nextCursor);
      } catch (e) {
        showBoundary(e);
      }
    };
    fetchInitial();
  }, [showBoundary]);

  const hasMore = cursor != null;
  // 마지막에서 다음 페이지 요청
  const handleReachEnd = useCallback(async () => {
    if (!hasMore || isLoadingMore) return;

    setIsLoadingMore(true);
    const res = await getDonationList({
      pageSize: PAGE_SIZE,
      cursor,
    });

    setList((prev) => [...prev, ...res.list]);
    setCursor(res.nextCursor);
    setIsLoadingMore(false);
  }, [cursor, hasMore, isLoadingMore, setCursor]);

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
        <DonationSlider
          list={list}
          cursor={cursor}
          handleReachEnd={handleReachEnd}
          onClick={{ onOpen, setModalContent }}
        />
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
