import { media } from "@/styles/media";
import { TYPO } from "@/styles/typography";
import { COLOR_VAR_MAP, hexToRgba } from "@/utils/color";
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
  ${TYPO.caption12Regular};

  @media ${media.tablet} {
    font-size: 1.6rem;
  }
`;

export const Title = styled.h4`
  color: ${hexToRgba(COLOR_VAR_MAP["--color-white-90"])};
  ${TYPO.body14Medium};

  @media ${media.tablet} {
    font-size: 1.8rem;
  }
`;

export const ToolTipContainer = styled.div`
  padding: 4px 12px;
  border-radius: 4px;

  background-color: ${hexToRgba(COLOR_VAR_MAP["--color-bg-base"])};

  font-size: 1.4rem;
`;

export const DirectionWrapper = styled.div`
  display: flex;
  margin-bottom: 8px;

  ${TYPO.caption12Regular};
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
