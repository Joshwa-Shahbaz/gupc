import React, { useState } from "react";
import ContainerWrapper from "../ContainerWrapper";
import Link from "next/link";
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
  const List = ["About Me", "Feautured works", "Resume", "Expertise"];

  console.log(toggle);

  return (
    <ContainerWrapper>
      <NavbarWrapperStyled>
        <LogoStyled
          style={{
            color: "#F2C274",
            fontSize: "35px",
          }}
        >
          Joshwa
        </LogoStyled>

        <NavListStyled>
          {List.map((item) => {
            return <Link href="#">{item}</Link>;
          })}
        </NavListStyled>

        <ToggleButtonWrapper>
          <HiMiniBars3
            color="#F2C274"
            size={30}
            onClick={() => useToggle(true)}
          />
        </ToggleButtonWrapper>

        <ButtonContainer>
          <ButtonWrapper
            variant={{
              BorderRadius: 8,
            }}
          >
            Hire me
          </ButtonWrapper>
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
