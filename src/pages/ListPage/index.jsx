import ChartSection from "./components/chart/ChartSection";
import MyCredit from "./components/credit/MyCredit";
import DonationSection from "./components/donation/DonationSection";

function ListPage() {
  return (
    <>
      <MyCredit />
      <DonationSection />
      <ChartSection />
    </>
  );
}

export default ListPage;
