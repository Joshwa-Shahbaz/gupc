import styled from "styled-components";

export const GalleryContainer = styled.div`
  display: grid;
  padding-top: 180px;
  gap: 1rem; /* Tailwind class: gap-4 */
`;

export const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Tailwind class: grid-cols-5 */
  gap: 1rem; /* Tailwind class: gap-4 */
`;
export const Image = styled.img`
  height: auto; /* Tailwind class: h-auto */
  max-width: 100%; /* Tailwind class: max-w-full */
  border-radius: 0.5rem; /* Tailwind class: rounded-lg */
`;
