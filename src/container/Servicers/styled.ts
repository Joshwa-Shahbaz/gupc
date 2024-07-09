import styled from "styled-components";

export const ServicesWrapperStyled = styled.div<{ view: boolean }>`
  background-color: ${({ view }) => (view ? `#000` : `#FFF`)};
  transition: background-color 1s;
  margin-top: 70px;
  @media (min-width: ${({ theme }) => theme.breakpoints.largeScreen}px) {
    margin-top: 151px;
  }
`;
