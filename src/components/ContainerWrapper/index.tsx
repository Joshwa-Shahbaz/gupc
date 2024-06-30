import React, { ElementType, ReactNode, forwardRef, Ref } from "react";
import { ContainerWrapperStyled } from "./styled";

type ContainerWrapperProps = {
  children: ReactNode;
  as?: ElementType;
  id?: string;
};

const ContainerWrapper = forwardRef<HTMLElement, ContainerWrapperProps>(
  ({ children, as, id }, ref) => {
    return (
      <ContainerWrapperStyled as={as} id={id} ref={ref as Ref<HTMLElement>}>
        {children}
      </ContainerWrapperStyled>
    );
  }
);

ContainerWrapper.displayName = "ContainerWrapper";

export default ContainerWrapper;
