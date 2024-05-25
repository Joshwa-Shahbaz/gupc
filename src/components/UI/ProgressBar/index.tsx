import React, { useEffect, useState } from "react";
import {
  SkillBarWrapper,
  SkillContainer,
  SkillLevel,
  SkillName,
} from "./styled";

type ProgressBarProps = {
  name: string;
  level: string | number;
};

const ProgressBar: React.FC<ProgressBarProps> = ({ name, level }) => {
  const [width, setWidth] = useState("0%");

  useEffect(() => {
    // Set width to the given level after component mounts
    setWidth(level);
  }, [level]);
  return (
    <SkillContainer>
      <SkillName>{name}</SkillName>
      <SkillBarWrapper>
        <SkillLevel level={level}>{level}</SkillLevel>
      </SkillBarWrapper>
    </SkillContainer>
  );
};

export default ProgressBar;
