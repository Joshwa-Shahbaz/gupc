import styled from "styled-components";

export const Section = styled.section`
  padding: 5rem 0;
  margin-top: 80px;
  background: linear-gradient(45deg, #880808, #f2c274) !important;
  position: relative;

  @media (min-width: 1024px) {
    margin-top: 180px;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const TextContainer = styled.div`
  width: 100%;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    width: 50%;
    margin-bottom: 0;
  }
`;

export const Title = styled.h1`
  color: white;
  font-size: 3rem;
  font-weight: bold;
  line-height: 1.2;
  margin-bottom: 1.5rem;
`;

export const Description = styled.p`
  color: white;
  font-size: 1.25rem;
  margin-bottom: 2rem;
`;

export const ImageContainer = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: 50%;
  }

  img {
    width: 100%;
    border-radius: 0.75rem;
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  }
`;
