import { Card } from 'antd';
import { styled } from 'styled-components';

export const ContainerHeaderProfile = styled(Card)`
  @media screen and (max-width: 768px) {
    .ant-row {
      margin: 0 auto;
    }
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
  @media screen and (max-width: 641px) {
    .icons {
      bottom: 0;
      right: 24%;
    }
  }

  @media screen and (min-width: 641px) and (max-width: 1024px) {
    .icons {
      right: 19%;
    }
  }
  .icons:hover {
    background-color: #f2f5f2;
  }

  .primary-typhography {
    color: var(--primary-color);
  }
`;