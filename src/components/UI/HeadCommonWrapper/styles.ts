import styled from "styled-components";

export const Variant1Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Variant2Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  align-items: center;
  text-align: center;
  padding: 15px;

  @media (min-width: ${({ theme }) => theme.breakpoints.largeScreen}px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 0px;
  }
`;

export const Title = styled.h1`
  color: #f2c274;
`;

export const DescStyled = styled.p`
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.largeScreen}px) {
    max-width: 550px;
    text-align: center;
  }
`;
