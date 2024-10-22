import styled from "styled-components";

export const AccordionContainer = styled.div`
  margin-top: 80px;
  @media (min-width: ${({ theme }) => theme.breakpoints.largeScreen}px) {
    margin-top: 150px;
  }
`;

export const AccordionItem = styled.div`
  border-bottom: 1px solid #ccc;
  margin: 0px;
  transition: opacity 0.3s ease;

  @media (min-width: ${({ theme }) => theme.breakpoints.largeScreen}px) {
    margin-top: 50px;
    margin: 20px 0 0 20px;
  }
`;

export const AccordionHeader = styled.div`
  padding: 15px 0;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 10px;
`;

export const AccordionTitle = styled.h5`
  margin: 0;
`;

export const ItemWrapper = styled.div`
  margin-top: 10px;

  @media (min-width: ${({ theme }) => theme.breakpoints.largeScreen}px) {
    margin-top: 50px;
  }
`;

export const AccordionIcon = styled.span<{
  isOpen: any;
}>`
  font-size: 16px;
  transition: transform 0.3s ease-in-out;
  transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0deg)")};
`;

export const AccordionContent = styled.div<{
  isOpen: any;
}>`
  max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  overflow: hidden;
  transition: opacity 0.3s ease;
  padding: ${({ isOpen }) => (isOpen ? "10px 0" : "0 15px")};
  background-color: #fff;
`;
