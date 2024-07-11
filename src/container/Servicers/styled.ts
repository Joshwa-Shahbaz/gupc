import styled from "styled-components";

export const PinnacleWrapperStyled = styled.div`
  margin-top: 80px;
  @media (min-width: ${({ theme }) => theme.breakpoints.largeScreen}px) {
    margin-top: 150px;
  }
`;

export const ButtonStyled = styled.button`
  border-radius: 30px;
  border: 1px solid #303030;
  padding: 13px 21.504px 13px 21.996px;
  font-size: 15px;
  margin-top: 33px;
  background: none;
`;

export const ShadeStyled = styled.div`
  display: none;
  width: 431.197px;
  height: 456.333px;
  transform: rotate(12.185deg);
  border-radius: 456.333px;
  background: rgba(70, 117, 206, 0.28);
  filter: blur(150px);
  position: absolute;
  top: 0;
  right: -40px;
  z-index: -1;
`;

export const CardWrapperStyled = styled.div`
  max-width: 400px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  padding: 41px 39px;
  border-radius: 14px;
  background: #fff;
  box-shadow: 0px 0px 35px 0px rgba(0, 0, 0, 0.16);
  position: relative;
  overflow: hidden;
  transition: 0.2s ease-in-out;

  &:hover {
    background: linear-gradient(45deg, #880808, #f2c274);
    color: #fff;

    ${ButtonStyled} {
      color: #f2c274;
      border: 1px solid #f2c274;
    }
    ${ShadeStyled} {
      display: block;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.largeScreen}px) {
    width: 350px;
    min-height: 450px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 400px;
  }
`;

export const ContentWrapperStyled = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
`;

export const CardHeadStyled = styled.h5`
  font-weight: 700;
`;

export const DesciptionStyled = styled.span`
  flex-grow: 1;
`;

export const FlexWrapper = styled.div`
  display: flex;
  gap: 33px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;
export const HeadingWrapperStyled = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
`;
