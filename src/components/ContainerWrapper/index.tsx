import React, { ElementType, ReactNode } from "react";
import { ContainerWrapperStyled } from "./styled";

type ContainerWrapperProps = {
  children: ReactNode;
  as?: ElementType;
  id?: string;
};

const ContainerWrapper: React.FC<ContainerWrapperProps> = ({
  children,
  as,
  id,
}) => {
  return (
    <ContainerWrapperStyled as={as} id={id}>
      {children}
    </ContainerWrapperStyled>
  );
};

export default ContainerWrapper;
