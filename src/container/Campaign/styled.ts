import styled from "styled-components";

export const FlexColHeadingWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 80px;

  @media (min-width: ${({ theme }) => theme.breakpoints.largeScreen}px) {
    margin-top: 150px;
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
  display: flex;
  flex-direction: column;
  gap: 5px;

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
  height: 100%;
  object-fit: cover;
  border-radius: 22px;
  z-index: -1;

  @media (min-width: ${({ theme }) => theme.breakpoints.largeScreen}px) {
    height: 350px;
  }
`;
export const ImgColStyled = styled.div`
  position: relative;
  width: 100%;
  box-shadow: 0px 0px 35px 0px rgba(0, 0, 0, 0.2);
  border-radius: 22px;
  z-index: 1;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4));
    border-radius: 22px;
    z-index: 2;
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
  cursor: pointer;

  @media (min-width: ${({ theme }) => theme.breakpoints.largeScreen}px) {
    min-height: 350px;
    width: 48%;
  }

  ${ImgColStyled} {
    &:hover::after {
      background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1));
      transition: 0.5s ease-in-out;
    }
  }
`;
