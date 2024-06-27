import styled from "styled-components";
import { Progress } from "antd";

// Define styled components for progress bars
export const CustomProgress = styled(Progress)`
  .ant-progress-bg {
    background-color: red;
  }
  .ant-progress-inner {
    background-color: #36454f;
  }
  .ant-progress-text {
    color: white;
    font-size: 16px;
    font-weight: 600;
  }
`;

export const RowStyled = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 30px;
  padding: 120px 60px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    padding: 60px 30px;
    gap: 20px;
  }
`;

export const ColStyled = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.largeScreen}px) {
    width: 80%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: 100%;
  }
`;

export const TitleSyled = styled.div`
  font-size: 22px;
  font-weight: 500;
  color: #fff;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 20px;
  }
`;
