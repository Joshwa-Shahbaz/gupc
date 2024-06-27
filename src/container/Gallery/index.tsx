import ContainerWrapper from "@/components/ContainerWrapper";
import React from "react";
import { GalleryContainer, Image, ImageContainer } from "./styled";

const Gallery = () => {
  return (
    <ContainerWrapper as="section">
      <GalleryContainer>
        <div>
          <Image
            src="https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg"
            alt=""
          />
        </div>
        <ImageContainer>
          <div>
            <Image
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
              alt=""
            />
          </div>
          <div>
            <Image
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
              alt=""
            />
          </div>
          <div>
            <Image
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
              alt=""
            />
          </div>
        </ImageContainer>
      </GalleryContainer>
    </ContainerWrapper>
  );
};

export default Gallery;
