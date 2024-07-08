import React, { useEffect, useState } from "react";
import styled from "styled-components";

interface SlideProps {
  image: string;
}

interface DotProps {
  active: boolean;
}

const images = [
  "https://img.freepik.com/free-photo/interior-church-architecture-background_1409-5538.jpg",
  "https://openhousedublin.com/wp-content/uploads/2022/10/Christ-Church-3.jpeg",
  "https://christchurchcathedral.ie/wp-content/uploads/2021/07/Christ-Church-Cathedral-Nave-from-West-Door-1024x682.jpg",
];

const CustomCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 5000); // Adjust slide duration here (in milliseconds)
    return () => clearInterval(interval);
  }, [currentIndex]);

  const goToPreviousSlide = () => {
    const index = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(index);
  };

  const goToNextSlide = () => {
    const index = (currentIndex + 1) % images.length;
    setCurrentIndex(index);
  };

  return (
    <CarouselContainer>
      <SlideWrapper
        style={{ transform: `translateX(${-currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <Slide key={index} image={image} />
        ))}
      </SlideWrapper>
      <DotContainer>
        {images.map((_, index) => (
          <Dot
            key={index}
            active={index === currentIndex}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </DotContainer>
    </CarouselContainer>
  );
};

const CarouselContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100vh;
`;

const SlideWrapper = styled.div`
  display: flex;
  transition: transform 0.5s ease;
`;

const Slide = styled.div<SlideProps>`
  min-width: 100%;
  height: 100%;
  background-image: ${(props) =>
    `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.image})`};
  background-size: cover;
  background-position: center;
`;

const DotContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
`;

const Dot = styled.div<DotProps>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.active ? "#fff" : "rgba(255, 255, 255, 0.5)"};
  margin: 0 5px;
  cursor: pointer;
`;

export default CustomCarousel;
