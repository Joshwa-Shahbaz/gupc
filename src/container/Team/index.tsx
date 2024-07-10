import React from "react";
import {
  HeadingWrapperStyled,
  ImageStyled,
  InfoCardStyled,
  PinnacleWrapperStyled,
  TeamCardStyled,
} from "./styled";
import ContainerWrapper from "@/components/ContainerWrapper";

const Team = () => {
  return (
    <ContainerWrapper>
      <PinnacleWrapperStyled>
        <HeadingWrapperStyled>
          <div>
            <h5
              style={{
                color: "#F2C274",
                marginBottom: "20px",
              }}
            >
              Meet Our Team
            </h5>
          </div>
          <div>
            <h2>Let's Make A Difference Today</h2>
          </div>
        </HeadingWrapperStyled>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "50px",
            gap: "33px",
          }}
        >
          <TeamCardStyled>
            <ImageStyled
              src="https://cdn.prod.website-files.com/63ab89cf916d9b6c7c14fdc4/64c5b89f2cff33c4e4ee3085_Vanderbloemen.webp"
              alt=""
            />
            <InfoCardStyled></InfoCardStyled>
          </TeamCardStyled>{" "}
          <TeamCardStyled>
            <ImageStyled
              src="https://images.squarespace-cdn.com/content/v1/5e0570fb0e908962eb5d5534/1577421528918-2UG0G1G3AP9IWHFGBUVL/MAP02003-Edit-2.jpg"
              alt=""
            />
            <InfoCardStyled></InfoCardStyled>
          </TeamCardStyled>{" "}
          <TeamCardStyled>
            <ImageStyled
              src="https://www.bellanaija.com/wp-content/uploads/2014/09/Adeboye-NEW-BellaNaija.jpeg"
              alt=""
            />
            <InfoCardStyled></InfoCardStyled>
          </TeamCardStyled>
        </div>
      </PinnacleWrapperStyled>
    </ContainerWrapper>
  );
};

export default Team;
