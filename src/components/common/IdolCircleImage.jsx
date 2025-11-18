import * as S from "./IdolCircleImage.style";

const IdolCircleImage = ({ src, alt, $size = "md" }) => {
  return (
    <S.IdolCircleImageBorder $size={$size}>
      <S.IdolCircleImageWrapper $size={$size}>
        <S.IdolImage src={src} alt={alt} />
      </S.IdolCircleImageWrapper>
    </S.IdolCircleImageBorder>
  );
};

export default IdolCircleImage;
