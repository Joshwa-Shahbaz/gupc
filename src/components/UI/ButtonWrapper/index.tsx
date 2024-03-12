import React, { ReactNode } from "react";
import { ButtonWrapperStyled } from "./styled";

type ButtonWarpperprops = {
  children: ReactNode;
  buttonType?: "submit" | "reset" | "button";
  buttonProperties?: React.HTMLProps<HTMLButtonElement>;
  variant?: {
    BorderRadius?: number;
    backgroundColor?: string;
  };
};

const ButtonWrapper: React.FC<ButtonWarpperprops> = ({
  children,
  variant,
  buttonProperties,
  buttonType,
}) => {
  return (
    <ButtonWrapperStyled {...variant} {...buttonProperties} type={buttonType}>
      {children}
    </ButtonWrapperStyled>
  );
};

export default ButtonWrapper;
