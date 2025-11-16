import DonationSection from "@/components/donation/DonationSection.jsx";
import MyCredit from "@/components/credit/MyCredit";
import VoteSection from "@/components/vote/VoteSection";

function ListPage() {
  return (
    <>
      <MyCredit />
      <DonationSection />
      <VoteSection />
    </>
  );
}

export default ListPage;
