import { media } from "@/styles/media";
import styled from "styled-components";

export const FundingCard = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImgWrapper = styled.div`
  position: relative;
  margin-bottom: 8px;
  border-radius: 8px;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 85%, rgba(0, 0, 0, 1) 100%);
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

export const DonationButton = styled.button`
  position: absolute;
  bottom: 8px;
  left: 8px;
  z-index: 1;
  width: 142px;
  height: 32px;
  border-radius: 4px;
  background: linear-gradient(to right, #f86f65, var(--pink-FE5493));
  font-size: 1.3rem;
  font-weight: 700;
  line-height: 2.6rem;

  @media ${media.tablet} {
    width: 234px;
    height: 40px;
    bottom: 20px;
    left: 24px;
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
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.8rem;
  color: #666666;

  @media ${media.tablet} {
    font-size: 1.6rem;
  }
`;

export const Title = styled.h4`
  color: var(--white-F7F7F8);
  font-size: 1.4rem;
  font-weight: 500;

  @media ${media.tablet} {
    font-size: 1.8rem;
  }
`;

export const ToolTipContainer = styled.div`
  padding: 4px 12px;
  border-radius: 4px;
  background-color: var(--black-181D26);
  font-size: 1.4rem;
`;

export const DirectionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.8rem;
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
  color: var(--orange-F96D69);

  img {
    width: 17px;
    height: 21px;
  }
`;
