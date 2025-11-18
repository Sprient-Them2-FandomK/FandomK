import creditImg from "@/assets/imgs/credit.png";
import HighlightButton from "@/components/common/HighlightButton";
import { media } from "@/styles/media";
import { getRemainingDays } from "@/utils/date";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { css } from "styled-components";
import * as S from "./FundingCard.style";

const CustomizedTooltip = ({ targetDonation, receivedDonations }) => {
  return (
    <S.ToolTipContainer>
      {receivedDonations} / {targetDonation}
    </S.ToolTipContainer>
  );
};

const FundingCard = ({ item, onClick }) => {
  const deadline = getRemainingDays(item.deadline);

  return (
    <S.FundingCard>
      <S.ImgWrapper>
        <img src={item.idol.profilePicture} alt={item.idol.name} />
        <HighlightButton
          $customStyle={css`
            position: absolute;
            bottom: 8px;
            left: 8px;
            z-index: 1;
            width: 142px;
            height: 32px;
            font-size: 1.3rem;

            @media ${media.tablet} {
              bottom: 20px;
              left: 24px;
              width: 234px;
              height: 40px;
            }
          `}
          onClick={() => {
            onClick.onOpen();
            onClick.setModalContent(item);
          }}
        >
          후원하기
        </HighlightButton>
      </S.ImgWrapper>
      <S.TitleWrapper>
        <S.SubTitle>{item.subtitle}</S.SubTitle>
        <S.Title>{item.title}</S.Title>
      </S.TitleWrapper>
      <S.DirectionWrapper>
        <S.ReceivedDonations>
          <img src={creditImg} alt="크레딧" />
          {item.receivedDonations.toLocaleString()}
        </S.ReceivedDonations>
        <div> {deadline ? `${deadline}일 남음` : "기한 만료"}</div>
      </S.DirectionWrapper>
      <S.ChartWrapper>
        <ResponsiveContainer width="100%" height={3}>
          <BarChart
            margin={0}
            data={[
              {
                name: "Page A",
                pv: item.receivedDonations,
              },
            ]}
            layout="vertical"
          >
            <Tooltip
              content={
                <CustomizedTooltip
                  receivedDonations={item.receivedDonations}
                  targetDonation={item.targetDonation}
                />
              }
              position={{ y: -30 }}
              cursor={false}
            />
            <XAxis hide type="number" scale="linear" domain={[0, item.targetDonation]} />
            <YAxis hide type="category" />
            <Bar
              activeBar={true}
              barSize={2}
              radius={2}
              dataKey="pv"
              fill="var(--color-primary)"
              background={{ fill: "var(--color-white-100)", radius: 2 }}
            />
          </BarChart>
        </ResponsiveContainer>
      </S.ChartWrapper>
    </S.FundingCard>
  );
};

export default FundingCard;
