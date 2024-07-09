import styled from "styled-components";

export const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;

export const BackgroundImage1 = styled.div`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url("https://img.freepik.com/free-photo/interior-church-architecture-background_1409-5538.jpg");
  background-size: cover;
  background-position: center;
`;

export const BackgroundImage2 = styled.div`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://openhousedublin.com/wp-content/uploads/2022/10/Christ-Church-3.jpeg");
  background-size: cover;
  background-position: center;
`;

export const BackgroundImage3 = styled.div`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://christchurchcathedral.ie/wp-content/uploads/2021/07/Christ-Church-Cathedral-Nave-from-West-Door-1024x682.jpg");
  background-size: cover;
  background-position: center;
`;

export const CenteredText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
  z-index: 10;
  font-family: Arial, sans-serif;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  justify-content: center;
  padding: 0 20px;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.largeScreen}px) {
    max-width: 860px;
    padding: 0px;
  }
`;

export const IndicatorContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  z-index: 10;
`;

export const IndicatorDot = styled.div<{ active: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.active ? "#fff" : "rgba(255, 255, 255, 0.5)"};
  margin: 0 5px;
  cursor: pointer;
`;
