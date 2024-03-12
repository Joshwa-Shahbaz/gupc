import styled from "styled-components";

export const FLexWrapperStyled = styled.h1<{
  justifyContent?: string;
}>`
  display: flex;
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : "space-between"};
  flex-direction: column;
  gap: 5%;

  @media (min-width: ${({ theme }) => theme.breakpoints.largeScreen}px) {
    flex-direction: row;
  }
`;
