import { useEffect, useState } from "react";
import * as S from "./VoteSection.style";
import ListItem from "../listItem/ListItem";
import client from "../../api/client";
import { creditStorage } from "@/storage/credit.storage";
import CreditLimitModal from "./CreditLimitModal";

const VoteSection = ({ onClose, initialGender = "female" }) => {
  const [gender] = useState(initialGender);
  const [list, setList] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  const [isCreditModalOpen, setIsCreditModalOpen] = useState(false);

  useEffect(() => {
    const fetchIdols = async () => {
      const res = await client.get("/idols");
      const idols = res.data.list;

      const filtered = idols.filter((i) => i.gender === gender);

      const sorted = filtered
        .sort((a, b) => b.totalVotes - a.totalVotes)
        .map((i, idx) => ({
          id: i.id,
          name: i.name,
          img: i.profilePicture,
          votes: i.totalVotes,
          rank: idx + 1,
        }));

      setList(sorted);
    };

    fetchIdols();
    // eslint-disable-next-line react-hooks/exhaustive-deps 
  }, [gender]);

  const submit = async () => {
    if (!selectedId) return;

    const currentCredit = creditStorage.get() || 0;

    if (currentCredit < 1000) {
      setIsCreditModalOpen(true);
      return;
    }

    const res = await client.post("/votes", { idolId: selectedId });
    const updated = res.data.idol;

    creditStorage.set(currentCredit - 1000);

    const newList = list
      .map((i) => (i.id === updated.id ? { ...i, votes: updated.totalVotes } : i))
      .sort((a, b) => b.votes - a.votes)
      .map((i, idx) => ({ ...i, rank: idx + 1 }));

    setList(newList);
    setSelectedId(null);
  };

  return (
    <>
      <S.Container>
        <S.Modal>
          <S.MobileHeader>
            <S.BackBtn onClick={onClose} aria-label="뒤로" />
            <S.Title>{gender === "female" ? "이달의 여자 아이돌" : "이달의 남자 아이돌"}</S.Title>
            <S.Rbox />
          </S.MobileHeader>

          <S.Header>
            <S.Title>{gender === "female" ? "이달의 여자 아이돌" : "이달의 남자 아이돌"}</S.Title>
            <S.CloseBtn onClick={onClose} />
          </S.Header>

          <S.List>
            {list.map((c) => (
              <ListItem
                key={c.id}
                {...c}
                selected={selectedId === c.id}
                onSelect={setSelectedId}
                variant="vote"
              />
            ))}
          </S.List>

          <S.Vote>
            <S.Votebtn disabled={!selectedId} onClick={submit}>
              투표하기
            </S.Votebtn>
            <S.VoteNotice>
              투표하는 데 <S.Credit>1000</S.Credit> 크레딧이 소모됩니다.
            </S.VoteNotice>
          </S.Vote>
        </S.Modal>
      </S.Container>

      {isCreditModalOpen && <CreditLimitModal onClose={() => setIsCreditModalOpen(false)} />}
    </>
  );
};

export default VoteSection;
