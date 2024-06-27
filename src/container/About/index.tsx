import ProgressBar from "@/components/UI/ProgressBar";
import Image from "next/image";
import React from "react";
import { LeftColStyled, RightColStyled, RowStyled } from "./styled";
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
          <LeftColStyled>
            <Image
              style={{
                borderRadius: "50%",
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
              src="/images/giphy.webp"
              alt="Profile Picture"
              width={500}
              height={500}
            />
          </LeftColStyled>
          <RightColStyled>
            <p>
              I am an experienced Frontend Developer with a strong background in
              JavaScript and extensive experience with React, Next.js, and
              Gatsby. My skills also include working with modern CSS frameworks
              such as Tailwind CSS, SASS, Styled Components, and Material-UI.
            </p>
          </RightColStyled>
        </RowStyled>
        <ProgressBar data={ProgressData} />
      </div>
    </ContainerWrapper>
  );
};

export default AboutMe;
