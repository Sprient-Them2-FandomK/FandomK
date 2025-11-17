import { memo } from "react";
import { Item, Img, Rank, TextGroup, Name, ListVotes, RadioVisual } from "./ListItem.style.js";

const ListItem = ({ id, img, rank, name, votes, selected, onSelect, variant = "vote" }) => {
  const commaNum = (num) => Number(num).toLocaleString();

  return (
    <Item
      $variant={variant}
      $selected={selected}
      onClick={variant === "vote" ? () => onSelect?.(id) : undefined}
    >
      <Img src={img} alt={name} />
      <Rank>{rank}</Rank>
      <TextGroup>
        <Name>{name}</Name>
        <ListVotes>{commaNum(votes)}표</ListVotes>
      </TextGroup>

      {variant === "vote" && <RadioVisual $variant={variant} $selected={selected} />}
    </Item>
  );
};

export default memo(ListItem);
