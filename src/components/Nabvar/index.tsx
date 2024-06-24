import React, { useState } from "react";
import ContainerWrapper from "../ContainerWrapper";
import ButtonWrapper from "../UI/ButtonWrapper";
import {
  ButtonContainer,
  CloseButtonStyled,
  LogoStyled,
  MobileSizeNavbar,
  NavListStyled,
  NavbarWrapperStyled,
  ToggleButtonWrapper,
} from "./styled";
import { HiMiniBars3 } from "react-icons/hi2";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [toggle, useToggle] = useState<boolean>(false);
  const List = [
    {
      navHead: "About Me",
      navLink: "about-me-section",
    },
    {
      navHead: "Feautured works",
      navLink: "",
    },
    {
      navHead: "Resume",
      navLink: "",
    },
    {
      navHead: "Expertise",
      navLink: "",
    },
  ];

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ContainerWrapper>
      <NavbarWrapperStyled>
        <LogoStyled style={{ color: "#F2C274", fontSize: "35px" }}>
          JOSH
        </LogoStyled>

        <NavListStyled>
          {List.map((item) => (
            <a
              style={{
                cursor: "pointer",
              }}
              key={item.navHead}
              onClick={() => handleScrollToSection(item.navLink)}
            >
              {item.navHead}
            </a>
          ))}
        </NavListStyled>

        <ToggleButtonWrapper>
          <HiMiniBars3
            color="#F2C274"
            size={30}
            onClick={() => useToggle(true)}
          />
        </ToggleButtonWrapper>

        <ButtonContainer>
          <ButtonWrapper variant={{ BorderRadius: 8 }}>Hire me</ButtonWrapper>
        </ButtonContainer>
      </NavbarWrapperStyled>

      {toggle && (
        <>
          <MobileSizeNavbar toggle={toggle}>
            <CloseButtonStyled>
              <IoCloseSharp
                size={30}
                color="#fff"
                onClick={() => useToggle(false)}
              />
            </CloseButtonStyled>
          </MobileSizeNavbar>
        </>
      )}
    </ContainerWrapper>
  );
};

export default Navbar;
