import FlexWrapper from "@/components/FlexWrapper";
import React from "react";
import {
  ButtonDivStyled,
  DescStyled,
  FlexLeftDivStyled,
  FlexRightDivStyled,
  HeadingStyled,
  ImgStyled,
} from "./styled";
import ButtonWrapper from "@/components/UI/ButtonWrapper";
import { CgBmw } from "react-icons/cg";
import VectorSvg from "@/components/UI/Vector";

const Banner = () => {
  return (
    <FlexWrapper>
      <FlexLeftDivStyled>
        <VectorSvg />
        <div>
          <HeadingStyled>
            Discover, Explore, Unwind: Your Journey Begins Here!
          </HeadingStyled>
          <DescStyled>
            Safe Skies, Happy Landings: Your Journey, Our Priority
          </DescStyled>
          <ButtonDivStyled>
            <ButtonWrapper
              variant={{
                BorderRadius: 50,
                backgroundColor: "#87ceeb",
              }}
            >
              <div>Book your Flight Now!</div>
            </ButtonWrapper>
          </ButtonDivStyled>
        </div>
      </FlexLeftDivStyled>
      <FlexRightDivStyled>
        <ImgStyled src="/images/market.png" alt="/images/market.png" />
      </FlexRightDivStyled>
    </FlexWrapper>
  );
};

export default Banner;
