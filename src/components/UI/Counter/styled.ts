import styled from "styled-components";

export const CounterWrapperStyled = styled.div`
  display: none;
  @media (min-width: ${({ theme }) => theme.breakpoints.largeScreen}px) {
    padding: 0 12px;
    display: block;
  }
`;

export const Check = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  width: 100%;
  row-gap: 40px;

  @media (min-width: ${({ theme }) => theme.breakpoints.largeScreen}px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const CounterTextStyled = styled.p`
  font-weight: 500;
  color: #000;

  @media (min-width: ${({ theme }) => theme.breakpoints.largeScreen}px) {
    white-space: nowrap;
  }
`;

export const DividerLineStyled = styled.div`
  width: 70%;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.5);
  display: none;
  @media (min-width: ${({ theme }) => theme.breakpoints.largeScreen}px) {
    display: block;
    width: 1px;
    height: 59px;
    margin: 0 auto;
  }
`;

export const ContentWrapperStyled = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
`;
