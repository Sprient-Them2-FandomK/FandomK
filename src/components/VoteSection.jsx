import React, { useEffect, useState } from "react";
import styled from "styled-components";
import closePng from "../assets/btn_delete_24px.png";
import ListItem from "./ListItem";
import backPng from "../assets/icj_arrow_left2.png";

const VoteSection = () => {
  const [list, setList] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  const MOCK = [
    { id: 1, name: "장원영", img: "/images/1.jpg", votes: 1000 },
    { id: 2, name: "카리나", img: "/images/2.jpg", votes: 900 },
    { id: 3, name: "안유진", img: "/images/3.jpg", votes: 800 },
    { id: 4, name: "사쿠라", img: "/images/4.jpg", votes: 800 },
    { id: 5, name: "장원영", img: "/images/1.jpg", votes: 1200 },
    { id: 6, name: "카리나", img: "/images/2.jpg", votes: 930 },
    { id: 7, name: "안유진", img: "/images/3.jpg", votes: 840 },
    { id: 8, name: "사쿠라", img: "/images/4.jpg", votes: 750 },
    { id: 9, name: "안유진", img: "/images/3.jpg", votes: 840 },
    { id: 10, name: "사쿠라", img: "/images/4.jpg", votes: 750 },
    { id: 11, name: "안유진", img: "/images/3.jpg", votes: 840 },
    { id: 12, name: "사쿠라", img: "/images/4.jpg", votes: 750 },
  ];

  useEffect(() => {
    const sorted = [...MOCK]
      .sort((a, b) => b.votes - a.votes)
      .map((i, idx) => ({ ...i, rank: idx + 1 }));
    setList(sorted);
  }, []);

  const submit = () => {
    if (!selectedId) return;
    setList((prev) =>
      prev
        .map((c) => (c.id === selectedId ? { ...c, votes: c.votes + 1 } : c))
        .sort((a, b) => b.votes - a.votes)
        .map((i, idx) => ({ ...i, rank: idx + 1 }))
    );
  };

  return (
    <Container>
      <Modal>
        <MobileHeader>
          <BackBtn></BackBtn>
          <Title>이달의 여자 아이돌</Title>
          <Rbox></Rbox>
        </MobileHeader>
        <Header>
          <Title>이달의 여자 아이돌</Title>
          <CloseBtn aria-label="닫기"></CloseBtn>
        </Header>

        <List>
          {list.map((c) => (
            <ListItem
              key={c.id}
              id={c.id}
              img={c.img || "/images/placeholder.jpg"}
              rank={c.rank}
              name={c.name}
              votes={c.votes}
              selected={selectedId === c.id}
              onSelect={setSelectedId}
            />
          ))}
        </List>

        <TransparentOverlay />

        <Vote>
          <Votebtn disabled={!selectedId} onClick={submit}>
            투표하기
          </Votebtn>
          <VoteNotice>
            투표하는데 <Credit>1000</Credit> 크레딧이 소모됩니다.
          </VoteNotice>
        </Vote>
      </Modal>
    </Container>
  );
};
export default VoteSection;

const Container = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  display: grid;
  place-items: center;
  z-index: 999;

  @media (max-width: 524px) {
    background: transparent rgba(2, 0, 14, 1);
    display: block;
  }
`;

const Modal = styled.div`
  width: 100%;
  max-width: 524px;
  height: 693px;
  background: #181d26;
  padding: 24px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  color: #fff;
  border-radius: 16px;
  margin: 0 auto;

  @media (max-width: 524px) {
    position: fixed;
    inset: 0;
    width: 100vw;
    height: 100vh;
    max-width: none;
    border-radius: 0;
    padding: 16px;
  }
`;

const Header = styled.div`
  width: 100%;
  height: 24px;
  padding-bottom: 34ㅎpx;
  display: flex;
  justify-content: space-between;

  @media (max-width: 524px) {
    display: none;
  }
`;

const MobileHeader = styled.div`
  display: none;
  @media (max-width: 524px) {
    width: 100%;
    height: 44px;
    display: flex;
    justify-content: space-between;
  }
`;

const Rbox = styled.div`
  display: none;

  @media (max-width: 524px) {
    display: block;
    width: 24px;
    height: 24px;
  }
`;

const BackBtn = styled.button`
  background-image: url(${backPng});
  background-repeat: no-repeat;
  display: none;
  width: 24px;
  height: 24px;
  background-size: contain;
  @media (max-width: 524px) {
    display: block;
  }
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: 500;
  margin: 0;

  @media (max-width: 524px) {
    font-size: 14px;
  }
`;

const CloseBtn = styled.button`
  font-size: 24px;
  cursor: pointer;
  color: #fff;
  width: 24px;
  height: 24px;
  padding: 0;
  margin: 0;
  appearance: none;
  background: transparent url(${closePng}) no-repeat center / contain;
  border: 0;
`;

const List = styled.div`
  flex: 1;
  width: 100%;
  min-height: 0;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 524px) {
    height: 100%;
  }
`;

const Vote = styled.div`
  width: 100%;
  text-align: center;

  @media (max-width: 524px) {
    height: 106px;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background: transparent;
    pointer-events: none;
    z-index: 10;
  }
`;

const TransparentOverlay = styled.div`
  @media (max-width: 524px) {
    height: 106px;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(2, 0, 14, 0.8);
    pointer-events: none;
    z-index: 9;
  }
`;

const Votebtn = styled.button`
  width: 100%;
  height: 42px;
  font-size: 14px;
  cursor: pointer;
  background: linear-gradient(90deg, rgba(248, 111, 101, 1) 0%, rgba(254, 84, 147, 1) 100%);
  border: 0;
  border-radius: 10px;
  margin: 20px 0 12px;
  color: #fff;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};

  @media (max-width: 524px) {
    width: calc(100% - 32px);
    margin: 16px 0px;
    height: 44px;
    font-size: 15px;
    pointer-events: auto;
  }
`;

const VoteNotice = styled.p`
  font-size: 12px;
  margin: 0;
`;
const Credit = styled.span`
  color: rgba(249, 109, 105, 1);
`;
