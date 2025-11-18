import { media } from "@/styles/media";
import { TYPO } from "@/styles/typography";
import styled from "styled-components";

export const Contaier = styled.section`
  padding-left: 24px;
  margin-bottom: 40px;

  @media ${media.tablet} {
    margin-bottom: 60px;
  }

  @media ${media.desktop} {
    width: 1200px;
    margin: 0 auto;
    padding-left: 0;
    margin-bottom: 80px;
  }
`;

export const DonationTitle = styled.h2`
  margin-bottom: 16px;

  ${TYPO.title18SemiBold}

  @media ${media.tablet} {
    font-size: 2rem;
  }

  @media ${media.desktop} {
    font-size: 2.4rem;
  }
`;
