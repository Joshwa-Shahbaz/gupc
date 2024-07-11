import React from "react";
import {
  Description,
  HeadingWrapperStyled,
  IconContainer,
  ImageStyled,
  InfoCardStyled,
  Name,
  PinnacleWrapperStyled,
  TeamCardStyled,
  TeamWrapperStyled,
  TextContainer,
  Title,
} from "./styled";
import ContainerWrapper from "@/components/ContainerWrapper";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

const Team = () => {
  return (
    <ContainerWrapper>
      <PinnacleWrapperStyled>
        <HeadingWrapperStyled>
          <div>
            <h5
              style={{
                color: "#F2C274",
                marginBottom: "20px",
              }}
            >
              Meet Our Team
            </h5>
          </div>
          <div>
            <h2>Let's Make A Difference Today</h2>
          </div>
        </HeadingWrapperStyled>

        <TeamWrapperStyled>
          <TeamCardStyled>
            <ImageStyled
              src="https://cdn.prod.website-files.com/63ab89cf916d9b6c7c14fdc4/64c5b89f2cff33c4e4ee3085_Vanderbloemen.webp"
              alt=""
            />
            <InfoCardStyled>
              <TextContainer>
                <Title>Director</Title>
                <Name>Rev John William</Name>
                <Description>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </Description>
              </TextContainer>
              <IconContainer>
                <Link href={""}>
                  <FaInstagram size={35} color="#f2c274" />
                </Link>
                <FaFacebookF size={35} color="#f2c274" />
                <FaLinkedinIn size={35} color="#f2c274" />
              </IconContainer>
            </InfoCardStyled>
          </TeamCardStyled>
        </TeamWrapperStyled>
      </PinnacleWrapperStyled>
    </ContainerWrapper>
  );
};

export default Team;
