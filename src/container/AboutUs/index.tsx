import React from "react";
//containers
import ContainerWrapper from "@/components/ContainerWrapper";
// styles
import {
  HeadingMobileStyled,
  HeadingDesktopStyled,
  AboutUsDescriptionStyled,
  ParagraphStyled,
  HeadingStyled,
  AboutUsWrapperStyled,
  ImageStyled,
  LeftDivStyled,
  RightDivStyled,
  ImageContainerStyled,
  CounterWrapper,
} from "./styled";
import Counter from "@/components/UI/Counter";
import { CounterData } from "@/site-data/Counter";

// type
type AboutUsProps = {
  data: {
    image?: string;
    mainHeading?: string;
    paragraphs: string;
  };
};

const AboutUs: React.FC<AboutUsProps> = ({ data }) => {
  return (
    <ContainerWrapper>
      <AboutUsWrapperStyled>
        <HeadingMobileStyled>
          <HeadingStyled>{data.mainHeading}</HeadingStyled>
        </HeadingMobileStyled>
        <LeftDivStyled>
          <ImageContainerStyled>
            <ImageStyled src={data.image} alt={data.image} />
          </ImageContainerStyled>
          <CounterWrapper>
            <Counter data={CounterData} />
          </CounterWrapper>
        </LeftDivStyled>
        <RightDivStyled>
          <HeadingDesktopStyled>
            <HeadingStyled>{data.mainHeading}</HeadingStyled>
          </HeadingDesktopStyled>
          <AboutUsDescriptionStyled>
            <ParagraphStyled>
              {data.paragraphs}
              {/* <div dangerouslySetInnerHTML={{ __html: data.paragraphs }} /> */}
            </ParagraphStyled>
          </AboutUsDescriptionStyled>
        </RightDivStyled>
      </AboutUsWrapperStyled>
    </ContainerWrapper>
  );
};
export default AboutUs;
