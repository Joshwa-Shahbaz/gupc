import styled from "styled-components";

export const CarouselContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100vh;
`;

export const SlideWrapper = styled.div`
  display: flex;
  transition: transform 0.5s ease;
`;

export const Slide = styled.div<{
  image: string;
}>`
  min-width: 100%;
  height: 100%;
  background-image: ${(props) =>
    `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.image})`};
  background-size: cover;
  background-position: center;
`;

export const DotContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
`;

export const Dot = styled.div<{
  active: boolean;
}>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.active ? "#fff" : "rgba(255, 255, 255, 0.5)"};
  margin: 0 5px;
  cursor: pointer;
`;
