import styled from "styled-components";

export const PinnacleWrapperStyled = styled.div`
  margin-top: 80px;
  @media (min-width: ${({ theme }) => theme.breakpoints.largeScreen}px) {
    margin-top: 180px;
  }
`;

export const HeadingWrapperStyled = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
`;

export const TeamCardStyled = styled.div`
  position: relative;
  width: 380px;
  height: 480px;
  border-radius: 25px;
  max-width: 400px;

  @media (min-width: ${({ theme }) => theme.breakpoints.largeScreen}px) {
    width: 350px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 400px;
  }
`;

export const ImageStyled = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 25px;
`;

export const InfoCardStyled = styled.div`
  position: absolute;
  background-color: #fff;
  width: 90%;
  height: 190px;
  bottom: -110px;
  border-radius: 12px;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px;
`;
