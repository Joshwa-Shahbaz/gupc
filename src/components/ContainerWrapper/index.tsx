import React, { ElementType, ReactNode } from "react";
import { ContainerWrapperStyled } from "./styled";

type ContainerWrapperProps = {
  children: ReactNode;
  as?: ElementType;
};

const ContainerWrapper: React.FC<ContainerWrapperProps> = ({ children }) => {
  return <ContainerWrapperStyled>{children}</ContainerWrapperStyled>;
};

export default ContainerWrapper;
