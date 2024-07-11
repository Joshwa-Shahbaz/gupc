import React from "react";
import {
  ButtonStyled,
  CardHeadStyled,
  CardWrapperStyled,
  ContentWrapperStyled,
  DesciptionStyled,
  FlexWrapper,
  HeadingWrapperStyled,
  PinnacleWrapperStyled,
  ShadeStyled,
} from "./styled";
import ContainerWrapper from "@/components/ContainerWrapper";
import { MdOutlineVolunteerActivism } from "react-icons/md";
import { LiaDonateSolid } from "react-icons/lia";
import { IoPeopleOutline } from "react-icons/io5";

const CardData = [
  {
    id: "1",
    icon: <MdOutlineVolunteerActivism size={75} color="#F2C274" />,
    heading: "Become A Volunteer",
    desciption: `Whether you're starting with a blank canvas or you're in
    need of a rebrand, our team carry the expertise to help
    you level up! `,
  },
  {
    id: "2",
    icon: <LiaDonateSolid size={75} color="#F2C274" />,
    heading: "Donate To Support",
    desciption: ` Whether you're starting with a blank canvas or you're in
    need of a rebrand, our team carry the expertise to help
    you level up! `,
  },
  {
    id: "3",
    icon: <IoPeopleOutline size={75} color="#F2C274" />,
    heading: "Become A partner",
    desciption: `  Whether you're starting with a blank canvas or you're in
    need of a rebrand, our team carry the expertise to help
    you level up! `,
  },
];

const Services = () => {
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
              GET INVOLVED
            </h5>
          </div>
          <div>
            <h3>Let's Make A Difference Today</h3>
          </div>
        </HeadingWrapperStyled>
        <FlexWrapper>
          {CardData.map((data) => {
            return (
              <CardWrapperStyled key={data.id}>
                <ShadeStyled />
                <ContentWrapperStyled>
                  <div>{data.icon}</div>
                  <div>
                    <CardHeadStyled>{data.heading}</CardHeadStyled>
                  </div>
                  <div>
                    <DesciptionStyled>{data.desciption}</DesciptionStyled>
                  </div>
                </ContentWrapperStyled>
                <div>
                  <ButtonStyled>Learn more</ButtonStyled>
                </div>
              </CardWrapperStyled>
            );
          })}
        </FlexWrapper>
      </PinnacleWrapperStyled>
    </ContainerWrapper>
  );
};

export default Services;
