import { Card } from 'antd';
import { styled } from 'styled-components';

export const ContainerHeaderProfile = styled(Card)`
  .ant-row {
    flex-flow: nowrap;
  }

  .ant-col
    .col-image
    .ant-col-xs-24
    .ant-col-sm-8
    .ant-col-lg-4
    .css-dev-only-do-not-override-1kuana8 {
    margin-right: 2rem;
  }
  .col-image {
    width: 150px;
    height: 150px;
  }
  .icons {
    background-color: #dadada;
    padding: 1.5px;
    position: absolute;
    width: 32px;
    height: 32px;
    font-size: large;
    text-align: center;
    border-radius: 50%;
    bottom: -2%;
    right: 15%;
  }
  .icons:hover {
    background-color: #f2f5f2;
  }

  .primary-typhography {
    color: var(--primary-color);
  }
`;
