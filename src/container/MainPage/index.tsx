import ContainerWrapper from "@/components/ContainerWrapper";
import FlexWrapper from "@/components/FlexWrapper";
import React, { useRef, useState, useEffect } from "react";
import {
  ImageStyled,
  LeftDivStyled,
  MainWrapperStyled,
  RightDivStyled,
  TypewriterWrapper,
} from "./styled";
import ButtonWrapper from "@/components/UI/ButtonWrapper";
import TypewriterEffect from "@/components/UI/TypeEffect";
import { RxBorderDashed } from "react-icons/rx";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const MainPage = () => {
  const texts = [
    "I am Joshwa Shahbaz",
    "I am Frontend Developer",
    "Have a great day!",
  ];

  const [isInView, setIsInView] = useState(false);
  const typewriterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    if (typewriterRef.current) {
      observer.observe(typewriterRef.current);
    }

    return () => {
      if (typewriterRef.current) {
        observer.unobserve(typewriterRef.current);
      }
    };
  }, [typewriterRef]);

  return (
    <MainWrapperStyled>
      <ContainerWrapper>
        <FlexWrapper>
          <LeftDivStyled>
            <div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "8px",
                  alignItems: "center",
                }}
              >
                <div>
                  <RxBorderDashed size={22} color="#F2C274" />
                </div>
                <div>
                  <p
                    style={{
                      color: "#F2C274",
                    }}
                  >
                    hello
                  </p>
                </div>
              </div>
              <TypewriterWrapper ref={typewriterRef}>
                <TypewriterEffect
                  texts={texts}
                  interval={150}
                  start={isInView}
                />
              </TypewriterWrapper>
            </div>
            <div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div>
              <ButtonWrapper
                variant={{
                  BorderRadius: 8,
                }}
              >
                Download CV
              </ButtonWrapper>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "25px",
                marginTop: "25px",
              }}
            >
              <div>
                <FaFacebookF size={"25px"} />
              </div>
              <div>
                <FaInstagram size={"25px"} />
              </div>
              <div>
                <FaGithub size={"25px"} />
              </div>
              <div>
                <FaLinkedinIn size={"25px"} />
              </div>
            </div>
          </LeftDivStyled>
          <RightDivStyled>
            <ImageStyled
              src="/images/2.jpg"
              alt="/images/HeroPlane.png"
              width={500}
              height={500}
            />
          </RightDivStyled>
        </FlexWrapper>
      </ContainerWrapper>
    </MainWrapperStyled>
  );
};

export default MainPage;
