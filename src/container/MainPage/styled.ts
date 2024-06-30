import styled from "styled-components";
import Image from "next/image";

export const MainWrapperStyled = styled.div<{
  height?: number;
}>`
  margin-top: 40px;
  height: max-content;

  @media (min-width: ${({ theme }) => theme.breakpoints.largeScreen}px) {
    margin-top: 60px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.extraLarge}px) {
    margin-top: 40px;
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

  @media (min-width: ${({ theme }) => theme.breakpoints.largeScreen}px) {
    flex: 1;
    margin-bottom: 0px;
  }
`;

export const RightDivStyled = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.largeScreen}px) {
    width: 45%;
  }
`;

export const ImageStyled = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const TypewriterWrapper = styled.div`
  max-height: 90px;
  /* height: 60px; */
  display: flex;
  /* padding: 10px 0; */
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.largeScreen}px) {
  }
`;
