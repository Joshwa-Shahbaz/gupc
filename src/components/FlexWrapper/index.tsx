import React, { ReactNode, forwardRef } from "react";
// styles
import { FLexWrapperStyled } from "./styled";

type FlexWrapperProps = {
  justifyContent?: string;
  children: ReactNode;
  FlexDirection?: string;
  gap?: number;
};

const FlexWrapper = forwardRef<HTMLDivElement, FlexWrapperProps>(
  ({ justifyContent, children, FlexDirection, gap }, ref) => {
    return (
      <FLexWrapperStyled
        ref={ref}
        justifyContent={justifyContent}
        FlexDirection={FlexDirection}
        gap={gap}
      >
        {children}
      </FLexWrapperStyled>
    );
  }
);

FlexWrapper.displayName = "FlexWrapper";

export default FlexWrapper;
