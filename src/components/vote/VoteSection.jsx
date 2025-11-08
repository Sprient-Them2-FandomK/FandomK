import React, { useEffect, useState } from "react";
import ListItem from "../ListItem.jsx";
import {
  Container,
  Modal,
  Header,
  Title,
  CloseBtn,
  List,
  Vote,
  Votebtn,
  VoteNotice,
  Credit,
  MobileHeader,
  BackBtn,
  Rbox,
  TransparentOverlay,
} from "./VoteSection.style.js";

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
