import ArrowSvg from "@/assets/svg/ArrowSvg";
import useDraggableSlider from "@/hooks/useDraggableSlider";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import * as S from "./DonationSlider.style";
import FundingCard from "./FundingCard";
import FundingCardSkeletonComponent from "./FundingCardSkeleton";

const DonationSlider = ({ list, onClick, handleReachEnd, cursor }) => {
  const drag = useDraggableSlider(cursor);

  // sentinelRef가 보이면 함수 호출
  const sentinelRef = useIntersectionObserver({
    rootRef: drag.viewportRef,
    enabled: drag.hasMore,
    onIntersect: () => {
      handleReachEnd();
    },
    threshold: 0.5,
  });

  return (
    <S.SlideWrapper>
      <S.SlideArrow
        disabled={!drag.hasPrev}
        onClick={drag.handlePrev}
        aria-label="이전 조공 보기"
        $direction="left"
      >
        <ArrowSvg />
      </S.SlideArrow>
      <S.FundingCardWrapper
        ref={drag.viewportRef}
        onMouseDown={drag.handleMouseDown}
        onTouchStart={drag.handleTouchStart}
        onTouchMove={drag.handleTouchMove}
        onTouchEnd={drag.handleTouchEnd}
      >
        <S.SlideTrack ref={drag.listRef}>
          {list.map((item) => (
            <FundingCard onClick={onClick} item={item} key={item.id} />
          ))}
          {cursor !== null && (
            <div ref={sentinelRef}>
              <FundingCardSkeletonComponent />
            </div>
          )}
        </S.SlideTrack>
      </S.FundingCardWrapper>
      <S.SlideArrow
        disabled={!drag.hasNext}
        onClick={drag.handleNext}
        aria-label="다음 조공 보기"
        $direction="right"
      >
        <ArrowSvg />
      </S.SlideArrow>
    </S.SlideWrapper>
  );
};

export default DonationSlider;
