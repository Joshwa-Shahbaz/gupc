import React from "react";
import styled from "styled-components";
import { DescStyled, Title, Variant1Wrapper, Variant2Wrapper } from "./styles";

type HeadCommonWrapperProps = {
  data: {
    variant1?: {
      title?: string;
      description?: string;
    };
    variant2?: {
      title: string;
      description?: string;
    };
  };
};

const HeadCommonWrapper: React.FC<HeadCommonWrapperProps> = ({ data }) => {
  return (
    <>
      {data.variant1 && (
        <Variant1Wrapper>
          <div>
            <h5>{data.variant1.title}</h5>
          </div>
          <div>
            <h3>{data.variant1.description}</h3>
          </div>
        </Variant1Wrapper>
      )}
      {data.variant2 && (
        <Variant2Wrapper>
          <div>
            <Title>{data.variant2.title}</Title>
          </div>
          <div>
            <DescStyled>{data.variant2.description}</DescStyled>
          </div>
        </Variant2Wrapper>
      )}
    </>
  );
};

export default HeadCommonWrapper;
