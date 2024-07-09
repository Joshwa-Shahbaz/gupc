import React, { useEffect, useRef, useState } from "react";
// styles

// react icons
import ContainerWrapper from "@/components/ContainerWrapper";
import { ServicesWrapperStyled } from "./styled";
// container

type ServicesSectionProps = {
  data: {
    mainHeading: string;
    title: string;
    ServicesContent: {
      title: string;
      description: string;
      link: string;
    }[];
  };
};

const Services: React.FC<ServicesSectionProps> = ({ data }) => {
  const [inView, setInView] = useState(false);
  const targetRef = useRef(null);

  const handleIntersection: IntersectionObserverCallback = (entries) => {
    if (entries[0].isIntersecting) {
      setInView(true);
    } else {
      setInView(false);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
    });
    const targetElement = targetRef.current;

    if (targetElement) {
      observer.observe(targetElement);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <ServicesWrapperStyled id="services" ref={targetRef} view={inView}>
      <ContainerWrapper>
        <h1>check</h1>
      </ContainerWrapper>
    </ServicesWrapperStyled>
  );
};

export default Services;
