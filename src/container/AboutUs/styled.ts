import styled from "styled-components";

// import Image from "next/image";

// module.exports = {
//   images: {
//     domains: ["www.shutterstock.com"],
//   },
// };

export const AboutUsWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 80px;
  @media (min-width: ${({ theme }) => theme.breakpoints.largeScreen}px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 10%;
    margin-top: 150px;
  }
`;

export const LeftDivStyled = styled.div`
  width: 100%;
  object-fit: contain;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  /* background-color: red; */

  @media (min-width: ${({ theme }) => theme.breakpoints.largeScreen}px) {
    width: 50%;
    position: relative;
  }
`;

export const RightDivStyled = styled.div`
  width: 100%;
  margin-top: 0px;

  @media (min-width: ${({ theme }) => theme.breakpoints.largeScreen}px) {
    flex: 1;
    margin-top: 0px;
  }
`;

export const ImageStyled = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 25% 0 0 0;
`;

export const TitleStyled = styled.h5`
  font-size: 20px;
  padding: 0;
  color: #3778a9;
  margin: 0 0 10px 0;
  @media (min-width: ${({ theme }) => theme.breakpoints.extraLarge}px) {
    gap: 10px;
    margin: 0 0 10px 0;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    gap: 20px;
    margin: 0 0 10px 0;
  }
`;

export const HeadingStyled = styled.h1`
  padding: 0;
  margin: 0;
  color: #22405e;

  @media (min-width: ${({ theme }) => theme.breakpoints.largeScreen}px) {
    line-height: 60px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.extraLarge}px) {
    line-height: 60px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    line-height: 70px;
  }
`;

export const ParagraphStyled = styled.p`
  padding: 0;
  margin: 0;
  color: #22405e;
`;

export const AboutUsDescriptionStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 45px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    margin-top: 55px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.largeScreen}px) {
    margin-top: 10px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.extraLarge}px) {
    gap: 10px;
    margin-top: 15px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    gap: 10px;
    margin-top: 20px;
  }
`;

export const HeadingDesktopStyled = styled.div`
  display: none;
  @media (min-width: ${({ theme }) => theme.breakpoints.largeScreen}px) {
    display: block;
  }
`;

export const HeadingMobileStyled = styled.div`
  padding-bottom: 32px;
  display: block;
  @media (min-width: ${({ theme }) => theme.breakpoints.largeScreen}px) {
    display: none;
  }
`;

export const ImageContainerStyled = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.extraLarge}px) {
    max-width: 700px;
    width: fit-content;
    height: 500px;
  }
`;

export const CounterWrapper = styled.div`
  display: none;
  background-color: #f2c274;
  position: absolute;
  bottom: 160px;
  width: 90%;

  @media (min-width: ${({ theme }) => theme.breakpoints.extraLarge}px) {
    display: block;
    bottom: 50px;
  }
  @media (min-width: 1320px) {
    bottom: 100px;
  }
  @media (min-width: 1350px) {
    bottom: 90px;
  }
  @media (min-width: 1440px) {
    bottom: 60px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    display: block;
    bottom: 50px;
  }
`;
