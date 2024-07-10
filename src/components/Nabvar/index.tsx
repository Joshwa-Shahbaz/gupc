import React, { useState, useEffect } from "react";
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
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const List = [
    {
      navHead: "Home",
      navLink: "about-me-section",
    },
    {
      navHead: "Post",
      navLink: "",
    },
    {
      navHead: "Articles",
      navLink: "",
    },
    {
      navHead: "Projects",
      navLink: "",
    },
  ];

  const handleScrollToSection = (id: any) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ContainerWrapper>
      <NavbarWrapperStyled scrolled={scrolled}>
        <LogoStyled style={{ color: "#F2C274", fontSize: "35px" }}>
          GUPC
        </LogoStyled>

        <NavListStyled scrolled={scrolled}>
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
            onClick={() => setToggle(true)}
          />
        </ToggleButtonWrapper>

        <ButtonContainer>
          <ButtonWrapper variant={{ BorderRadius: 50 }}>Donate</ButtonWrapper>
        </ButtonContainer>
      </NavbarWrapperStyled>

      {toggle && (
        <>
          <MobileSizeNavbar toggle={toggle}>
            <CloseButtonStyled>
              <IoCloseSharp
                size={30}
                color="#fff"
                onClick={() => setToggle(false)}
              />
            </CloseButtonStyled>
          </MobileSizeNavbar>
        </>
      )}
    </ContainerWrapper>
  );
};

export default Navbar;
