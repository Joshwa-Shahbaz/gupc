import styled from "styled-components";

export const ContainerWrapperStyled = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 15px;

  @media (min-width: ${({ theme }) => theme.breakpoints.biggerMobile}px) {
    padding: 0 40px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    padding: 0 60px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.largeScreen}px) {
    padding: 0 80px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.extraLarge}px) {
    padding: 0 100px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    padding: 0 180px;
  }
`;
