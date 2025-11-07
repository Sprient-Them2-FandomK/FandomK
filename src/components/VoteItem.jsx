import React from "react";
import styled from "styled-components";

export default function VoteItem({ id, img, rank, name, votes, selected, onSelect  }) {

    const commaNum = (num) => Number(num).toLocaleString();

  return (
    <Item $selected={selected} onClick={() => onSelect(id)}>
      <Img src={img} alt={name} />
      <Rank>{rank}</Rank>
      <TextGroup>
        <Name>{name}</Name>
        <ListVotes>{commaNum(votes)}표</ListVotes>
      </TextGroup>
      <RadioVisual $selected={selected} />
    </Item>
  );
}

/* ===== styles ===== */
const Item = styled.div`
  display: flex;
  height: 70px;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid rgba(225, 225, 225, 0.1);
  cursor: pointer;
  /* background: ${({ $selected }) => ($selected ? "rgba(249,109,105,0.08)" : "transparent")};
  transition: background 0.2s ease; */
`;

const Img = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 1px solid #f96d69;
  object-fit: cover;
`;

const Rank = styled.span`
  font-size: 14px;
  color:rgba(249, 109, 105, 1);
`;

const TextGroup = styled.div`
  flex: 1;
`;

const Name = styled.p`
  font-size: 14px;
  font-weight: 600;
`;

const ListVotes = styled.p`
  font-size: 14px;
  color: #aaa;
  margin: 4px 0 0;
`;

const RadioVisual = styled.span`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 2px solid ${({ $selected }) => ($selected ? "#F96D69" : "#666")};
  display: flex;
  align-items: center;
  justify-content: center;

  &::after {
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${({ $selected }) => ($selected ? "#F96D69" : "transparent")};
    transition: background 0.2s ease;
  }
`;
