import styled from "styled-components";

export const FlexColHeadingWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 80px;

  @media (min-width: ${({ theme }) => theme.breakpoints.largeScreen}px) {
    margin-top: 180px;
  }
`;

export const TitleHeadStyled = styled.h5`
  color: #f2c274;
  text-align: center;
  font-weight: 500;

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

export const ImageStyled = styled.img`
  width: 100%;
  box-shadow: 0px 0px 35px 0px rgba(0, 0, 0, 0.2);
  height: 100%;
  object-fit: cover;
  border-radius: 0px;

  @media (min-width: ${({ theme }) => theme.breakpoints.largeScreen}px) {
    border-radius: 22px;
    height: 350px;
  }
`;

export const CardStyled = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
    rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
  justify-content: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.largeScreen}px) {
    min-height: 390px;
    width: 48%;
  }
  &:hover {
    ${ImageStyled} {
      transform: scale(1.02);
      transition: transform 0.5s ease-in-out;
    }
  }
`;

export const ImgColStyled = styled.div`
  padding: 0px 18px;
  display: flex;
  align-items: center;
`;
