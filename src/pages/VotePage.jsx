import VoteItem from "@/components/VoteItem";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default function VotePage() {
  const [list, setList] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  const MOCK = [
    { id: 1, name: "장원영", img: "/images/1.jpg", votes: 1000 },
    { id: 2, name: "카리나", img: "/images/2.jpg", votes: 900 },
    { id: 3, name: "안유진", img: "/images/3.jpg", votes: 800 },
    { id: 4, name: "사쿠라", img: "/images/4.jpg", votes: 700 },
  ];

  useEffect(() => {
    const sorted = [...MOCK]
      .sort((a, b) => b.votes - a.votes)
      .map((i, idx) => ({ ...i, rank: idx + 1 }));
    setList(sorted);
  }, []);

  const submit = () => {
    if (!selectedId) return;
    setList(prev =>
      prev
        .map(c => (c.id === selectedId ? { ...c, votes: c.votes + 1 } : c))
        .sort((a, b) => b.votes - a.votes)
        .map((i, idx) => ({ ...i, rank: idx + 1 }))
    );
  };

  return (
    <Container>
      <Header>
        <Title>이달의 여자 아이돌</Title>
        <CloseBtn aria-label="닫기">x</CloseBtn>
      </Header>

      <List>
        {list.map(c => (
          <VoteItem
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

      <Vote>
        <Votebtn disabled={!selectedId} onClick={submit}>
          투표하기
        </Votebtn>
        <VoteNotice>
          투표하는데 <Credit>1000</Credit> 크레딧이 소모됩니다.
        </VoteNotice>
      </Vote>
    </Container>
  );
}


const Container = styled.div`
  width:525px;
  height:693px;
  background:#181D26;
  padding:24px;
  overflow:hidden;
  display:flex;
  flex-direction:column;
  color:#fff;
`;

const Header = styled.div`
width:100%;
height:24px;
display:flex;
justify-content:space-between;`;

const Title = styled.h2`
font-size:20px;
font-weight:700;
margin:0;`;

const CloseBtn = styled.button`
font-size:24px; 
cursor:pointer;
color:#fff;
background:transparent;
border:0;`;

const List = styled.div`
  flex:1;
  width:100%;
  min-height:0;
  margin-top:19px;
  overflow-y:auto;
  scrollbar-width:none;
  -ms-overflow-style:none;
  &::-webkit-scrollbar{display:none;}
`;

const Vote = styled.div`
width:100%;
text-align:center;`;

const Votebtn = styled.button`
  width:100%;
  height:42px;
  cursor:pointer;
  background:linear-gradient(90deg, rgba(248,111,101,1) 0%, rgba(254,84,147,1) 100%);
  border:0;
  border-radius:10px;
  margin:20px 0 12px;
  color:#fff;
  opacity:${({disabled}) => (disabled ? 0.5 : 1)};
`;

const VoteNotice = styled.p`font-size:12px; margin:0;`;
const Credit = styled.span`color:rgba(249,109,105,1);`;
