import ProgressBar from "@/components/UI/ProgressBar";
import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import { LeftColStyled, RightColStyled, RowStyled } from "./styled";
import ContainerWrapper from "@/components/ContainerWrapper";
import { motion } from "framer-motion";

const ProgressData = [
  { Percentage: 50, Title: "JavaScript" },
  { Percentage: 100, Title: "Designing UI UX" },
  { Percentage: 80, Title: "React JS" },
  { Percentage: 40, Title: "Next JS" },
  { Percentage: 50, Title: "Gatsby" },
  { Percentage: 50, Title: "Headless CMS" },
];

const AboutMe = () => {
  const [isInView, setIsInView] = useState(false);
  const aboutMeRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    if (aboutMeRef.current) {
      observer.observe(aboutMeRef.current);
    }

    return () => {
      if (aboutMeRef.current) {
        observer.unobserve(aboutMeRef.current);
      }
    };
  }, [aboutMeRef]);

  return (
    <ContainerWrapper as="section" id="about-me-section" ref={aboutMeRef}>
      <div style={{ marginTop: "120px" }}>
        <RowStyled>
          <LeftColStyled>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <Image
                style={{
                  borderRadius: "50%",
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
                src="/images/1.jpg"
                alt="Profile Picture"
                width={500}
                height={500}
              />
            </motion.div>
          </LeftColStyled>

          <RightColStyled>
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <p>
                I am an experienced Frontend Developer with a strong background
                in JavaScript and extensive experience with React, Next.js, and
                Gatsby. My skills also include working with modern CSS
                frameworks such as Tailwind CSS, SASS, Styled Components, and
                Material-UI.
              </p>
            </motion.div>
          </RightColStyled>
        </RowStyled>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <ProgressBar data={ProgressData} />
        </motion.div>
      </div>
    </ContainerWrapper>
  );
};

export default AboutMe;
