import IdolCircleImage from "@/components/common/IdolCircleImage";
import { memo } from "react";
import * as S from "./ListItem.style";

const ListItem = ({ id, img, rank, name, votes, selected, onSelect, variant = "vote" }) => {
  const commaNum = (num) => Number(num).toLocaleString();

  return (
    <S.Item
      $variant={variant}
      $selected={selected}
      onClick={variant === "vote" ? () => onSelect?.(id) : undefined}
    >
      <IdolCircleImage $size="sm" src={img} alt={name} />
      <S.Rank>{rank}</S.Rank>
      <S.TextGroup>
        <S.Name>{name}</S.Name>
        <S.ListVotes>{commaNum(votes)}표</S.ListVotes>
      </S.TextGroup>

      {variant === "vote" && <S.RadioVisual $variant={variant} $selected={selected} />}
    </S.Item>
  );
};

export default memo(ListItem);
