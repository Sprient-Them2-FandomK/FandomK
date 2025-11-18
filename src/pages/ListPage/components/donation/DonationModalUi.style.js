import { TYPO } from "@/styles/typography";
import { COLOR_VAR_MAP, hexToRgba } from "@/utils/color";
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
  color: ${hexToRgba("#666")};
  ${TYPO.body14Medium}
`;

export const Title = styled.h4`
  color: ${hexToRgba(COLOR_VAR_MAP["--color-white-90"])};
  ${TYPO.body14Medium}
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const InputWrapper = styled.div`
  position: relative;
  border: solid 1px ${hexToRgba(COLOR_VAR_MAP["--color-white-100"])};
  border-radius: 8px;
  padding: 16px;
  padding-right: 48px;

  input {
    width: 231px;
    height: 26px;
    padding: 0;

    ${TYPO.title20Bold}
    color: ${hexToRgba(COLOR_VAR_MAP["--color-white-100"])};
  }

  img {
    position: absolute;
    top: 16px;
    right: 16px;
    width: 24px;
    height: 24px;
  }

  ${({ $isNotEnough }) => $isNotEnough && { borderColor: hexToRgba("#FF3B3B") }}
`;

export const MessageBox = styled.div`
  margin-top: 8px;

  ${TYPO.caption12SemiBold}
  color: ${hexToRgba("#ff2626")};

  ${({ $color }) => $color && { color: $color }}
`;
