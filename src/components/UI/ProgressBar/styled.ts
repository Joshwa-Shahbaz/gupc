import React from "react";
import styled from "styled-components";

export const SkillContainer = styled.div`
  margin-bottom: 20px;
`;

export const SkillName = styled.h3`
  margin: 5px 0;
`;

export const SkillBarWrapper = styled.div`
  width: 100%;
  background-color: #f0f0f0;
  border-radius: 5px;
`;

export const SkillLevel = styled.div<{
  level: string | number;
}>`
  text-align: right;
  padding: 5px;
  color: #fff;
  background-color: #007bff; /* Change color as needed */
  border-radius: 5px;
  width: 0; /* Start from zero width */
  transition: width 1s ease; /* Transition effect */
  ${SkillContainer}:hover & {
    width: ${(props) => props.level};
  }
`;
