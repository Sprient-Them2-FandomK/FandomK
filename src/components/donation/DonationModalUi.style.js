import styled from "styled-components";

export const ChildrenWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 295px;
  margin-top: 24px;

  img {
    width: 158px;
    height: 206px;
    object-fit: cover;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 158px;
  margin: 10px 2px 24px;
`;

export const SubTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.8rem;
  color: #666666;
`;

export const Title = styled.h4`
  color: var(--white-F7F7F8);
  font-size: 1.4rem;
  font-weight: 500;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const InputWrapper = styled.div`
  position: relative;
  border: solid 1px var(--white-FFFFFF);
  border-radius: 8px;
  padding: 16px;
  padding-right: 48px;

  input {
    padding: 0;
    width: 231px;
    height: 26px;
    color: var(--white-FFFFFF);
    font-size: 2rem;
    font-weight: 700;
    line-height: 2.6rem;
  }

  img {
    position: absolute;
    top: 16px;
    right: 16px;
    width: 24px;
    height: 24px;
  }

  ${({ $isNotEnough }) => $isNotEnough && { borderColor: "#FF3B3B" }}
`;

export const MessageBox = styled.div`
  margin-top: 8px;
  font-size: 1.2rem;
  font-weight: 500;
  color: #ff2626;

  ${({ $color }) => $color && { color: $color }}
`;

export const SubmitButton = styled.button`
  width: 295px;
  height: 42px;
  border-radius: 4px;
  background: linear-gradient(to right, #f86f65, var(--pink-FE5493));
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 2.6rem;

  &:disabled {
    background: var(--gray-828282);
  }
`;
