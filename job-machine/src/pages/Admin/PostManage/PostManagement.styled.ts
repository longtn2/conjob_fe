import { Card } from 'antd';
import styled from 'styled-components';

export const ContainerPost = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  .container-row {
    width: 100% !important;
    margin-right: 20px;
  }

  .description-scroll {
    overflow-y: auto;
  }

  input[type='text'] {
    max-width: 100%;
  }

  .md-card-item {
    min-height: 450px;
    border-radius: 20px;
  }

  .card__action-top {
    display: flex;
    justify-content: flex-start;
    gap: 10px;
    bottom: 10px;
    background-size: contain;
    margin-left: 21px;
    position: absolute;
    transition: transform 0.3s ease, opacity 0.3s ease, visibility 0.3s ease;
  }

  .card__action-top button:hover {
    transform: scale(0.9);
  }

  .xl-card-item {
    height: 100% !important;
    position: relative;
  }

  .xs-card-item {
    display: block;
    height: 450px;
    border-radius: 20px;
    position: relative;

    .ant-image-mask {
      margin: 0 30px !important;
    }

    .header-card {
      position: sticky;
      top: 0;
      height: 5rem;
      z-index: 1;
      background: white;
    }
    .card-title {
      margin-top: -5px;
    }

    .xs_card__action-top {
      margin-top: 60px;
      position: absolute;
    }

    .xs_card__action-top button:hover {
      transform: scale(0.9);
    }

    .xl-video-player {
      height: 100%;
    }

    .xs_card__action-top {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      gap: 10px;
      background: #fff;
      padding: 5px 30px 5px 0px;
      position: sticky;
      bottom: -1px;
    }
    .reject-tag {
      margin-left: 28px;
    }
  }

  .xl-card-item {
    .ant-image-mask {
      margin: 0 !important;
    }
    .reject-tag {
      margin-left: 0;
    }
  }

  .xs-des {
    height: auto;
  }

  .card__content .xs-video-player {
    padding: 0 30px;
  }

  .card__content {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;

    .md-video-player {
      max-height: 200px;
      min-height: 200px;
      object-fit: cover;
    }
  }

  .video-image-content {
    position: absolute;
    width: 100%;
    height: 200px;
    left: 0;
    top: 0;
    // object-fit: cover;
  }

  .btn-find {
    font-weight: bold;
  }

  .btn-checkbox {
    right: 8px;
    position: absolute;
    top: 14px;
    z-index: 2;
    margin-right: 7px;
  }

  .header-card {
    height: 5rem;
  }

  .filter-section {
    background: var(--container-color-white);
    border-radius: 10px;
    padding: 5px 0 0 5px;
    margin-bottom: 14px;
  }

  .frame-section {
    border-radius: 10px;
    display: flex;
    align-items: center;
    padding: 0 4px;
    gap: 20px;
  }

  .pagination {
    margin-top: 24px;
    padding: 5px;
    border-radius: 10px;
    justify-content: flex-end;
    background-color: #fff;
  }
  .input-search {
    margin: 0;
  }

  .search-date {
    padding: 8px 10px;
  }

  .check-all {
    margin-top: 20px;
    font-weight: 600;
  }

  .ant-image-mask {
    margin: 0 !important;
  }

  .spin-container {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const CardCustom = styled(Card)`
  font-size: 16px;
  color: #ccc;
  overflow-y: hidden;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

  &:hover {
    overflow-y: auto;
  }

  &::-webkit-scrollbar {
    width: 0px;
  }

  @media only screen and (min-width: 1200px) {
    font-size: 18px;
  }

  .search {
    margin-top: 10px;
  }
  .read-more {
    color: var(--text-color-dark);
    font-size: var(--fs-text);
    font-weight: bold;
  }
  .read-more:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
