import ProgressBar from "@/components/UI/ProgressBar";
import React from "react";
import { RowStyled } from "./styled";
import ContainerWrapper from "@/components/ContainerWrapper";

const ProgressData = [
  { Percentage: 50, Title: "JavaScript" },
  { Percentage: 100, Title: "Designing UI UX" },
  { Percentage: 80, Title: "React JS" },
  { Percentage: 40, Title: "Next JS" },
  { Percentage: 50, Title: "Gatsby" },
  { Percentage: 50, Title: "Headless CMS" },
];

const AboutMe = () => {
  return (
    <ContainerWrapper as="section" id="about-me-section">
      <div style={{ marginTop: "120px" }}>
        <RowStyled>
          <div
            style={{
              backgroundColor: "red",
              width: "30%",
              height: "390px",
              borderRadius: "50%",
            }}
          ></div>
          <div style={{ flex: "1" }}>
            <p>
              I am an experienced Frontend Developer with a strong background in
              JavaScript and extensive experience with React, Next.js, and
              Gatsby. My skills also include working with modern CSS frameworks
              such as Tailwind CSS, SASS, Styled Components, and Material-UI.
            </p>
          </div>
        </RowStyled>
        <ProgressBar data={ProgressData} />
      </div>
    </ContainerWrapper>
  );
};

export default AboutMe;
