import styled from "styled-components";

export const FlexLeftDivStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 5%;
  padding-right: 5%;

  @media (min-width: ${({ theme }) => theme.breakpoints.largeScreen}px) {
    width: 50%;
    padding-left: 5%;
    padding-right: 0%;
  }
`;

export const HeadingStyled = styled.h1`
  width: 100%;
  font-weight: 500;
  line-height: 1.1;
  font-size: 34px;
  max-width: 898px;

  @media (min-width: ${({ theme }) => theme.breakpoints.biggerMobile}px) {
    font-size: 44px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 46px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.largeScreen}px) {
    font-size: 48px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.extraLarge}px) {
    font-size: 54px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    font-size: 88px;
  }
`;

export const DescStyled = styled.p`
  font-size: 24px;
  margin-top: 15px;

  @media (min-width: ${({ theme }) => theme.breakpoints.largeScreen}px) {
    font-size: 15px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.extraLarge}px) {
    font-size: 36px;
    margin-top: 25px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    font-size: 42px;
    margin-top: 50px;
  }
`;

export const ButtonDivStyled = styled.div`
  margin-top: 15px;

  @media (min-width: ${({ theme }) => theme.breakpoints.largeScreen}px) {
    font-size: 15px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.extraLarge}px) {
    margin-top: 25px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    margin-top: 50px;
  }
`;

export const FlexRightDivStyled = styled.div`
  flex: 1;
  right: 0;
  position: relative;
  margin-top: 50px;
  @media (min-width: 1024px) {
    margin-top: 0px;
  }
`;

export const ImgStyled = styled.img`
  width: 100%;
  height: 520px;
  object-fit: fill;

  @media (min-width: ${({ theme }) => theme.breakpoints.largeScreen}px) {
    height: 100vh;
  }
`;
