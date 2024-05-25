import styled from "styled-components";

export const NavbarWrapperStyled = styled.div`
  position: sticky;
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

export const ButtonContainer = styled.div`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.largeScreen}px) {
    display: block;
  }
`;

export const ToggleButtonWrapper = styled.div`
  display: block;

  @media (min-width: ${({ theme }) => theme.breakpoints.largeScreen}px) {
    display: none;
  }
`;

export const MobileSizeNavbar = styled.div<{
  toggle: boolean;
}>`
  display: block;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: ${({ toggle }) => (toggle ? "0" : "-100%")};
  z-index: 9999;
  background-color: black;
  height: 100vh;
  width: 100%;
  transition: right 0.1s ease-in;

  @media (min-width: ${({ theme }) => theme.breakpoints.largeScreen}px) {
    display: none;
  }
`;

export const CloseButtonStyled = styled.div`
  padding: 20px 20px 0 0;
  float: right;
`;
