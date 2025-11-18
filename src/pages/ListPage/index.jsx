import SectionErrorBoundary from "@/components/common/SectionErrorBoundary";
import ChartSection from "./components/chart/ChartSection";
import MyCredit from "./components/credit/MyCredit";
import DonationSection from "./components/donation/DonationSection";

const ListPage = () => {
  return (
    <>
      <MyCredit />
      <SectionErrorBoundary>
        <DonationSection />
      </SectionErrorBoundary>
      <SectionErrorBoundary>
        <ChartSection />
      </SectionErrorBoundary>
    </>
  );
};

export default ListPage;
