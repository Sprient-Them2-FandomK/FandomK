import DonationSection from "@/components/donation/DonationSection.jsx";
import { MyCredit } from "@/components/MyCredit";
import VoteSection from "@/components/vote/VoteSection";

function List() {
  return (
    <>
      <MyCredit />
      <DonationSection />
      <VoteSection />
    </>
  );
}

export default List;
