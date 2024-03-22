import styled from "styled-components";

export const NavbarWrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  text-align: center;
  align-items: center;
`;

export const LogoStyled = styled.div`
  color: #f2c274;
  font-size: 35px;
`;

export const NavListStyled = styled.div`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.largeScreen}px) {
    display: block;
    display: flex;
    gap: 55px;
    flex-direction: row;
  }
`;
