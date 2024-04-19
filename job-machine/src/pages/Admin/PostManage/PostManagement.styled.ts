import { Card } from "antd";
import styled from "styled-components";

export const ContainerPost = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  .description-scroll {
    overflow-y: auto;
  }

  .card__content {
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    max-width: 800px;
    margin-top: -20px;
  }

  .card__video {
    max-width: 100%;
    height: auto;
    display: block;
    position: relative;
  }

  .card__player {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, -150%);
    width: 100%;
  }

  .card__action-top {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
    gap: 10px;
  }

  .btn-checkbox {
    margin-left: 100px;
    margin-top: -50px;
    width: 20px;
  }
`;

export const CardCustom = styled(Card)`
  font-size: 16px;
  color: #ccc;
  max-height: 550px;
  width: 100%;
  overflow-y: hidden;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

  &:hover {
    overflow-y: auto;
  }

  &::-webkit-scrollbar {
    width: 0px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  @media only screen and (min-width: 1200px) {
    font-size: 18px;
  }

  .search {
    margin-top: 10px;
  }

  :where(.css-dev-only-do-not-override-1kuana8).ant-tag.ant-tag-red {
    border-radius: 10px;
  }
`;
