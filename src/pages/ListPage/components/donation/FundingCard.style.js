import { media } from "@/styles/media";
import { hexToRgba } from "@/utils/color";
import styled from "styled-components";

export const FundingCard = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImgWrapper = styled.div`
  overflow: hidden;
  position: relative;
  margin-bottom: 8px;
  border-radius: 8px;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      ${hexToRgba("#00000000")} 85%,
      ${hexToRgba("#000000FF")} 100%
    );
    pointer-events: none; /* 버튼 클릭 방해 안 하도록 */
  }

  img {
    width: 158px;
    height: 206px;
    object-fit: cover;
  }

  @media ${media.tablet} {
    img {
      width: 282px;
      height: 294px;
    }

    margin-bottom: 12px;
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

export const SubTitle = styled.h4`
  color: ${hexToRgba("#666")};
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.8rem;

  @media ${media.tablet} {
    font-size: 1.6rem;
  }
`;

export const Title = styled.h4`
  color: var(--color-white-90);
  font-weight: 500;
  font-size: 1.4rem;

  @media ${media.tablet} {
    font-size: 1.8rem;
  }
`;

export const ToolTipContainer = styled.div`
  padding: 4px 12px;
  border-radius: 4px;

  background-color: var(--color-bg-base);

  font-size: 1.4rem;
`;

export const DirectionWrapper = styled.div`
  display: flex;
  margin-bottom: 8px;

  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.8rem;
  justify-content: space-between;
`;

export const ChartWrapper = styled.div`
  width: 158px;

  .recharts-wrapper *:focus:not(:focus-visible) {
    outline: none;
  }

  @media ${media.tablet} {
    width: 282px;
  }
`;

export const ReceivedDonations = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;

  color: var(--color-primary);

  img {
    width: 17px;
    height: 21px;
  }
`;
