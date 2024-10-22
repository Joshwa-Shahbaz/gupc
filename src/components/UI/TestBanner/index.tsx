import React from "react";
import {
  Section,
  FlexContainer,
  TextContainer,
  Title,
  Description,
  ImageContainer,
} from "./styled";
import ContainerWrapper from "@/components/ContainerWrapper";

const TestBanner = () => {
  return (
    <Section>
      <ContainerWrapper>
        <FlexContainer>
          <TextContainer>
            <Title>Discover the worlds best coffee</Title>
            <Description>
              From hand-picked farms to your cup we source the finest beans and
              roast them to perfection.
            </Description>
          </TextContainer>
          <ImageContainer>
            <img
              src="https://plus.unsplash.com/premium_photo-1675716443562-b771d72a3da7"
              alt="Coffee beans"
            />
          </ImageContainer>
        </FlexContainer>
      </ContainerWrapper>
    </Section>
  );
};

export default TestBanner;
