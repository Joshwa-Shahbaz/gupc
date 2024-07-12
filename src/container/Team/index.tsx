import React from "react";
import {
  Description,
  HeadingWrapperStyled,
  IconContainer,
  ImageStyled,
  InfoCardStyled,
  MainHeadStyled,
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

type TeamProps = {
  data: {
    title: string;
    mainHeading: string;
    teamCard: {
      id: string | number;
      image: string;
      title: string;
      name: string;
      desc: string;
      faceBook: string;
      instagram: string;
      linkedIn: string;
    }[];
  };
};

const Team: React.FC<TeamProps> = ({ data }) => {
  return (
    <ContainerWrapper>
      <PinnacleWrapperStyled>
        <HeadingWrapperStyled>
          <div>
            <h5
              style={{
                color: "#F2C274",
              }}
            >
              {data.title}
            </h5>
          </div>
          <div>
            <MainHeadStyled>{data.mainHeading}</MainHeadStyled>
          </div>
        </HeadingWrapperStyled>

        <TeamWrapperStyled>
          {data.teamCard.map((item) => {
            return (
              <TeamCardStyled key={item.id}>
                <ImageStyled src={item.image} alt={item.image} />
                <InfoCardStyled>
                  <TextContainer>
                    <Title>{item.title}</Title>
                    <Name>{item.name}</Name>
                    <Description>{item.desc}</Description>
                  </TextContainer>
                  <IconContainer>
                    <Link href={item.instagram} target="blank">
                      <FaInstagram size={35} color="#f2c274" />
                    </Link>
                    <Link href={item.faceBook} target="blank">
                      <FaFacebookF size={35} color="#f2c274" />
                    </Link>
                    <Link href={item.linkedIn} target="blank">
                      <FaLinkedinIn size={35} color="#f2c274" />
                    </Link>
                  </IconContainer>
                </InfoCardStyled>
              </TeamCardStyled>
            );
          })}
        </TeamWrapperStyled>
      </PinnacleWrapperStyled>
    </ContainerWrapper>
  );
};

export default Team;
