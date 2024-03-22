import React from "react";
import ContainerWrapper from "../ContainerWrapper";
import Link from "next/link";
import ButtonWrapper from "../UI/ButtonWrapper";
import { LogoStyled, NavListStyled, NavbarWrapperStyled } from "./styled";

const Navbar = () => {
  const List = ["About Me", "Feautured works", "Resume", "Expertise"];

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

        <div>
          <ButtonWrapper
            variant={{
              BorderRadius: 8,
            }}
          >
            Hire me
          </ButtonWrapper>
        </div>
      </NavbarWrapperStyled>
    </ContainerWrapper>
  );
};

export default Navbar;
