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

const Campaign = () => {
  return (
    <>
      <ContainerWrapper>
        <FlexColHeadingWrapperStyled>
          <div>
            <TitleHeadStyled>RECENT CAMPAIGN</TitleHeadStyled>
          </div>
          <MainHeadingWrapper>
            <LeftDivStyled>
              <h1>Donate To Charity Campaign Around The World!</h1>
            </LeftDivStyled>
            <RightDivStyled>
              <ButtonWrapper variant={{ BorderRadius: 50 }}>
                View All Campaigns
              </ButtonWrapper>
            </RightDivStyled>
          </MainHeadingWrapper>
        </FlexColHeadingWrapperStyled>

        <CardWrapperStyled>
          <CardStyled>
            <ImgColStyled>
              <ImageStyled
                src="https://i0.wp.com/minhajwelfare.org/wp-content/uploads/2021/01/Orphanimage-1.jpg?fit=727%2C416&ssl=1"
                alt=""
                width={"100%"}
              />
            </ImgColStyled>
            <div>
              <h4
                style={{
                  padding: " 0px 18px 18px 18px",
                  textAlign: "center",
                }}
              >
                Finical Help For Poor Families{" "}
              </h4>
            </div>
          </CardStyled>
          <CardStyled>
            <ImgColStyled>
              <ImageStyled
                src="https://i.brecorder.com/primary/2022/09/63113b527dd76.jpg"
                alt=""
              />
            </ImgColStyled>
            <div>
              <h4
                style={{
                  padding: " 0px 18px 18px 18px",
                  textAlign: "center",
                }}
              >
                Help Flood Affected
              </h4>
            </div>
          </CardStyled>
        </CardWrapperStyled>
      </ContainerWrapper>
    </>
  );
};

export default Campaign;
