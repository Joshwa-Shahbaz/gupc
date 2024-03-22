import styled from "styled-components";

export const MainWrapperStyled = styled.div`
  margin-top: 40px;

  @media (min-width: ${({ theme }) => theme.breakpoints.largeScreen}px) {
    margin-top: 60px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.extraLarge}px) {
    margin-top: 60px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    margin-top: 120px;
  }
`;

export const LeftDivStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
  margin-bottom: 40px;

  @media (min-width: ${({ theme }) => theme.breakpoints.largeScreen}px) {
    width: 40%;
    margin-bottom: 0px;
  }
`;

export const RightDivStyled = styled.div`
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.largeScreen}px) {
    flex: 1;
  }
`;
