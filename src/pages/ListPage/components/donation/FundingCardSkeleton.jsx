import * as S from "./FundingCardSkeleton.style";

const FundingCardSkeletonComponent = () => {
  return (
    <S.FundingCardSkeleton>
      <S.ImgSkeleton />
      <S.TitleWrapper>
        <S.SubTitleSkeleton />
        <S.TitleSkeleton />
      </S.TitleWrapper>
      <S.DirectionWrapper>
        <S.ToolTipSkeleton />
        <S.ReceivedDonationsBarSkeleton />
      </S.DirectionWrapper>
      <S.ChartBarSkeleton />
    </S.FundingCardSkeleton>
  );
};

export default FundingCardSkeletonComponent;
