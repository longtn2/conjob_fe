import { Table } from 'antd';
import { styled } from 'styled-components';

export const ContainerHistoryVideo = styled.div`
  .ant-typography h2 {
    margin-bottom: 1.75rem;
  }

  .ant-card {
    margin: 5% 0;
  }

  .header-filter {
    width: 10rem;
  }
  .action-caption {
    margin-top: 5px;
  }
  .action-caption a {
    padding: 5px 10px 5px 0;
  }
  .action-caption .read-more {
    margin-right: 10px;
    border-right: 1px solid #dadada;
  }
  .spin-loading-content {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .responsive-content-table,
  .ant-typography,
  .ant-typography span,
  th.ant-table-cell,
  td .ant-table-cell {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .responsive-content-table,
  .ant-typography span,
  .ant-typography {
    font-size: 1vw;
  }
  th.ant-table-cell {
    font-size: 1vw;
  }
  h2:where(.css-dev-only-do-not-override-1t4s1c0).ant-typography,
  div:where(.css-dev-only-do-not-override-1t4s1c0).ant-typography-h2,
  div:where(.css-dev-only-do-not-override-1t4s1c0).ant-typography-h2 > textarea,
  :where(.css-dev-only-do-not-override-1t4s1c0).ant-typography h2 {
    font-size: 1.5vw !important;
    text-align: justify;
  }
  :where(.css-dev-only-do-not-override-1t4s1c0).ant-table-wrapper
    .ant-table-pagination {
    font-size: 0.8vw;
  }
  .date-range {
    width: 100%;
  }
`;
