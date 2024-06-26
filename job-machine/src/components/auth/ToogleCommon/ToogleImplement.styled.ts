import styled from 'styled-components';

export const ContainerToogleImplement = styled.div`
  position: absolute;
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 30px;
  text-align: center;
  top: 0;
  transform: translateX(0);
  transition: all 0.6s ease-in-out;

  &.toogle-left {
    transform: translateX(-200%);
  }

  .ant-typography {
    color: #fff;
  }

  &.toogle-right {
    right: 0;
    transform: translateX(0);
  }
`;
