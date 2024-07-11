import React from "react";
import {
  BannerWrapperStyled,
  ContentWrapper,
  DescStyled,
  DescWrapperStyled,
  TitleStyled,
  VerseStyled,
} from "./styled";
import ContainerWrapper from "@/components/ContainerWrapper";

type BannerProps = {
  data: {
    image?: string;
    title?: string;
    desc?: string;
    verse?: string;
  };
};

const Banner: React.FC<BannerProps> = ({ data }) => {
  return (
    <BannerWrapperStyled image={data.image}>
      <ContainerWrapper>
        <ContentWrapper>
          {data.title && (
            <div>
              <TitleStyled>{data.title}</TitleStyled>
            </div>
          )}
          {data.desc && (
            <DescWrapperStyled>
              <DescStyled>{data.desc}</DescStyled>
            </DescWrapperStyled>
          )}
          {data.verse && (
            <div>
              <VerseStyled>{data.verse}</VerseStyled>
            </div>
          )}
        </ContentWrapper>
      </ContainerWrapper>
    </BannerWrapperStyled>
  );
};

export default Banner;
