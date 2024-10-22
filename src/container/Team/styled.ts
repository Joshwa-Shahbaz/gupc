import styled from "styled-components";

export const PinnacleWrapperStyled = styled.div`
  margin-top: 80px;
  padding: 80px 0;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)),
    url("https://i.pinimg.com/enabled_lo/236x/c8/12/44/c81244fc51d7f797446cb4663d4329d0.jpg");

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (min-width: ${({ theme }) => theme.breakpoints.largeScreen}px) {
    padding: 150px 0;
    margin-top: 150px;
  }
`;

export const HeadingWrapperStyled = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  gap: 5px;

  @media (min-width: ${({ theme }) => theme.breakpoints.largeScreen}px) {
    gap: 20px;
  }
`;

export const TeamWrapperStyled = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  gap: 150px;

  @media (min-width: 1316px) {
    gap: 33px;
    margin-top: 50px;
  }
`;

export const TeamCardStyled = styled.div`
  position: relative;
  width: 380px;
  height: 480px;
  max-width: 400px;
  perspective: 1000px; /* Needed to give the 3D effect */

  @media (min-width: ${({ theme }) => theme.breakpoints.largeScreen}px) {
    width: 400px;
  }

  &:hover .card-inner {
    transform: rotateY(180deg);
  }
`;

export const CardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
`;

export const CardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden; /* Hide the back face when the front is visible */
`;

export const CardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    180deg,
    /* Vertical gradient */ #cd7f32,
    /* Bright yellow */ #ffff /* Deep orange */
  );
  border-radius: 16px;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 20px;
  padding: 20px;
`;

export const ImageStyled = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 16px;
`;

export const Name = styled.h5`
  color: #000;
`;

export const Title = styled.h4`
  color: #000;
  font-weight: 700;
`;

export const Description = styled.p`
  color: #000;
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 20%;
`;

export const MainHeadStyled = styled.h3`
  color: #fff;
`;
