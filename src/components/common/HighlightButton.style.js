import styled from "styled-components";

export const Button = styled.button`
  font-size: 1.4rem;
  line-height: 2.6rem;
  font-weight: 700;
  border-radius: 4px;
  background: linear-gradient(to right, var(--color-primary), var(--color-secondary));
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    background: var(--color-gray-500);
  }

  ${({ $customStyle }) => $customStyle && $customStyle};
`;
