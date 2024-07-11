import React from "react";
import ContainerWrapper from "@/components/ContainerWrapper";
import {
  CardStyled,
  CardWrapperStyled,
  FlexColHeadingWrapperStyled,
  ImageStyled,
  ImgColStyled,
  LeftDivStyled,
  MainHeadingWrapper,
  RightDivStyled,
  TitleHeadStyled,
} from "./styled";
import ButtonWrapper from "@/components/UI/ButtonWrapper";

type CampaignProps = {
  data: {
    title: string;
    mainHeading: string;
    buttonText: string;
    card: {
      id: string | number;
      image: string;
      imageText: string;
    }[];
  };
};

const Campaign: React.FC<CampaignProps> = ({ data }) => {
  return (
    <>
      <ContainerWrapper>
        <FlexColHeadingWrapperStyled>
          <div>
            <TitleHeadStyled>{data.title}</TitleHeadStyled>
          </div>
          <MainHeadingWrapper>
            <LeftDivStyled>
              <h3
                style={{
                  fontWeight: 500,
                  color: "#000",
                }}
              >
                {data.mainHeading}
              </h3>
            </LeftDivStyled>
            <RightDivStyled>
              <ButtonWrapper variant={{ BorderRadius: 50 }}>
                {data.buttonText}
              </ButtonWrapper>
            </RightDivStyled>
          </MainHeadingWrapper>
        </FlexColHeadingWrapperStyled>

        <CardWrapperStyled>
          {data.card.map((item) => {
            return (
              <>
                <CardStyled key={item.id}>
                  <ImgColStyled>
                    <ImageStyled src={item.image} alt="" />
                  </ImgColStyled>
                </CardStyled>
              </>
            );
          })}
        </CardWrapperStyled>
      </ContainerWrapper>
    </>
  );
};

export default Campaign;
