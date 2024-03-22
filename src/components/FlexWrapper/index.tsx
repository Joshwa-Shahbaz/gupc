import React, { ReactNode } from "react";
// styles
import { FLexWrapperStyled } from "./styled";

type FlexWarpperProps = {
  justifyContent?: string;
  children: ReactNode;
  FlexDirection?: string;
  gap?: number;
};

const FlexWrapper: React.FC<FlexWarpperProps> = ({
  justifyContent,
  children,
  FlexDirection,
  gap,
}) => {
  return (
    <div>
      <FLexWrapperStyled
        justifyContent={justifyContent}
        FlexDirection={FlexDirection}
        gap={gap}
      >
        {children}
      </FLexWrapperStyled>
    </div>
  );
};

export default FlexWrapper;
