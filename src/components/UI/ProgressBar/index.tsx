import React from "react";
import ContainerWrapper from "@/components/ContainerWrapper";
import { ColStyled, CustomProgress, RowStyled, TitleSyled } from "./styled";

type ProgressBarProps = {
  data: {
    Percentage: number;
    Title: string;
  }[];
};

const ProgressBar: React.FC<ProgressBarProps> = ({ data }) => {
  const twoColors = {
    "0%": "#F2C274",
    "100%": "#87d068",
  };
  const conicColors = {
    "0%": "#F2C274",
    "50%": "#ffe58f",
    "100%": "#ffccc7",
  };

  return (
    <RowStyled>
      {data.map((item, index) => (
        <ColStyled key={index}>
          <TitleSyled>{item.Title}</TitleSyled>
          <CustomProgress
            percent={item.Percentage}
            strokeColor={twoColors}
            format={() => (
              <span style={{ color: "white" }}>{item.Percentage}%</span>
            )}
          />
        </ColStyled>
      ))}
    </RowStyled>
  );
};

export default ProgressBar;
