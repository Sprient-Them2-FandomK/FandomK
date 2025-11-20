import { getChartList } from "@/api/chartClient";
import HighlightButton from "@/components/common/HighlightButton";
import useModal from "@/hooks/useModal";
import { useEffect, useState } from "react";
import { useErrorBoundary } from "react-error-boundary";
import { css } from "styled-components";
import * as S from "./ChartSection.styles";
import ListItem from "./ListItem";
import VoteModal from "./VoteModal";

const BREAKPOINT = 744;

const ChartSection = () => {
  const { showBoundary } = useErrorBoundary();
  const getInitWidth = () => (typeof window !== "undefined" ? window.innerWidth : BREAKPOINT);

  const [gender, setGender] = useState("female");
  const { isOpen, onOpen, onClose, modalContent, setModalContent } = useModal();
  const [trigger, setTrigger] = useState(false);
  const [windowWidth, setWindowWidth] = useState(getInitWidth());
  const [visibleCount, setVisibleCount] = useState(getInitWidth() >= BREAKPOINT ? 10 : 5);

  const [list, setList] = useState([]);

  useEffect(() => {
    const loadIdols = async () => {
      try {
        const res = await getChartList({ pageSize: 100, gender: gender });
        const idols = res.idols;
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
        setModalContent({ list: sorted, gender: gender });
      } catch (e) {
        showBoundary(e);
      }
    };
    loadIdols();
  }, [gender, showBoundary, setModalContent, trigger]);

  useEffect(() => {
    const onResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    setVisibleCount(windowWidth >= BREAKPOINT ? 10 : 5);
  }, [windowWidth]);

  const data = list;
  const shown = data.slice(0, visibleCount);

  const colA = shown.filter((_, i) => i % 2 === 0);
  const colB = shown.filter((_, i) => i % 2 === 1);

  const isSingleCol = windowWidth < BREAKPOINT;

  const handleSelectGender = (g) => {
    if (g === gender) return;
    setGender(g);
    setVisibleCount(windowWidth >= BREAKPOINT ? 10 : 5);
  };

  const handleMore = () => {
    setVisibleCount((v) => Math.min(v + 5, data.length));
  };

  const handleTrigger = () => {
    setTrigger((pre) => !pre);
  };

  let gridContent;
  if (isSingleCol) {
    gridContent = (
      <S.Col>
        {shown.map((c) => (
          <ListItem key={c.id} {...c} variant="chart" />
        ))}
      </S.Col>
    );
  } else {
    gridContent = (
      <>
        <S.Col>
          {colA.map((c) => (
            <ListItem key={c.id} {...c} variant="chart" />
          ))}
        </S.Col>
        <S.Col>
          {colB.map((c) => (
            <ListItem key={c.id} {...c} variant="chart" />
          ))}
        </S.Col>
      </>
    );
  }

  return (
    <S.Wrap>
      <S.ChartHeader>
        <S.H2>이달의 차트</S.H2>
        <S.RightArea>
          <HighlightButton
            type="button"
            onClick={() => {
              onOpen();
              setModalContent({ list: list, gender: gender });
            }}
            $customStyle={css`
              display: flex;
              width: 128px;
              height: 32px;
              justify-content: center;
              align-items: center;
              white-space: nowrap;
            `}
          >
            <S.ChartImg />
            <S.ChartVote>차트 투표하기</S.ChartVote>
          </HighlightButton>
        </S.RightArea>
      </S.ChartHeader>

      <S.Board>
        <S.BoardHead role="tablist" aria-label="성별 선택">
          <S.HeadTab
            role="tab"
            aria-selected={gender === "female"}
            $active={gender === "female"}
            onClick={() => handleSelectGender("female")}
          >
            이달의 여자 아이돌
          </S.HeadTab>
          <S.HeadTab
            role="tab"
            aria-selected={gender === "male"}
            $active={gender === "male"}
            onClick={() => handleSelectGender("male")}
          >
            이달의 남자 아이돌
          </S.HeadTab>
        </S.BoardHead>

        <S.Grid>{gridContent}</S.Grid>
      </S.Board>

      <S.MoreArea>
        <S.MoreBtn onClick={handleMore} disabled={visibleCount >= data.length}>
          더 보기
        </S.MoreBtn>
      </S.MoreArea>

      {isOpen && (
        <VoteModal modalContent={modalContent} onClose={onClose} handleTrigger={handleTrigger} />
      )}
    </S.Wrap>
  );
};

export default ChartSection;
