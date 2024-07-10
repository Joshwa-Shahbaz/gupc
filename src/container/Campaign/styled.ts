import styled from "styled-components";

export const FlexColHeadingWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 80px;

  @media (min-width: ${({ theme }) => theme.breakpoints.largeScreen}px) {
    margin-top: 180px;
  }
`;

export const TitleHeadStyled = styled.h6`
  color: #f2c274;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.largeScreen}px) {
    text-align: left;
  }
`;

export const MainHeadingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  width: 100%;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.largeScreen}px) {
    flex-direction: row;
    align-items: self-end;
    text-align: left;
  }
`;

export const LeftDivStyled = styled.div`
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.largeScreen}px) {
    width: 60%;
  }
`;

export const RightDivStyled = styled.div`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.largeScreen}px) {
    width: 20%;
    display: block;
  }
`;

export const CardWrapperStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;
  justify-content: center;
  gap: 20px;
`;

export const CardStyled = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 35px 0px rgba(0, 0, 0, 0.12);

  @media (min-width: ${({ theme }) => theme.breakpoints.largeScreen}px) {
    min-height: 460px;
    width: 48%;
  }
`;

export const ImgColStyled = styled.div`
  padding: 18px;
  /* flex-grow: 1; */
  display: flex;
  align-items: center;
`;

export const ImageStyled = styled.img`
  width: 100%;
  border-radius: 22px;
  box-shadow: 0px 0px 35px 0px rgba(0, 0, 0, 0.2);
  height: 100%;
  object-fit: cover;

  @media (min-width: ${({ theme }) => theme.breakpoints.largeScreen}px) {
    height: 350px;
  }
`;
