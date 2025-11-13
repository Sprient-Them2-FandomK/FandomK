import credit from "@/assets/imgs/credit.png";
import { getRemainingDays } from "@/utils/date";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import * as S from "./FundingCard.style";

const CustomizedTooltip = ({ targetDonation, receivedDonations }) => {
  return (
    <S.ToolTipContainer>
      {receivedDonations} / {targetDonation}
    </S.ToolTipContainer>
  );
};

const FundingCard = ({ item }) => {
  const deadline = getRemainingDays(item.deadline);

  return (
    <S.FundingCard>
      <S.ImgWrapper>
        <img src={item.idol.profilePicture} alt={item.idol.name} />
        <S.DonationButton>후원하기</S.DonationButton>
      </S.ImgWrapper>
      <S.TitleWrapper>
        <S.SubTitle>{item.subtitle}</S.SubTitle>
        <S.Title>{item.title}</S.Title>
      </S.TitleWrapper>
      <S.DirectionWrapper>
        <S.ReceivedDonations>
          <img src={credit} alt="크레딧" />
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
              fill="#F96D69"
              background={{ fill: "var(--white-FFFFFF)", radius: 2 }}
            />
          </BarChart>
        </ResponsiveContainer>
      </S.ChartWrapper>
    </S.FundingCard>
  );
};

export default FundingCard;
