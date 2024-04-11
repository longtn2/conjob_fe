import { Button as AntdButton } from 'antd';
import styled, { css } from 'styled-components';

export const Button = styled(AntdButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  gap: 0.3rem;
  transition-duration: 0.3s;
  outline: none;
  border: none;

  &.btn-delete{
    background-color: var(--button-primary-color) !important;
    color: #fff !important;
  }
  &.btn-delete:hover {
    background-color: var(--hover-primary-color) !important;
    color: #fff !important;
  }
  &.btn-accept{
    background-color: var(--button-secondary-color) !important;
    color: #fff !important;
  }
  &.btn-accept:hover {
    background-color: var(--hover-secondary-color) !important;
    color: #fff !important;
  }
  &.btn-reset{
    background-color: var(---container-color) !important;
    color: var(--text-color-btn) !important;
  }
  &.btn-reset:hover {
    background-color: var(--border-color) !important;
    color: #fff !important;
  }
  &.btn-find{
    background-color: var(--button-secondary-color) !important;
    color: #fff !important;
  }
  &.btn-find:hover {
    background-color: var(--hover-secondary-color) !important;
    color: #fff !important;
  }
`;