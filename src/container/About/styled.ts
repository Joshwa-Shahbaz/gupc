import styled from "styled-components";

export const RowStyled = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 60px;
  align-items: center;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.largeScreen}px) {
    flex-direction: row;
    gap: 5%;
  }
`;

export const LeftColStyled = styled.div`
  width: 80%;
  border-radius: 50%;
  height: 100%;
  order: 2;

  @media (min-width: ${({ theme }) => theme.breakpoints.largeScreen}px) {
    width: 30%;
    order: 1;
  }
`;

export const RightColStyled = styled.div`
  width: 100%;
  height: 100%;
  order: 1;

  @media (min-width: ${({ theme }) => theme.breakpoints.largeScreen}px) {
    flex: 1;
    order: 2;
  }
`;
