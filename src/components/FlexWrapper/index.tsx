import React, { ReactNode } from "react";
// styles
import { FLexWrapperStyled } from "./styled";

type FlexWarpperProps = {
  justifyContent?: string;
  children: ReactNode;
};

const FlexWrapper: React.FC<FlexWarpperProps> = ({
  justifyContent,
  children,
}) => {
  return (
    <div>
      <FLexWrapperStyled justifyContent={justifyContent}>
        {children}
      </FLexWrapperStyled>
    </div>
  );
};

export default FlexWrapper;
