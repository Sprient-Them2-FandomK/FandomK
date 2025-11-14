import { useNavigate } from "react-router-dom";
import imgStartBg from "../assets/imgs/home_start_bg.png";
import imgSponsorBg from "../assets/imgs/home_sponsor_bg.png";
import imgSponsorPhone from "../assets/imgs/home_sponsor_phone.png";
import imgMonthlyBg from "../assets/imgs/home_monthly_bg.png";
import imgMonthyPhone from "../assets/imgs/home_monthly_phone.png";
import imgMyArtistBg from "../assets/imgs/home_my_artist_bg.png";
import imgMyArtistPhone from "../assets/imgs/home_my_artist_phone.png";
import imgLogo from "../assets/imgs/logo.svg";
import useCreditContext from "@/app/contexts/CreditContext";
import * as S from "./Homepage.style";

function Homepage() {
  const navigate = useNavigate();
  const [_, actions] = useCreditContext();

  const goListPage = () => {
    actions.resetCredit();
    navigate("/list");
  };

  return (
    <S.Container>
      <StartSection goListPage={goListPage} />
      <SponsorSection />
      <MonthlySection />
      <MyArtistSection />
      <S.VerticalLine />
    </S.Container>
  );
}

const StartSection = ({ goListPage }) => {
  return (
    <S.FirstSection>
      <S.FirstSectionBox>
        <S.Blind>팬덤 케이</S.Blind>
        <S.LogoContainer>
          <S.FirstSectionTitle>
            내가 좋아하는 아이돌을
            <br />
            가장 <span>쉽게 덕질</span> 하는 방법
          </S.FirstSectionTitle>
          <img src={imgLogo} alt="팬덤케이 로고" />
        </S.LogoContainer>
        <img src={imgStartBg} alt="지금 시작하기" />
        <S.StartButton onClick={goListPage}>지금 시작하기</S.StartButton>
      </S.FirstSectionBox>
    </S.FirstSection>
  );
};

const SponsorSection = () => {
  return (
    <S.Section>
      <S.SectionBox>
        <S.SectionBg alt="후원하기 배경" src={imgSponsorBg} />

        <S.SectionTitleContainer>
          <S.SectionTitle>후원하기</S.SectionTitle>
          <S.SectionInfo>
            좋아하는 아이돌에게
            <br />
            쉽게 조공해 보세요
          </S.SectionInfo>
        </S.SectionTitleContainer>

        <S.SectionImg1 alt="목록 페이지 모바일 뷰" src={imgSponsorPhone} />
      </S.SectionBox>
    </S.Section>
  );
};

const MonthlySection = () => {
  return (
    <S.Section>
      <S.SectionBox>
        <S.SectionBg alt="이달의 아티스트 배경" src={imgMonthlyBg} />

        <S.SectionTitleContainer>
          <S.SectionTitle>이달의 아티스트</S.SectionTitle>
          <S.SectionInfo>
            내 아티스트에게 1등의
            <br />
            영예를 선물하세요
          </S.SectionInfo>
        </S.SectionTitleContainer>

        <S.SectionImg1 alt="마이페이지 모바일 뷰" src={imgMonthyPhone} />
      </S.SectionBox>
    </S.Section>
  );
};

const MyArtistSection = () => {
  return (
    <S.Section>
      <S.SectionBox>
        <S.SectionBg alt="나만의 아티스트 배경" src={imgMyArtistBg} />

        <S.SectionTitleContainer>
          <S.SectionTitle>나만의 아티스트</S.SectionTitle>
          <S.SectionInfo>
            좋아하는 아티스트들의
            <br />
            소식을 모아보세요
          </S.SectionInfo>
        </S.SectionTitleContainer>

        <S.SectionImg1 alt="투표 모달창 모바일 뷰" src={imgMyArtistPhone} />
      </S.SectionBox>
    </S.Section>
  );
};

export default Homepage;
