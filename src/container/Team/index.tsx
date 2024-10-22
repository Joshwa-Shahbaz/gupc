import React from "react";
import {
  CardBack,
  CardFront,
  CardInner,
  Description,
  HeadingWrapperStyled,
  IconContainer,
  ImageStyled,
  Name,
  PinnacleWrapperStyled,
  TeamCardStyled,
  TeamWrapperStyled,
  Title,
  MainHeadStyled,
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
    <PinnacleWrapperStyled>
      <ContainerWrapper>
        <HeadingWrapperStyled>
          <div>
            <h5
              style={{
                color: "#FFF",
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
                <CardInner className="card-inner">
                  {/* Front Side */}
                  <CardFront>
                    <ImageStyled src={item.image} alt={item.image} />
                  </CardFront>

                  {/* Back Side */}
                  <CardBack>
                    <Title>{item.title}</Title>
                    <Name>{item.name}</Name>
                    <Description>{item.desc}</Description>
                    <IconContainer>
                      <Link href={item.faceBook} passHref>
                        <FaFacebookF size={"25px"} />
                      </Link>
                      <Link href={item.instagram} passHref>
                        <FaInstagram size={"25px"} />
                      </Link>
                      <Link href={item.linkedIn} passHref>
                        <FaLinkedinIn size={"25px"} />
                      </Link>
                    </IconContainer>
                  </CardBack>
                </CardInner>
              </TeamCardStyled>
            );
          })}
        </TeamWrapperStyled>
      </ContainerWrapper>
    </PinnacleWrapperStyled>
  );
};

export default Team;
