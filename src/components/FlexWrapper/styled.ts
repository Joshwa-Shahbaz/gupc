import styled from "styled-components";

export const FLexWrapperStyled = styled.h1<{
  justifyContent?: string;
  FlexDirection?: string;
  gap?: number;
}>`
  display: flex;
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : "space-between"};
  flex-direction: ${({ FlexDirection }) =>
    FlexDirection ? FlexDirection : "column"};
  gap: 10%;

  @media (min-width: ${({ theme }) => theme.breakpoints.largeScreen}px) {
    flex-direction: row;
  }
`;
