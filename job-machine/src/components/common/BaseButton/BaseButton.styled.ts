import { Button as AntdButton } from 'antd';
import styled, { css } from 'styled-components';

export const Button = styled(AntdButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  gap: 0.3rem;
  transition-duration: 0.3s;
  background-color: #f44336;
  color: #fff;
  .ant-btn {
    border: 5px solid #fff;
  }
  &:hover {
    background-color: #ff5722 !important;
    color: #b71c1c !important;
  }
`;
