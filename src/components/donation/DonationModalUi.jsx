import creditImg from "@/assets/imgs/credit.png";
import Modal from "../common/Modal";
import * as S from "./DonationModalUi.style";

const DonationModalUi = ({
  isOpen,
  onClose,
  content,
  donationCredit,
  isNotEnough,
  isLoading,
  onChangeCredit,
  onSubmit,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="후원하기">
      <S.ChildrenWrapper>
        <img src={content.idol.profilePicture} alt={content.idol.name} />
        <S.TitleWrapper>
          <S.SubTitle>{content.subtitle}</S.SubTitle>
          <S.Title>{content.title}</S.Title>
        </S.TitleWrapper>
        <S.FormContainer onSubmit={onSubmit}>
          <div>
            <S.InputWrapper $isNotEnough={isNotEnough}>
              <input
                disabled={isLoading}
                value={donationCredit}
                onChange={onChangeCredit}
                placeholder="크레딧 입력"
              />
              <img src={creditImg} alt="크레딧" />
            </S.InputWrapper>
            {isNotEnough && (
              <S.MessageBox>갖고 있는 크레딧보다 더 많이 후원할 수 없어요</S.MessageBox>
            )}
            {/* 🔥 로딩 메시지 */}
            {isLoading && (
              <S.MessageBox $color="var(--gray-67666E)">후원 요청 중입니다...</S.MessageBox>
            )}
          </div>
          <S.SubmitButton disabled={isNotEnough || isLoading} type="submit">
            후원하기
          </S.SubmitButton>
        </S.FormContainer>
      </S.ChildrenWrapper>
    </Modal>
  );
};

export default DonationModalUi;
