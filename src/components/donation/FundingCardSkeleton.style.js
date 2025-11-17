import { media } from "@/styles/media";
import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: 200px 0;
  }
`;

const SkeletonBase = styled.div`
  background: linear-gradient(90deg, #2a2a2a 0px, #3a3a3a 40px, #2a2a2a 80px);
  background-size: 200px 100%;
  animation: ${shimmer} 1.4s ease-in-out infinite;
  border-radius: 4px;
`;

export const FundingCardSkeleton = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImgSkeleton = styled(SkeletonBase)`
  margin-bottom: 8px;
  border-radius: 8px;
  overflow: hidden;
  width: 158px;
  height: 206px;
  border-radius: 8px;

  @media ${media.tablet} {
    margin-bottom: 12px;
    width: 282px;
    height: 294px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 20px;

  @media ${media.tablet} {
    margin-bottom: 24px;
    gap: 6px;
  }
`;

export const SubTitleSkeleton = styled(SkeletonBase)`
  width: 80px;
  height: 14px;

  @media ${media.tablet} {
    width: 110px;
    height: 16px;
  }
`;

export const TitleSkeleton = styled(SkeletonBase)`
  width: 140px;
  height: 18px;

  @media ${media.tablet} {
    width: 180px;
    height: 20px;
  }
`;

export const DirectionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.8rem;
`;

export const ToolTipSkeleton = styled(SkeletonBase)`
  width: 100px;
  height: 20px;
`;

export const ReceivedDonationsBarSkeleton = styled(SkeletonBase)`
  width: 60px;
  height: 14px;
`;

export const ChartBarSkeleton = styled(SkeletonBase)`
  width: 100%;
  height: 4px;
  border-radius: 4px;
`;
