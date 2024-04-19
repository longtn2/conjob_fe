import { Button as AntdButton } from 'antd';
import styled, { css } from 'styled-components';

export const CustomButton = styled(AntdButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  gap: 0.3rem;
  transition-duration: 0.3s;
  color: #fff;
  .ant-btn {
    border: 5px solid #fff;
  }
  &.ant-btn-primary {
    background-color: #b71c1c;
    &.ant-btn-primary:hover {
      background-color: #ff5722;
      color: #ffffff;
      border: 3px solid #ffffff;
    }
  }

  &.ant-btn-secondary {
    background-color: #18b528;
    &.ant-btn-secondary:hover {
      background-color: #50b528;
      color: #ffffff;
    }
  }
`;
