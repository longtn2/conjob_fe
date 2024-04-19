import styled from "styled-components";
import { Typography } from "antd";

export const Header = styled.div`
  height: 5.5rem;
  margin-left: 1.5625rem;
  display: flex;
  align-items: center;
`;

export const AuthorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0.625rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 21.25rem;
  position: relative;
  border-radius: 2px;
  transition: 0.3s;

  .read-more {
    color: var(--text-color-btn) !important;
  }
`;

export const Author = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: #1f1f1f;
  line-height: 1.5625rem;
`;

export const InfoWrapper = styled.div`
  padding: 1.25rem;

  @media only screen and (min-width: 1200px) {
    padding: 1rem;
  }

  @media only screen and (min-width: 1536px) {
    padding: 1.85rem;
  }
`;

export const InfoHeader = styled.div`
  display: flex;
  margin-bottom: 1rem;

  @media only screen and (min-width: 768px) {
    margin-bottom: 0.625rem;
  }

  @media only screen and (min-width: 1200px) {
    margin-bottom: 1.25rem;
  }
`;

export const Title = styled.div`
  font-size: 16px;
  font-weight: 500;
  width: 80%;
  line-height: 1.375rem;
  color: #000;
  margin-top: -20px;

  @media only screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

export const DateTime = styled(Typography.Text)`
  font-size: 16px;
  color: #ccc;
  line-height: 1.25rem;
  margintop: 3rem;
  padding-top: 0.5rem;
`;

export const Description = styled.div`
  font-size: 16px;
  color: #ccc;

  @media only screen and (min-width: 1200px) {
    font-size: 18px;
  }
`;

export const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.625rem;
  padding: 0 1.25rem 1.25rem;
`;
