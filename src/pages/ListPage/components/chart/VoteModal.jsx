import client from "@/api/client";
import useCreditContext from "@/app/contexts/CreditContext";
import HighlightButton from "@/components/common/HighlightButton";
import { media } from "@/styles/media";
import { useState } from "react";
import { css } from "styled-components";
import CreditLimitModal from "./CreditLimitModal";
import ListItem from "./ListItem";
import * as S from "./VoteModal.style";

const NEED_CREDIT = 1000;

const VoteModal = ({ onClose, modalContent, handleTrigger }) => {
  const [selectedId, setSelectedId] = useState(null);
  const [_, { isEnoughCredit, subtractCredit }] = useCreditContext();
  const [isCreditModalOpen, setIsCreditModalOpen] = useState(false);

  const submit = async () => {
    if (!selectedId) return;
    if (!isEnoughCredit(NEED_CREDIT)) {
      setIsCreditModalOpen(true);
      return;
    }

    await client.post("/votes", { idolId: selectedId });
    subtractCredit(NEED_CREDIT);
    handleTrigger();
    setSelectedId(null);
  };

  return (
    <>
      <S.Container onClick={onClose}>
        <S.Modal onClick={(e) => e.stopPropagation()}>
          <S.MobileHeader>
            <S.BackBtn onClick={onClose} aria-label="뒤로" />
            <S.Title>
              {modalContent.gender === "female" ? "이달의 여자 아이돌" : "이달의 남자 아이돌"}
            </S.Title>
            <S.Rbox />
          </S.MobileHeader>

          <S.Header>
            <S.Title>
              {modalContent.gender === "female" ? "이달의 여자 아이돌" : "이달의 남자 아이돌"}
            </S.Title>
            <S.CloseBtn onClick={onClose} />
          </S.Header>

          <S.List>
            {modalContent.list.map((c) => (
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
            <HighlightButton
              onClick={submit}
              disabled={!selectedId}
              $customStyle={css`
                width: calc(100% - 32px);
                height: 44px;
                margin: 16px 0;

                @media ${media.tablet} {
                  width: 100%;
                  height: 42px;
                  margin: 20px 0 12px;
                }
              `}
            >
              투표하기
            </HighlightButton>
            <S.VoteNotice>
              투표하는 데 <S.Credit>{NEED_CREDIT}</S.Credit> 크레딧이 소모됩니다.
            </S.VoteNotice>
          </S.Vote>
        </S.Modal>
      </S.Container>

      {isCreditModalOpen && <CreditLimitModal onClose={() => setIsCreditModalOpen(false)} />}
    </>
  );
};

export default VoteModal;
