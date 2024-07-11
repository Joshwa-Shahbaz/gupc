import styled from "styled-components";

export const PinnacleWrapperStyled = styled.div`
  margin-top: 80px;
  @media (min-width: ${({ theme }) => theme.breakpoints.largeScreen}px) {
    margin-top: 150px;
  }
`;

export const HeadingWrapperStyled = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
`;

export const TeamWrapperStyled = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  gap: 150px;

  @media (min-width: 1316px) {
    gap: 33px;
  }
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
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 20px;
  transform: translateX(-50%);
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  gap: 5px;
  flex: 1;
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 20%;
`;

export const Title = styled.span`
  font-size: 18px;
  font-weight: 500;
  color: #f2c274;
`;

export const Name = styled.span`
  font-size: 22px;
  font-weight: 700;
`;

export const Description = styled.span`
  font-size: 16px;
`;
