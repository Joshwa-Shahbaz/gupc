import React, { useState } from "react";
import styled from "styled-components";
import {
  AccordionContainer,
  AccordionContent,
  AccordionHeader,
  AccordionIcon,
  AccordionItem,
  AccordionTitle,
  ItemWrapper,
} from "./styled";
import ContainerWrapper from "@/components/ContainerWrapper";
import { title } from "process";
import HeadCommonWrapper from "@/components/UI/HeadCommonWrapper";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index: any) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const accordionItems = [
    {
      title: "Who is jesus christ? Is jesus God or Son or God?",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      title: "What is the concept of Trinity?",
      content:
        "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham",
    },
    {
      title: "Deliverance from sin and its consequences",
      content:
        "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham",
    },
    {
      title: "Who is the Holy Spirit? ",
      content:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    },
  ];

  const testData = {
    variant2: {
      title: "FAQ",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s ",
    },
  };

  // const heightCheck = document.getElementById("check");

  return (
    <ContainerWrapper>
      <AccordionContainer>
        <HeadCommonWrapper data={testData} />
        <ItemWrapper>
          {accordionItems.map((item, index) => (
            <AccordionItem key={index}>
              <AccordionHeader onClick={() => toggleAccordion(index)}>
                <AccordionTitle>{item.title}</AccordionTitle>
                <AccordionIcon isOpen={activeIndex === index}>▼</AccordionIcon>
              </AccordionHeader>
              <AccordionContent id="check" isOpen={activeIndex === index}>
                <p>{item.content}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </ItemWrapper>
      </AccordionContainer>
    </ContainerWrapper>
  );
};

export default Accordion;
