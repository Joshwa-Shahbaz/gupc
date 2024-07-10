import styled from "styled-components";

export const ButtonWrapperStyled = styled.button<{
  backgroundColor?: string | number;
  BorderRadius?: number;
}>`
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : "#F2C274"};
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  display: flex;
  flex-direction: row;
  gap: 10px;
  text-align: center;
  align-items: center;
  justify-content: center;
  border-radius: ${({ BorderRadius }) =>
    BorderRadius ? `${BorderRadius}px` : "0px"};
  padding: 12px 28px;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: #008ecc;
  }
`;
