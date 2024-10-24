import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/swiper-bundle.css";
import {
  BackgroundImage1,
  BackgroundImage2,
  BackgroundImage3,
  IndicatorContainer,
  IndicatorDot,
  CarouselWrapper,
  CenteredText,
} from "./styled";
import ButtonWrapper from "@/components/UI/ButtonWrapper";

const HeroComp = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<SwiperCore | null>(null);

  const handleSlideChange = (swiper: SwiperCore) => {
    setCurrentIndex(swiper.realIndex);
  };

  const goToSlide = (index: number) => {
    if (swiperInstance) {
      swiperInstance.slideToLoop(index);
    }
  };

  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.on("slideChange", () => handleSlideChange(swiperInstance));
    }
  }, [swiperInstance]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (swiperInstance) {
        swiperInstance.slideNext();
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [swiperInstance]);

  return (
    <>
      <CarouselWrapper>
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          onSwiper={setSwiperInstance}
        >
          <SwiperSlide>
            <BackgroundImage1 />
          </SwiperSlide>
          <SwiperSlide>
            <BackgroundImage2 />
          </SwiperSlide>
          <SwiperSlide>
            <BackgroundImage3 />
          </SwiperSlide>
        </Swiper>
        <CenteredText>
          <div>
            <h1
              style={{
                color: "#fff",
              }}
            >
              Glorious United Pentecostal Church (GUPC)
            </h1>
          </div>
          <div>
            <p
              style={{
                color: "#fff",
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              gap: "20px",
            }}
          >
            <div>
              <ButtonWrapper
                variant={{
                  BorderRadius: 50,
                }}
              >
                Donate Now
              </ButtonWrapper>
            </div>
            <div>
              <ButtonWrapper
                variant={{
                  BorderRadius: 50,
                }}
              >
                Contact Us
              </ButtonWrapper>
            </div>
          </div>
        </CenteredText>
        <IndicatorContainer>
          {[0, 1, 2].map((index) => (
            <IndicatorDot
              key={index}
              active={index === currentIndex}
              onClick={() => goToSlide(index)}
            />
          ))}
        </IndicatorContainer>
      </CarouselWrapper>
    </>
  );
};

export default HeroComp;
