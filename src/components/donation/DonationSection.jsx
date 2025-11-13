import { getDonationList } from "@/api/donationsClinet";
import { useEffect, useState } from "react";
import ArrowSvg from "../../assets/svg/ArrowSvg";
import * as S from "./DonationSection.style";
import FundingCard from "./FundingCard";

const DonationSection = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    getDonationList().then((res) => setList(res.list));
  }, []);

  return (
    <S.Contaier>
      <S.DonationTitle>후원을 기다리는 조공</S.DonationTitle>
      <S.SlideWrapper>
        <S.SlideArrow $direction="left">
          <ArrowSvg />
        </S.SlideArrow>
        <S.FundingCardWrapper>
          {list.map((item) => (
            <FundingCard item={item} key={item.id} />
          ))}
        </S.FundingCardWrapper>
        <S.SlideArrow $direction="right">
          <ArrowSvg />
        </S.SlideArrow>
      </S.SlideWrapper>
    </S.Contaier>
  );
};

export default DonationSection;
