import styled from "styled-components";

export const Item = styled.div`
  display: flex;
  height: 70px;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid rgba(225, 225, 225, 0.1);
  cursor: pointer;
  /* background: ${({ $selected }) => ($selected ? "rgba(249,109,105,0.08)" : "transparent")};
  transition: background 0.2s ease; */
`;

export const Img = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 1px solid #f96d69;
  object-fit: cover;
`;

export const Rank = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: rgba(249, 109, 105, 1);
`;

export const TextGroup = styled.div`
  flex: 1;
`;

export const Name = styled.p`
  font-size: 14px;
  font-weight: 500;
`;

export const ListVotes = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #aaa;
  margin: 4px 0 0;
`;

export const RadioVisual = styled.span`
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
