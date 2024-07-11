import styled from "styled-components";

export const BannerWrapperStyled = styled.div<{
  image?: string;
}>`
  width: 100%;
  height: fit-content;
  background-image: ${({ image }) =>
    image
      ? `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(${image})`
      : ""};
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-position: center;
  margin-top: 80px;

  @media (min-width: ${({ theme }) => theme.breakpoints.largeScreen}px) {
    height: 50vh;
    margin-top: 110px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 40px 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.largeScreen}px) {
    padding: 0;
  }
`;

export const TitleStyled = styled.h5`
  color: #f2c274;
`;

export const VerseStyled = styled.h6`
  font-size: 18px;
  color: #f2c274;
`;

export const DescStyled = styled.h4`
  color: #fff;
`;

export const DescWrapperStyled = styled.div`
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.largeScreen}px) {
    width: 60%;
  }
`;
