import styled from "styled-components";

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  height: 70px;
  border-bottom: 1px solid rgba(225, 225, 225, 0.1);
  padding: ${({ $variant }) => ($variant === "vote" ? "0 12px" : "0")};
  border-bottom: ${({ $variant }) =>
    $variant === "chart" ? "none" : "1px solid rgba(225, 225, 225, 0.1)"};

  cursor: ${({ $variant }) => ($variant === "vote" ? "pointer" : "default")};
  transition: ${({ $variant }) => ($variant === "vote" ? "background 0.2s ease" : "none")};
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
  width: 18px;
  text-align: right;
  opacity: 0.9;
  color: rgba(249, 109, 105, 1);
`;

export const TextGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  min-width: 0;
`;

export const Name = styled.p`
  font-weight: 500;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ListVotes = styled.p`
  font-size: 14px;
  color: #aaa;
  margin: 0 0 0 auto;
`;

export const RadioVisual = styled.span`
  display: ${({ $variant }) => ($variant === "chart" ? "none" : "flex")};

  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 2px solid ${({ $selected }) => ($selected ? "#F96D69" : "#666")};
  align-items: center;
  justify-content: center;

  &::after {
    content: "";
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: ${({ $selected }) => ($selected ? "#F96D69" : "transparent")};
    transition: background 0.2s ease;
  }
`;
